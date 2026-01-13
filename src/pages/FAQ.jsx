import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is ELES Club?",
            answer: "ELES Club is a hybrid Pilates platform combining classical techniques with functional fitness."
        },
        {
            question: "Do I need equipment?",
            answer: "Most of our workouts can be done with just a mat, but some advanced classes use dumbbells or bands."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time from your account settings."
        },
        {
            question: "Is it suitable for beginners?",
            answer: "Absolutely. We offer modifications and specific beginner tracks to help you build your foundation."
        }
    ];

    return (
        <div className="page-container faq-page">
            <div className="container">
                <header className="page-header">
                    <h2>FAQ</h2>
                    <p>Common questions answered.</p>
                </header>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
