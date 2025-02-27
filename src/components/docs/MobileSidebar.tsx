'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import VersionSelect from './VersionSelect';
import FrameworkSelect from './FrameworkSelect';
import DocsSidebar from './DocsSidebar';

function MobileSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center justify-between md:hidden">
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-xs pt-0">
          <SheetHeader className="border-b px-4 py-4">
            <SheetTitle>Documentation</SheetTitle>
          </SheetHeader>
          <div className="px-4 py-3 space-y-4">
            <VersionSelect />
            <FrameworkSelect />
          </div>
          <DocsSidebar className="px-2" />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2">
        <VersionSelect />
        <FrameworkSelect />
      </div>
    </div>
  );
}

export default MobileSidebar;
