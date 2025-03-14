import React, { useState } from 'react';
import Link from 'next/link';

function FooterForm() {
    const [tel, setTel] = useState('');
    const [status, setStatus] = useState(''); // Añadido para manejar los estados de éxito o error

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus(''); // Resetear el estado antes de enviar

        const response = await fetch('/api/footerEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tel })
        });

        if (response.ok) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Tu teléfono"
                required maxLength="9"
            />
            <button type="submit" className="form__send-button">
                <p>Enviar</p>
            </button>
            <p className="footer__legal">Al darle click a enviar aceptas nuestras políticas de privacidad. Puedes leerlas haciendo <Link href="https://ermo.es">click aquí.</Link></p>
            {status === 'success' && <p className="success-message">¡Qué bien! Hemos recibido tu mensaje.</p>}
            {status === 'error' && <p className="error-message">¡Oh no! Algo ha fallado. Llámanos al 658 677 423.</p>}
        </form>
    );
}

export default FooterForm;
