/**
 * Returns the absolute URL for a given path
 */
export function getAbsoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
