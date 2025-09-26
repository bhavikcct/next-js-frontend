import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCookieValue(cookieHeader: string | null, cookieName: string): string | null {
  if (!cookieHeader) return null;

  const cookie = cookieHeader
    .split(";")
    .map(c => c.trim())
    .find(c => c.startsWith(`${cookieName}=`));

  return cookie ? cookie.split("=")[1] : null;
}
