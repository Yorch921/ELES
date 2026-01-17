import React from 'react';
import './Method.css';

function Method() {
    return (
        <div className="page-container">
            <section className="method-hero">
                <div className="container">
                    <h2>THE ELES METHOD</h2>
                    <p className="subtitle">Pilates Redefined.</p>
                </div>
            </section>

            <section className="method-content container">
                <div className="text-block">
                    <h3>PHILOSOPHY</h3>
                    <p>
                        Our method combines classical Pilates principles with modern functional training.
                        Designed to sculpt, strengthen, and lengthen your body.
                    </p>
                </div>
                <div className="image-block placeholder">
                    {/* Image Placeholder */}
                </div>
            </section>
        </div>
    );
}

export default Method;
