'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const sidebarItems = {
  base: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Installation',
          href: '/installation',
        },
        {
          title: 'Basic Setup',
          href: '/basic-setup',
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
        {
          title: 'Dark Mode',
          href: '/dark-mode',
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
          title: 'Custom Cards',
          href: '/custom-cards',
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
  ],
};

export default function DocsSidebar({ className }: SidebarNavProps) {
  const params = useParams();
  const pathname = usePathname();
  const items =
    sidebarItems[params.version as keyof typeof sidebarItems] || sidebarItems.base;

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
              href={`/docs/${params.version || 'latest'}/${
                params.framework || 'nextjs'
              }/${item.href}`}
              className={cn(
                'block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground',
                pathname ===
                  `/docs/${params.version || 'latest'}/${params.framework || 'nextjs'}/${
                    item.href
                  }`
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
