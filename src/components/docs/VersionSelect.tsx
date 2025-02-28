'use client';

import { versionOptions } from '@/app/docs/(v2)/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useState } from 'react';

export default function VersionSelect() {
  const router = useRouter();
  const path = usePathname();
  const [version, setVersion] = useState(
    path.includes('v1') ? versionOptions[3].value : versionOptions[4].value,
  );

  const handleVersionChange = (value: string) => {
    if (value === '2.x.x') {
      setVersion(value);
      router.push(`/docs`);
    } else {
      setVersion(value);
      router.push(`/docs/v1?version=${value}`);
    }
  };

  return (
    <Select value={version} onValueChange={handleVersionChange}>
      <SelectTrigger className="w-[150px] md:w-[180px]">
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
