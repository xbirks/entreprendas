import "../../style.scss";
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";



export const metadata = {
  title: 'Política de Privacidad | ENTRE PRENDAS',
  description: 'Consulta la política de privacidad de Entre Prendas. Información sobre cómo tratamos tus datos personales.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.entreprendas.es/legal/privacidad',
  },
};

export default function PrivacidadLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
