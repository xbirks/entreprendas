import "../../style.scss";
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";



export const metadata = {
  title: `GARTALIA | Política de privaciadad`,
  description: `Consulta la política de privacidad de Jardinería Gartalia`,
  applicationName: 'GARTALIA',
  keywords: [
  ],
};

export default function PrivacidadLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
