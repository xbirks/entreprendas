export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        sitemap: 'https://entreprendas.es/sitemap.xml',
        host: 'https://entreprendas.es',
    };
}
