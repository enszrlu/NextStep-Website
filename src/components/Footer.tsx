'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Zap } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();

  // Determine the framework links based on the current path
  const getFrameworkLink = (path: string) => {
    if (pathname?.includes('/react-router')) {
      return `${path}/react-router`;
    } else if (pathname?.includes('/remix')) {
      return `${path}/remix`;
    } else if (pathname?.includes('/react')) {
      return `${path}/react`;
    } else if (pathname?.includes('/nextjs')) {
      return `${path}/nextjs`;
    } else {
      return path;
    }
  };

  return (
    <footer className="py-12 border-t shadow-[0_0_10px_rgba(0,0,0,0.1)] px-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and info column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">NextStep</span>
            </Link>
            <p className="text-sm text-gray-400">
              A lightweight onboarding library for Next.js
            </p>
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          {/* Links column */}
          <div>
            <Link href="/docs" className="text-lg font-medium mb-4">
              Documentation
            </Link>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/nextjs" className="text-gray-400  transition-colors">
                  Next.js
                </Link>
              </li>
              <li>
                <Link href="/docs/react" className="text-gray-400  transition-colors">
                  React
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/react-router"
                  className="text-gray-400  transition-colors"
                >
                  React Router
                </Link>
              </li>
              <li>
                <Link href="/docs/remix" className="text-gray-400  transition-colors">
                  Remix
                </Link>
              </li>

              <li>
                <Link href="/demo" className="text-gray-400  transition-colors">
                  Demo
                </Link>
              </li>

              <li>
                <Link href="/faq" className="text-gray-400  transition-colors">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/docs/v1" className="text-gray-400  transition-colors">
                  Version 1.x Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {/* Framework specific homepages */}
            <h3 className="text-lg font-medium mb-4">Frameworks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nextjs" className="text-gray-400  transition-colors">
                  Next.js
                </Link>
              </li>
              <li>
                <Link href="/react" className="text-gray-400  transition-colors">
                  React
                </Link>
              </li>
              <li>
                <Link href="/react-router" className="text-gray-400  transition-colors">
                  React Router
                </Link>
              </li>
              <li>
                <Link href="/remix" className="text-gray-400  transition-colors">
                  Remix
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons column */}
          <div className="hidden">
            <h3 className="text-lg font-medium mb-4">Comparisons</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/compare/shepherd"
                  className="text-gray-400  transition-colors"
                >
                  Shepherd vs NextStep
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/introjs"
                  className="text-gray-400  transition-colors"
                >
                  Introjs vs NextStep
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/onborda"
                  className="text-gray-400  transition-colors"
                >
                  Onborda vs NextStep
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
