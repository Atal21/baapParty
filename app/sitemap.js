import { chapters } from '@/data/chapters';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://bharatiyaavijitaawazparty.in';

export default function sitemap() {
  const pages = ['', '/manifesto', '/about', '/events', '/blog', '/gallery', '/volunteer', '/donate', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 })),
    ...chapters.map((c) => ({ url: `${base}/manifesto/${c.slug}`, changeFrequency: 'monthly', priority: 0.8 })),
  ];
}
