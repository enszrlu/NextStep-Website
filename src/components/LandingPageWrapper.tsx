import { LandingPageClient } from './LandingPageClient';
import { GitHubStars } from './GitHubStars';

export async function LandingPageWrapper() {
  return <LandingPageClient GitHubStarsComponent={<GitHubStars />} />;
}
