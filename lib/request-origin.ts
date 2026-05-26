import { headers } from "next/headers";
import { siteConfig } from "./site";

export async function getRequestOrigin() {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");

  if (!host) {
    return siteConfig.url;
  }

  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return `http://${host}`;
  }

  return siteConfig.url;
}
