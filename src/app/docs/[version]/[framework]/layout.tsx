import VersionSelect from '@/components/docs/VersionSelect';
import DocsSidebar from '@/components/docs/DocsSidebar';
import { notFound } from 'next/navigation';
import React from 'react';
import MobileSidebar from '@/components/docs/MobileSidebar';
import FrameworkSelect from '@/components/docs/FrameworkSelect';

export const versionOptions = [
  { label: '1.0.x', value: '1-0-x' },
  { label: '1.1.x', value: '1-1-x' },
  { label: '1.2.x', value: '1-2-x' },
  { label: '1.3.x (latest)', value: '1-3-x' },
  { label: '2.x (beta)', value: '2-x' },
  { label: 'Latest', value: 'latest' },
];

export const frameworkOptions = [
  { label: 'Next.js', value: 'nextjs' },
  { label: 'React Router', value: 'react-router' },
  { label: 'Remix', value: 'remix' },
  { label: 'React', value: 'react' },
];

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { version: string; framework: string };
}) {
  // Check if version is supported
  if (!versionOptions.map((option) => option.value).includes(params.version)) {
    notFound();
  }
  return (
    <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <MobileSidebar version={params.version} framework={params.framework} />
      {/* Desktop Sidebar */}
      <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <div className="h-full py-6 pl-2 pr-4 lg:py-8">
          <div className="flex items-start gap-2 flex-col pb-6">
            <VersionSelect currentVersion={params.version} />
            <FrameworkSelect framework={params.framework} />
          </div>
          <DocsSidebar />
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
        <div className="mx-auto w-full min-w-0">{children}</div>
      </main>
    </div>
  );
}
