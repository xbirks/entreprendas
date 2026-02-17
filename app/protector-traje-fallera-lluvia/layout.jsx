import "../style.scss";

const title = "Protector de traje de fallera para lluvia | Cubrefaldas impermeable";
const description = "Evita que tu traje de fallera se manche de barro o agua. Cubrefaldas impermeable transparente, silencioso y ajustable. ¡Salva tu espolín esta Ofrenda! Entregas en Valencia.";
const url = "https://www.entreprendas.es/protector-traje-fallera-lluvia";
const price = "40.00";
const currency = "EUR";

export const metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        url: url,
        type: 'website',
        images: [
            {
                url: 'https://www.entreprendas.es/assets/img/fallas/fallas_ (4).jpeg', // Asumiendo ruta pública, ajustar si es necesario
                width: 800,
                height: 600,
                alt: 'Protector de traje de fallera impermeable',
            },
        ],
    },
};

export default function ProtectorLayout({ children }) {

    // PRODUCT SCHEMA
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Cubrefaldas impermeable para traje de fallera",
        "image": [
            "https://www.entreprendas.es/assets/img/fallas/fallas_ (4).jpeg",
            "https://www.entreprendas.es/assets/img/fallas/fallas_ (1).jpeg"
        ],
        "description": description,
        "brand": {
            "@type": "Brand",
            "name": "Entre Prendas"
        },
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": currency,
            "price": price,
            "priceValidUntil": "2026-03-20",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    // FAQ SCHEMA
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Sirve para cualquier talla de adulta o niña?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, al llevar goma elástica en la cintura se adapta perfectamente a diferentes contornos, tanto para falleras mayores como infantiles de cualquier edad (se hace a medida)."
                }
            },
            {
                "@type": "Question",
                "name": "¿Hace ruido al andar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Es un PVC especial de alta calidad que no cruje. Podrás desfilar en la Ofrenda o caminar por la calle sin que parezca que llevas una bolsa de plástico."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cubre el espolín entero o solo los bajos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Está diseñado para cubrir la zona crítica que se mancha: los bajos y gran parte de la caída de la falda. Es lo suficientemente largo para proteger de salpicaduras pero sin arrastrar."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo se limpia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muy fácil. Con un paño húmedo o una toallita se queda nuevo. Al ser impermeable, la suciedad no se incrusta."
                }
            }
        ]
    };

    // BREADCRUMB SCHEMA
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.entreprendas.es"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Protector traje fallera",
                "item": url
            }
        ]
    };

    return (
        <div className="master__gartalia">
            {children}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </div>
    );
}
