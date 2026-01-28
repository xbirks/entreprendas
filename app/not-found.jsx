import Link from 'next/link';
import './style.scss';

export const metadata = {
  title: '404 - Página no encontrada | ENTRE PRENDAS',
  description: 'La página que buscas no existe. Vuelve a la página principal de Entre Prendas.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="master">
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '1rem'
      }}>
        <h1 style={{ 
          fontSize: '6rem', 
          margin: '0',
          color: '#6BDB8A',
          fontWeight: 'bold'
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          margin: '0',
          color: '#0D403B'
        }}>
          Página no encontrada
        </h2>
        <p style={{ 
          margin: '1rem 0 2rem',
          maxWidth: '500px',
          color: '#666',
          fontSize: '1.1rem'
        }}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link 
          href="/" 
          style={{
            padding: '1rem 2.5rem',
            backgroundColor: '#6BDB8A',
            color: '#0D403B',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
        >
          Volver al inicio
        </Link>
        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>
            ¿Necesitas ayuda? Llámanos:
          </p>
          <Link 
            href="tel:+34680593195"
            style={{
              color: '#6BDB8A',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            680 593 195
          </Link>
        </div>
      </div>
    </div>
  );
}
