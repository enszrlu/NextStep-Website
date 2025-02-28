import VersionSelect from '@/components/docs/VersionSelect';
import DocsSidebar from '@/components/docs/DocsSidebar';
import MobileSidebar from '@/components/docs/MobileSidebar';
import FrameworkSelect from '@/components/docs/FrameworkSelect';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 h-full">
      <MobileSidebar />
      {/* Desktop Sidebar */}
      <aside className="fixed top-16 z-30 hidden w-full shrink-0 overflow-y-auto border-r md:sticky md:block h-full">
        <div className="h-full py-6 pl-2 pr-4 lg:py-8">
          <div className="flex items-start gap-2 flex-col pb-6">
            <VersionSelect />
            <FrameworkSelect />
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
