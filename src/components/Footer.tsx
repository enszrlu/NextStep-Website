import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-6 mb-16 border-t">
      <div className="container mx-auto text-center">
        <p>© 2025 NextStep. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap justify-center items-start gap-4">
          <div className="flex flex-col items-center">
            <Link href="/docs" className="text-primary hover:underline">
              Documentation
            </Link>
            <div className="flex gap-3">
              <Link href="/docs" className="text-primary hover:underline">
                General
              </Link>
              <Link href="/docs/nextjs" className="text-primary hover:underline">
                Next.js
              </Link>
              <Link href="/docs/react" className="text-primary hover:underline">
                React
              </Link>
              <Link href="/docs/react-router" className="text-primary hover:underline">
                React Router
              </Link>
              <Link href="/docs/remix" className="text-primary hover:underline">
                Remix
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/faq" className="text-primary hover:underline">
              FAQ
            </Link>
            <Link href="/demo" className="text-primary hover:underline">
              Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
