'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AnnouncementBanner: React.FC<{
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}> = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Image
            src="https://nextstepjs.vercel.app/icon.png"
            alt="NextStep Logo"
            width={32}
            height={32}
            className="rounded-full"
          />

          <p className="text-center sm:text-left">
            <span className="font-bold text-center sm:text-left">New:</span> NextStep
            v1.1.0-beta is out now with support for scrollable areas!
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/demo">
            <Button variant="secondary" className="w-full sm:w-auto">
              See Demo
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
            className="hover:bg-primary-foreground hover:text-primary"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
