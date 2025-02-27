import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-6 mb-16 border-t">
      <div className="container mx-auto text-center">
        <p>© 2025 NextStep. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/docs" className="mx-2 text-primary hover:underline">
            Docs
          </Link>
          <Link href="/faq" className="mx-2 text-primary hover:underline">
            FAQ
          </Link>
          <Link href="/demo" className="mx-2 text-primary hover:underline">
            Demo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
