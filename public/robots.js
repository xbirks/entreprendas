export default function robots() {
    return {
      rules: [
        {
          userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
          allow: ['/'],
        },
      ],
      sitemap: 'https://entreprendas.es/sitemap.xml',
    }
  }