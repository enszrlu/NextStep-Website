import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { PiXLogo } from 'react-icons/pi';
import { Coffee } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="container mx-auto py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center gap-2">
        <Image
          src="https://nextstepjs.com/icon.png"
          alt="NextStep - Lightweight Next.js Onboarding Library Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />
        <p className="hidden md:block">NextStep</p>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/docs" className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span className="hidden md:block">Docs</span>
        </Link>
        <Link
          href="https://github.com/enszrlu/NextStep"
          className="flex items-center space-x-2"
        >
          <SiGithub className="w-5 h-5" />
          <span className="hidden md:block">GitHub</span>
        </Link>
        {/* Twitter */}
        <Link href="https://x.com/AlexZDevs" target="_blank">
          <Button variant="outline" className="flex items-center space-x-2">
            <PiXLogo className="w-5 h-5" />
            <span className="hidden md:block">Twitter</span>
          </Button>
        </Link>
        <Link href="https://buymeacoffee.com/enszrlu" id="tour1-step9">
          <Button variant="outline" className="flex items-center space-x-2">
            <Coffee className="w-5 h-5" />
            <span className="hidden md:block">Buy Me a Coffee</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
