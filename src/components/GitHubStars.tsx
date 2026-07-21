'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface GitHubStats {
  starCount: number;
  stargazers: GitHubUser[];
}

interface GitHubStarsProps {
  className?: string;
}

const REPO = 'enszrlu/nextstep';
// Shown until live data arrives (and if the API is unreachable).
const FALLBACK_STAR_COUNT = 1020;
const CACHE_KEY = 'nextstep-github-stats-v1';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// The GitHub API is fetched from the visitor's browser: their own IP gets a
// fresh 60 req/hour unauthenticated budget, unlike shared build/CI egress IPs
// which GitHub blocks. Two requests per visitor per day, cached in
// localStorage.
async function fetchGitHubStats(): Promise<GitHubStats> {
  const [repoResponse, stargazersResponse] = await Promise.all([
    fetch(`https://api.github.com/repos/${REPO}`),
    fetch(`https://api.github.com/repos/${REPO}/stargazers?per_page=10`),
  ]);

  if (!repoResponse.ok) {
    throw new Error(`GitHub API error: ${repoResponse.status}`);
  }

  const repoData = await repoResponse.json();
  const stargazers: GitHubUser[] = stargazersResponse.ok
    ? await stargazersResponse.json()
    : [];

  return {
    starCount: repoData.stargazers_count,
    stargazers: stargazers.map(({ login, avatar_url, html_url }) => ({
      login,
      avatar_url,
      html_url,
    })),
  };
}

function readCache(): GitHubStats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_DURATION) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(data: GitHubStats) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // Storage full or unavailable — live without the cache.
  }
}

export function GitHubStars({ className = '' }: GitHubStarsProps) {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setStats(cached);
      return;
    }

    let cancelled = false;
    fetchGitHubStats()
      .then((data) => {
        if (cancelled) return;
        setStats(data);
        writeCache(data);
      })
      .catch(() => {
        // Leave the fallback count in place.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const starCount = stats?.starCount ?? FALLBACK_STAR_COUNT;
  const stargazers = stats?.stargazers ?? [];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center mb-2">
        {stargazers.map((user, index) => (
          <div
            key={user.login}
            className="transition-transform hover:scale-110"
            style={{ marginLeft: index > 0 ? '-15px' : '0' }}
          >
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              width={48}
              height={48}
              className="rounded-full border-2 border-background"
              unoptimized
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-2xl font-bold">{starCount.toLocaleString()}</span>
        <span className="text-xl text-muted-foreground">developers starred</span>
      </div>
    </div>
  );
}
