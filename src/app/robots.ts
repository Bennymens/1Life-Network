import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/'],
    },
    // Replace with the actual production domain once deployed
    // sitemap: 'https://1life-network.com/sitemap.xml',
  };
}
