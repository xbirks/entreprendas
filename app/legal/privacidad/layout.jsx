import "../../style.scss";
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";



export const metadata = {
  title: `ENTRE PRENDAS | Política de privaciadad`,
  description: `Consulta la política de privacidad de Entre Prendas`,
  applicationName: 'ENTRE PRENDAS',
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
