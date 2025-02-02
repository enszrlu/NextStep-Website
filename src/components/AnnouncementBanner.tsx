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
            src="https://nextstepjs.com/icon.png"
            alt="NextStep - Lightweight Next.js Onboarding Library Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-center sm:text-left">
              <span className="font-bold text-center sm:text-left">New:</span> NextStep
              v.2 beta is out now! You can now use NextStep with any react framework!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
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
