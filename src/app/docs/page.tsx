import DocsPage from '@/components/DocsPage';
import { Suspense } from 'react';

export default function Docs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocsPage />
    </Suspense>
  );
}
