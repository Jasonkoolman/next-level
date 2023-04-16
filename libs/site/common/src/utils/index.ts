import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Conditionally joins classNames together
 */
export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the absolute URL for a given path
 */
export function getAbsoluteUrl(path: string) {
  return `${process.env['NEXT_PUBLIC_APP_URL']}${path}`;
}
