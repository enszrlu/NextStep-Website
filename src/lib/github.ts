'use server';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  followers?: number;
}

interface GitHubStargazer extends GitHubUser {
  followers: number;
}

interface GitHubData {
  starCount: number;
  topStargazers: GitHubStargazer[];
}

/**
 * Fetches GitHub repository data including star count and top stargazers
 * @returns Promise with star count and top stargazers with highest follower counts
 */
export async function getGitHubData(): Promise<GitHubData> {
  // Cache data for 1 hour (3600 seconds)
  const revalidate = 3600;

  try {
    // Fetch star count
    const repoResponse = await fetch('https://api.github.com/repos/enszrlu/nextstep', {
      next: { revalidate },
    });

    if (!repoResponse.ok) {
      throw new Error(`GitHub API error: ${repoResponse.status}`);
    }

    const repoData = await repoResponse.json();
    const starCount = repoData.stargazers_count;

    // Fetch stargazers
    const stargazersResponse = await fetch(
      'https://api.github.com/repos/enszrlu/nextstep/stargazers',
      { next: { revalidate } },
    );

    if (!stargazersResponse.ok) {
      throw new Error(`GitHub API error: ${stargazersResponse.status}`);
    }

    const stargazers = await stargazersResponse.json();

    // Get follower counts for each stargazer (limited to first 5 to avoid rate limits)
    const topStargazersPromises = stargazers.map(async (user: GitHubUser) => {
      const userResponse = await fetch(`https://api.github.com/users/${user.login}`, {
        next: { revalidate },
      });

      if (!userResponse.ok) {
        return { ...user, followers: 0 };
      }

      const userData = await userResponse.json();
      return {
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        followers: userData.followers,
      };
    });

    const stargazersWithFollowers = await Promise.all(topStargazersPromises);

    // Sort by follower count and take top 5
    const topStargazers = stargazersWithFollowers
      .sort((a, b) => b.followers - a.followers)
      .slice(0, 10);

    return {
      starCount,
      topStargazers,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    // Return fallback data
    return {
      starCount: 0,
      topStargazers: [],
    };
  }
}
