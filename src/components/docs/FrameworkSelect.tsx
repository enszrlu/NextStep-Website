'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { frameworkOptions } from '@/app/docs/(v2)/layout';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const findFrameworkInPath = (pathname: string) => {
  for (const option of frameworkOptions) {
    if (pathname.includes(option.value)) {
      return option.value;
    }
  }
  return frameworkOptions[0].value;
};

export default function FrameworkSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const [framework, setFramework] = useState('');

  useEffect(() => {
    setFramework(findFrameworkInPath(pathname));
  }, [pathname]);

  const handleFrameworkChange = (value: string) => {
    const subPath =
      pathname.split(`/docs/${framework}`).length > 1
        ? pathname.split(`/docs/${framework}`).pop()
        : '';
    router.push(`/docs/${value}/${subPath}`);
    setFramework(value);
  };
  return (
    <Select value={framework} onValueChange={handleFrameworkChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Framework" />
      </SelectTrigger>
      <SelectContent>
        {frameworkOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
