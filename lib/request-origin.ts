import { headers } from "next/headers";
import { siteConfig } from "./site";

export async function getRequestOrigin() {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "https";

  if (!host) {
    return siteConfig.url;
  }

  const normalizedProtocol =
    host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : protocol;

  return `${normalizedProtocol}://${host}`;
}
