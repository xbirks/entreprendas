export default function sitemap() {
    const baseUrl = 'https://www.entreprendas.es';

    // Lista de municipios que REALMENTE existen en tu app
    const municipios = [
        'alaquas', 'alboraya', 'aldaia', 'burjassot', 'canada',
        'eliana', 'godella', 'manises', 'mislata', 'paiporta',
        'paterna', 'picana', 'quart-poblet', 'ribarroja', 'rocafort',
        'torrente', 'valencia', 'xirivella'
    ];

    const currentDate = new Date().toISOString();

    return [
        // Página principal
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1,
        },
        // Página de precios
        {
            url: `${baseUrl}/precios`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Páginas legales
        {
            url: `${baseUrl}/legal/privacidad`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        // Municipios dinámicos
        ...municipios.map((municipio) => ({
            url: `${baseUrl}/municipios/${municipio}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: municipio === 'manises' || municipio === 'valencia' ? 1 : 0.8,
        })),
    ];
}
