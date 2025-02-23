'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { frameworkOptions } from '@/app/docs/[version]/[framework]/layout';
import { useParams, usePathname, useRouter } from 'next/navigation';

export default function FrameworkSelect({ framework }: { framework: string }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFrameworkChange = (value: string) => {
    router.push(`/docs/${params.version}/${value}/${pathname.split('/').pop()}`);
  };
  return (
    <Select defaultValue={framework} onValueChange={handleFrameworkChange}>
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
