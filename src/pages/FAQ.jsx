import { useState } from "react";
import "./FAQ.css";

const DATA = {
    suscripcion: {
        title: "Suscripción y Pagos",
        description: "Todo sobre precios, facturación y métodos de pago",
        faqs: [
            {
                q: "¿Qué incluye la suscripción?",
                a: "Ofrecemos planes flexibles con acceso a clases, programas y comunidad privada."
            },
            {
                q: "¿Cuándo se me cobra la suscripción?",
                a: "El cargo se realiza el día de contratación y se renueva mensualmente."
            },
            {
                q: "¿Qué métodos de pago aceptáis?",
                a: "Tarjetas de crédito/débito, PayPal y Stripe."
            }
        ]
    },
    clases: {
        title: "Clases y Contenido",
        description: "Información sobre entrenamientos y programas",
        faqs: [
            {
                q: "¿Las clases son en directo?",
                a: "No, son clases grabadas para que entrenes cuando quieras."
            },
            {
                q: "¿Puedo repetir las clases?",
                a: "Sí, tantas veces como quieras mientras tengas suscripción activa."
            }
        ]
    },
    cancelaciones: {
        title: "Cancelaciones",
        description: "Gestiona tu suscripción fácilmente",
        faqs: [
            {
                q: "¿Puedo cancelar cuando quiera?",
                a: "Sí, no hay permanencia. Puedes cancelar desde tu perfil."
            }
        ]
    },
    contacto: {
        title: "Contacto",
        description: "¿Necesitas ayuda directa?",
        faqs: [
            {
                q: "¿Cómo puedo contactar?",
                a: "Escríbenos a hola@eles.com y te responderemos lo antes posible."
            }
        ]
    }
};

export default function FAQ() {
    const [category, setCategory] = useState("suscripcion");
    const [openIndex, setOpenIndex] = useState(null);

    const current = DATA[category];

    return (
        <main className="faq-page">

            {/* HERO */}
            <section className="faq-hero">
                <span className="faq-label">Preguntas Frecuentes</span>
                <h1>¿Cómo podemos ayudarte?</h1>
                <p>Encuentra respuestas rápidas sobre suscripciones, clases y pagos.</p>
                <input className="faq-search" placeholder='Buscar "pagos", "clases"...' />
            </section>

            {/* CONTENT */}
            <section className="faq-layout">

                {/* SIDEBAR */}
                <aside className="faq-sidebar">
                    {Object.keys(DATA).map(key => (
                        <button
                            key={key}
                            className={`faq-category ${category === key ? "active" : ""}`}
                            onClick={() => {
                                setCategory(key);
                                setOpenIndex(null);
                            }}
                        >
                            {DATA[key].title}
                        </button>
                    ))}
                </aside>

                {/* QUESTIONS */}
                <div className="faq-content">
                    <h2>{current.title}</h2>
                    <p className="faq-description">{current.description}</p>

                    {current.faqs.map((item, i) => (
                        <div
                            key={i}
                            className={`faq-item ${openIndex === i ? "open" : ""}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                {item.q}
                                <span>{openIndex === i ? "−" : "+"}</span>
                            </button>

                            {openIndex === i && (
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="faq-cta">
                        <h3>¿Sigues teniendo dudas?</h3>
                        <p>Escríbenos y te ayudaremos encantadas.</p>
                        <a href="mailto:hola@eles.com" className="faq-cta-btn">
                            Contactar
                        </a>
                    </div>
                </div>

            </section>
        </main>
    );
}
