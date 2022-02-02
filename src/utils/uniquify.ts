export function uniquified(array: string[]): string[] {
  return Array.from(new Set(array));
}
