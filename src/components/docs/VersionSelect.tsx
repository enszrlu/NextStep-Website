'use client';

import { versionOptions } from '@/app/docs/[version]/[framework]/layout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, usePathname } from 'next/navigation';

interface VersionSelectProps {
  currentVersion: string;
}

export default function VersionSelect({ currentVersion }: VersionSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleVersionChange = (version: string) => {
    const newPath = pathname.replace(/\/docs\/v\d+/, `/docs/${version}`);
    router.push(newPath);
  };

  return (
    <Select value={currentVersion} onValueChange={handleVersionChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Version" />
      </SelectTrigger>
      <SelectContent>
        {versionOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
