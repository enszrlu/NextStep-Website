import { LandingPageClient } from './LandingPageClient';
import { GitHubStars } from './GitHubStars';

export async function LandingPageWrapper({
  framework = 'Next.js and React',
}: {
  framework?: 'Next.js' | 'React' | 'Remix' | 'React Router' | 'Next.js and React';
}) {
  return (
    <LandingPageClient GitHubStarsComponent={<GitHubStars />} framework={framework} />
  );
}
