/** @type {import('next').NextConfig} */
const nextConfig = {
    // Trailing slashes consistentes (sin trailing slash)
    trailingSlash: false,

    // Redirects permanentes
    async redirects() {
        return [
            // Aquí puedes añadir redirects específicos cuando identifiques el roto
            // Ejemplo:
            // {
            //   source: '/old-path',
            //   destination: '/new-path',
            //   permanent: true,
            // },
        ];
    },

    // Headers para seguridad y SEO
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
