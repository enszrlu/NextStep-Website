import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarInput,
} from '@/components/ui/sidebar';
import { Search } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { NextStepViewport } from 'nextstepjs';
// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        {
          title: 'Installation',
          url: '#',
        },
        {
          title: 'Project Structure',
          url: '#',
        },
      ],
    },
    {
      title: 'Building Your Application',
      url: '#',
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: true,
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
        {
          title: 'Styling',
          url: '#',
        },
        {
          title: 'Optimizing',
          url: '#',
        },
        {
          title: 'Configuring',
          url: '#',
        },
        {
          title: 'Testing',
          url: '#',
        },
        {
          title: 'Authentication',
          url: '#',
        },
        {
          title: 'Deploying',
          url: '#',
        },
        {
          title: 'Upgrading',
          url: '#',
        },
        {
          title: 'Examples',
          url: '#',
        },
      ],
    },
    {
      title: 'API Reference',
      url: '#',
      items: [
        {
          title: 'Components',
          url: '#',
        },
        {
          title: 'File Conventions',
          url: '#',
        },
        {
          title: 'Functions',
          url: '#',
        },
        {
          title: 'next.config.js Options',
          url: '#',
        },
        {
          title: 'CLI',
          url: '#',
        },
        {
          title: 'Edge Runtime',
          url: '#',
        },
      ],
    },
    {
      title: 'Architecture',
      url: '#',
      items: [
        {
          title: 'Accessibility',
          url: '#',
        },
        {
          title: 'Fast Refresh',
          url: '#',
        },
        {
          title: 'Next.js Compiler',
          url: '#',
        },
        {
          title: 'Supported Browsers',
          url: '#',
        },
        {
          title: 'Turbopack',
          url: '#',
        },
      ],
    },
  ],
};

export function SearchForm({ ...props }: React.ComponentProps<'form'>) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput id="search" placeholder="Search the docs..." className="pl-8" />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <div id="sidebar-viewport" className="relative">
          {/* We create a SidebarGroup for each parent. */}
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title} id={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
          <SidebarGroup key="demo">
            <SidebarGroupLabel>Demo</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="rounded-lg bg-violet-50 p-4 shadow-sm h-[50vh]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-violet-900">
                        21-Day Market Share Growth Plan:
                      </span>
                      <span className="text-violet-700 font-medium text-sm">100%</span>
                    </div>
                    <div className="w-full h-2 bg-violet-200 rounded-full mb-4">
                      <div
                        className="h-2 bg-violet-600 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="text-violet-700"
                        >
                          <rect
                            x="4"
                            y="7"
                            width="12"
                            height="9"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7 7V5.5A3.5 3.5 0 0 1 13 5.5V7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-violet-900 text-sm">
                          Weekly Routine
                        </div>
                        <div className="text-xs text-violet-700">
                          Maximize your AI visibility
                        </div>
                      </div>
                    </div>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
