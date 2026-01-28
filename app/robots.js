export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        sitemap: 'https://www.entreprendas.es/sitemap.xml',
        host: 'https://www.entreprendas.es',
    };
}
