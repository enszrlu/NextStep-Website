import { frameworkOptions } from '@/app/docs/(v2)/constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (char, index) =>
    index > 0 && str[index - 1] === '.' ? char : char.toUpperCase(),
  );
}

export const findFrameworkInPath = (pathname: string) => {
  for (const option of frameworkOptions) {
    if (pathname.includes(option.value)) {
      return option;
    }
  }
  return frameworkOptions[0];
};
