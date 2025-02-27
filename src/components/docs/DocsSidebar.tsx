'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { findFrameworkInPath } from './FrameworkSelect';
import { useEffect, useState } from 'react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        href: '',
      },
      {
        title: 'Basic Setup',
        href: '/basic-setup',
      },
      {
        title: 'Tour Steps',
        href: '/tour-steps',
      },
      {
        title: 'useNextStep Hook',
        href: '/useNextStep',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        title: 'Routing During Tour',
        href: '/routing',
      },
      {
        title: 'NextStepViewport',
        href: '/viewport',
      },
      {
        title: 'Callbacks',
        href: '/callbacks',
      },
      {
        title: 'Keyboard Navigation',
        href: '/keyboard',
      },
      {
        title: 'Localization',
        href: '/localization',
      },
    ],
  },
  {
    title: 'Customization',
    items: [
      {
        title: 'Styling',
        href: '/styling',
      },
      {
        title: 'Dark Mode',
        href: '/dark-mode',
      },
      {
        title: 'Animations',
        href: '/animations',
      },
    ],
  },
  {
    title: 'API Reference',
    items: [
      {
        title: 'API Reference',
        href: '/api',
      },
    ],
  },
];

export default function DocsSidebar({ className }: SidebarNavProps) {
  const params = useParams();
  const pathname = usePathname();
  const [framework, setFramework] = useState(findFrameworkInPath(pathname).value);
  const items = sidebarItems;

  useEffect(() => {
    setFramework(findFrameworkInPath(pathname).value);
  }, [pathname]);

  return (
    <div className={cn('w-full', className)}>
      {items.map((section, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={`/docs/${framework}${item.href}`}
              className={cn(
                'block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground',
                pathname === `/docs/${framework}${item.href}`
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-muted-foreground',
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
