'use client';

import React, { useRef } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

function CopyCode() {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: 'Copied to clipboard',
          variant: 'default',
        });
      })
      .catch((err) => {
        toast({
          title: 'Failed to copy',
          variant: 'destructive',
        });
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={110}>
        <Menubar className="flex w-fit mx-auto bg-muted rounded-md cursor-pointer border-none">
          <MenubarMenu>
            <MenubarTrigger className="flex w-fit bg-muted rounded-md cursor-pointer border-none">
              <TooltipTrigger asChild>
                <div className="flex w-full items-center justify-center gap-4 bg-muted h-full rounded-md cursor-pointer">
                  <code className="text-center font-mono  w-fit">
                    npm install nextstep
                  </code>
                  <Copy className="w-5 h-5" />
                </div>
              </TooltipTrigger>
            </MenubarTrigger>
            <MenubarContent align="end" className="w-24">
              <MenubarItem onClick={() => copyToClipboard('npm install nextstep')}>
                npm
              </MenubarItem>
              <MenubarItem onClick={() => copyToClipboard('yarn add nextstep')}>
                yarn
              </MenubarItem>
              <MenubarItem onClick={() => copyToClipboard('pnpm add nextstep')}>
                pnpm
              </MenubarItem>
              <MenubarItem onClick={() => copyToClipboard('bun add nextstep')}>
                bun
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CopyCode;
