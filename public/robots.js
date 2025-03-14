export default function robots() {
    return {
      rules: [
        {
          userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
          allow: ['/'],
        },
      ],
      sitemap: 'https://gartalia.com/sitemap.xml',
    }
  }