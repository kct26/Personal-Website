import type { MetadataRoute } from 'next';

const SITE_URL = 'https://kyle-thoughts.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified },
    { url: `${SITE_URL}/projects`, lastModified },
  ];
}
