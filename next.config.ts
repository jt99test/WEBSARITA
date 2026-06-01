import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/legacy-redirects";

const legacyDomainRedirects = [
  {
    source: "/",
    has: [{ type: "host", value: "youryogapills.org" }],
    destination: "https://saritashakti.com/es",
    statusCode: 301,
  },
  {
    source: "/",
    has: [{ type: "host", value: "www.youryogapills.org" }],
    destination: "https://saritashakti.com/es",
    statusCode: 301,
  },
  {
    source: "/",
    has: [{ type: "host", value: "en.youryogapills.org" }],
    destination: "https://saritashakti.com/en",
    statusCode: 301,
  },
  {
    source: "/",
    has: [{ type: "host", value: "es.youryogapills.org" }],
    destination: "https://saritashakti.com/es",
    statusCode: 301,
  },
  {
    source: "/",
    has: [{ type: "host", value: "it.youryogapills.org" }],
    destination: "https://saritashakti.com/it",
    statusCode: 301,
  },
  {
    source: "/:path*",
    has: [{ type: "host", value: "youryogapills.org" }],
    destination: "https://saritashakti.com/:path*",
    statusCode: 301,
  },
  {
    source: "/:path*",
    has: [{ type: "host", value: "www.youryogapills.org" }],
    destination: "https://saritashakti.com/:path*",
    statusCode: 301,
  },
  {
    source: "/:path*",
    has: [{ type: "host", value: "en.youryogapills.org" }],
    destination: "https://saritashakti.com/:path*",
    statusCode: 301,
  },
  {
    source: "/:path*",
    has: [{ type: "host", value: "es.youryogapills.org" }],
    destination: "https://saritashakti.com/es/:path*",
    statusCode: 301,
  },
  {
    source: "/:path*",
    has: [{ type: "host", value: "it.youryogapills.org" }],
    destination: "https://saritashakti.com/it/:path*",
    statusCode: 301,
  },
] satisfies Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async redirects() {
    return [...legacyDomainRedirects, ...legacyRedirects];
  },
};

export default nextConfig;
