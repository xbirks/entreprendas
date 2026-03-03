"use client";

import { useState } from 'react';
import Image from 'next/image';
import './style.scss';
import FaqProtector from '../components/faq/faqProtector';

// Importing images from the fallas folder
import img1 from '../assets/img/fallas/fallas_ (1).jpeg';
import img2 from '../assets/img/fallas/fallas_ (2).jpeg';
import img3 from '../assets/img/fallas/fallas_ (3).jpeg';
import heroImg from '../assets/img/fallas/chubasquero_entre_prendas.png';

const WA_BASE = 'https://api.whatsapp.com/message/MYIQ4MSADGWGP1?text=';

const WA_MESSAGES = {
    mujer: encodeURIComponent('Hola, quiero comprar el cubrefaldas impermeable talla Mujer (35€). ¿Cómo lo pedimos?'),
    nina: encodeURIComponent('Hola, quiero comprar el cubrefaldas impermeable talla Niña (30€). ¿Cómo lo pedimos?'),
    none: encodeURIComponent('Hola, quiero comprar el cubrefaldas impermeable para traje de fallera. ¿Cómo lo pedimos?'),
};

export default function ProtectorTrajeFalleraPage() {
    const [talla, setTalla] = useState(null); // 'mujer' | 'nina' | null

    const buyLink = `${WA_BASE}${WA_MESSAGES[talla ?? 'none']}`;

    return (
        <>
            <div className="protector-page">

                {/* ─── HERO SECTION ───────────────────────────────────────────── */}
                <section id="size-selector" className="protector-hero">

                    {/* LEFT — image */}
                    <div className="protector-hero__img-wrap">
                        <Image
                            src={heroImg}
                            alt="Cubrefaldas impermeable para traje de fallera"
                            placeholder="blur"
                            className="protector-hero__img"
                        />
                        <div className="protector-hero__badge">
                            <span className="protector-hero__badge-dot" />
                            Disponible
                        </div>
                    </div>

                    {/* RIGHT — product info */}
                    <div className="protector-hero__info">

                        <h1 className="protector-hero__title">
                            Cubrefaldas impermeable y transparente{' '}
                            <span>para trajes de fallera</span>
                        </h1>

                        <p className="protector-hero__features">
                            Plástico PVC <strong>100% transparente</strong>.<br />
                            Goma adaptable.<br />
                            Remate de puntilla inferior.
                        </p>

                        <p className="protector-hero__label">Selecciona la talla…</p>

                        <div className="protector-hero__sizes">
                            <div className="protector-hero__size-row">
                                <button
                                    type="button"
                                    onClick={() => setTalla(t => t === 'mujer' ? null : 'mujer')}
                                    className={`protector-hero__size-btn ${talla === 'mujer' ? 'protector-hero__size-btn--filled' : 'protector-hero__size-btn--outline'}`}
                                >
                                    Mujer
                                </button>
                                <span className="protector-hero__price">35€</span>
                            </div>
                            <div className="protector-hero__size-row">
                                <button
                                    type="button"
                                    onClick={() => setTalla(t => t === 'nina' ? null : 'nina')}
                                    className={`protector-hero__size-btn ${talla === 'nina' ? 'protector-hero__size-btn--filled' : 'protector-hero__size-btn--outline'}`}
                                >
                                    Niña
                                </button>
                                <span className="protector-hero__price">30€</span>
                            </div>
                        </div>

                        <a
                            href={buyLink}
                            className="protector-hero__cta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Comprar
                        </a>

                        <p className="protector-hero__disclaimer">
                            Serás redirigida a nuestro Whatsapp para concertar una cita y finalizar la compra.
                        </p>

                    </div>
                </section>

                {/* ─── DIVIDER ────────────────────────────────────────────────── */}
                <hr className="protector-hero__divider" />

                {/* ─── ARTICLE CONTENT ────────────────────────────────────────── */}
                <div className="content-block">

                    <p>
                        Mirad, os lo digo tal cual porque el año pasado lo viví en el taller: fue empezar a caer cuatro gotas en Fallas y el <strong>teléfono echaba humo</strong>. Todo el mundo buscando algo para tapar el traje a última hora.
                    </p>

                    <p>
                        Y es normal. Da una pena horrible ver un espolín o una seda con los <strong>bajos negros de barro o mojados</strong>, porque hay manchas que luego <strong>cuestan la vida de sacar</strong> (si es que salen).
                    </p>

                    <p>
                        Por eso os insisto tanto con este <strong>cubrefaldas impermeable</strong>. No tiene mucho misterio, pero <strong>os salva la vida</strong>.
                    </p>

                    <div className="cta-section">
                        <a href="#size-selector" className="protector-cta-inline protector-cta-inline--filled">
                            Comprar
                        </a>
                    </div>

                    <div className="img-container">
                        <Image src={img1} alt="Detalle de traje de fallera" placeholder="blur" />
                    </div>

                    <p>
                        Es un <strong>plástico totalmente transparente</strong>. El dibujo de la falda se ve perfecto, que para eso os habéis gastado el dinero en la tela.
                    </p>

                    <div className="img-container">
                        <Image src={img2} alt="Cubrefaldas impermeable transparente" placeholder="blur" />
                    </div>

                    <p>
                        <strong>No hace ruido.</strong> Nada de ir sonando a bolsa de basura al andar, es un material suave tipo PVC que no cruje.
                        Lleva <strong>goma en la cintura</strong> para que sea cómodo y una <strong>puntilla en el bajo</strong> para que quede fino.
                    </p>

                    <div className="cta-section">
                        <a href="#size-selector" className="protector-cta-inline protector-cta-inline--filled">
                            Comprar
                        </a>
                    </div>

                    <div className="img-container">
                        <Image src={img3} alt="Detalle de la puntilla y acabado del cubrefaldas" placeholder="blur" />
                    </div>

                    <p>
                        Lo ideal es usarlo en <strong>modo &quot;chubasquero&quot;</strong>: si veis el cielo gris o el suelo está sucio y mojado (sobre todo para la Ofrenda, que ahí no te libras), os lo ponéis encima y listo. Tapa justo lo necesario para que el <strong>bajo no arrastre porquería</strong>, pero sin llegar al suelo para que no os tropecéis.
                    </p>

                    <p>
                        Hacedme caso y <strong>tenedlo guardado por si acaso</strong>. Que luego llega el día, se pone a llover, y nos entran las prisas a todas. Más vale tenerlo en la bolsa y no usarlo, que echarse las manos a la cabeza luego.
                    </p>

                    <p>
                        Un consejo de amiga: <strong>no esperéis a la semana de Fallas</strong>. El año pasado volaron en una tarde y me sabe fatal deciros que no me quedan cuando estáis agobiadas mirando al cielo.
                    </p>

                    <p>
                        Si queréis <strong>asegurar el vuestro</strong> o tenéis dudas con la medida, escribidme un WhatsApp aquí mismo o pasaos por la tienda y lo dejamos solucionado ya. Así, si llueve, que llueva.
                    </p>

                    <div className="cta-section">
                        <a href="#size-selector" className="protector-cta-inline protector-cta-inline--filled">
                            Comprar
                        </a>
                    </div>

                </div>

            </div>

            <div className="faq" style={{ marginBottom: '100px' }}>
                <div className="masterFaq">
                    <FaqProtector />
                </div>
            </div>
        </>
    );
}
