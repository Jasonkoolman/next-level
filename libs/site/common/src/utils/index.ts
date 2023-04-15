import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Conditionally joins classNames together
 */
export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
