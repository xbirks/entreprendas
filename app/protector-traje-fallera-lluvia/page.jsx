"use client";

import Image from 'next/image';
import './style.scss';
import StandardButton from '../buttons/standardButton';
import FaqProtector from '../components/faq/faqProtector';

// Importing images from the fallas folder
import img1 from '../assets/img/fallas/fallas_ (1).jpeg';
import img2 from '../assets/img/fallas/fallas_ (2).jpeg';
import img3 from '../assets/img/fallas/fallas_ (3).jpeg';
import img4 from '../assets/img/fallas/fallas_ (4).jpeg';

export default function ProtectorTrajeFalleraPage() {
    return (
        <>
            <div className="protector-page">
                <h1>Cómo <span>proteger tu traje</span> de fallera cuando llueve</h1>

                <div className="content-block">
                    <div className="cta-section" style={{ marginBottom: '50px', marginTop: '0' }}>
                        <StandardButton
                            link="https://api.whatsapp.com/message/MYIQ4MSADGWGP1"
                            title="Comprar protector 40€"
                            style="standardButton"
                        />
                    </div>

                    <div className="img-container">
                        <Image src={img4} alt="Fallera protegida de la lluvia" placeholder="blur" />
                    </div>

                    <p>
                        Mirad, os lo digo tal cual porque el año pasado lo viví en el taller: fue empezar a caer cuatro gotas en Fallas y el <strong>teléfono echaba humo</strong>. Todo el mundo buscando algo para tapar el traje a última hora.
                    </p>

                    <p>
                        Y es normal. Da una pena horrible ver un espolín o una seda con los <strong>bajos negros de barro o mojados</strong>, porque hay manchas que luego <strong>cuestan la vida de sacar</strong> (si es que salen).
                    </p>

                    <p>
                        Por eso os insisto tanto con este <strong>cubrefaldas impermeable</strong>. No tiene mucho misterio, pero <strong>os salva la vida</strong>.
                    </p>

                    <div className="cta-section" style={{ margin: '30px 0' }}>
                        <StandardButton
                            link="https://api.whatsapp.com/message/MYIQ4MSADGWGP1"
                            title="Comprar protector 40€"
                            style="standardButton"
                        />
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

                    <div className="cta-section" style={{ margin: '30px 0' }}>
                        <StandardButton
                            link="https://api.whatsapp.com/message/MYIQ4MSADGWGP1"
                            title="Comprar protector 40€"
                            style="standardButton"
                        />
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
                        <StandardButton
                            link="https://api.whatsapp.com/message/MYIQ4MSADGWGP1"
                            title="Comprar protector 40€"
                            style="standardButton"
                        />
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
