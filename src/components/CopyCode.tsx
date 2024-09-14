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
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText('npm install nextstep')
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
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={110}>
        <TooltipTrigger asChild>
          <div
            className="flex w-full items-center justify-center gap-4 bg-muted p-2 rounded-md cursor-pointer"
            onClick={copyToClipboard}
          >
            <code ref={inputRef} className="text-center font-mono  w-fit">
              npm install nextstep
            </code>
            <Copy className="w-5 h-5" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CopyCode;
