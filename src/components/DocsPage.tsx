'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Coffee, BookOpen, X } from 'lucide-react';
import CopyCode from './CopyCode';
import { RiNextjsFill } from 'react-icons/ri';
import { SiFramer, SiTailwindcss, SiRadixui, SiGithub } from 'react-icons/si';
import { useNextStep } from 'nextstepjs';
import { PiXLogo } from 'react-icons/pi';

export function DocsPage() {
  const { startNextStep } = useNextStep();

  const onClickHandler = (tourName: string) => {
    startNextStep(tourName);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          NextStep
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

      <main className="container mx-auto py-12 space-y-24">
        <h1>Docs</h1>
        <p>
          Welcome to the NextStep documentation! Here, you'll find everything you need to
          know about using NextStep in your Next.js projects. I am working on it and docs
          will be released on 15th of September 2024.
        </p>
      </main>

      <footer className="py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024 NextStep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
