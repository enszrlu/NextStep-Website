import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { getGitHubData } from '@/lib/github';

interface GitHubStarsProps {
  className?: string;
}

export async function GitHubStars({ className = '' }: GitHubStarsProps) {
  const { starCount, topStargazers } = await getGitHubData();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center mb-2">
        {topStargazers.map((user, index) => (
          <div
            // key={user.login}
            // href={user.html_url}
            // target="_blank"
            // rel="noopener noreferrer"
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
