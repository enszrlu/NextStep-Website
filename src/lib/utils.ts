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
