export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/KinshimaWeb" : "");

export function assetUrl(path: string): string {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const cleanBase = BASE_PATH.endsWith("/") ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (cleanBase && (cleanPath === cleanBase || cleanPath.startsWith(`${cleanBase}/`))) {
    return cleanPath;
  }

  return `${cleanBase}${cleanPath}`;
}
