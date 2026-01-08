import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAuth } from '../context/AuthContext';
import './Plans.css';

const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';

const plans = [
  {
    id: 'simple',
    name: 'Plan Simple',
    price: 9.99,
    planId: 'P-XXXXXXXXXXXXXXXXXX',
    features: [
      'Acceso a videos básicos',
      'Nuevos videos cada semana',
      'Rutinas para principiantes',
      'Soporte por email',
      'Acceso móvil'
    ]
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: 19.99,
    planId: 'P-YYYYYYYYYYYYYYYY',
    features: [
      'Todo lo del Plan Simple',
      'Videos exclusivos premium',
      'Rutinas personalizadas',
      'Soporte prioritario 24/7',
      'Clases en vivo mensuales',
      'Descarga de videos',
      'Guía nutricional'
    ],
    popular: true
  }
];

function Plans() {
  const { isLoggedIn, user, upgradePlan } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    setSelectedPlan(plan);
  };

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: selectedPlan.planId
    });
  };

  const onApprove = (data) => {
    upgradePlan(selectedPlan.id);
    alert(`¡Suscripción exitosa al ${selectedPlan.name}!`);
    navigate('/videos');
  };

  const onError = (err) => {
    console.error('Error en PayPal:', err);
    alert('Hubo un error al procesar el pago. Por favor intenta de nuevo.');
    setSelectedPlan(null);
  };

  return (
    <div className="plans-page">
      <div className="plans-header">
        <h1>Elige tu Plan</h1>
        <p>Selecciona el plan que mejor se adapte a tus necesidades</p>
      </div>

      <div className="plans-container">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${plan.popular ? 'popular' : ''} ${
              user?.plan === plan.id ? 'current' : ''
            }`}
          >
            {plan.popular && <div className="popular-badge">Más Popular</div>}
            {user?.plan === plan.id && <div className="current-badge">Plan Actual</div>}

            <h2>{plan.name}</h2>
            <div className="price">
              <span className="amount">${plan.price}</span>
              <span className="period">/mes</span>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {user?.plan === plan.id ? (
              <button className="btn btn-current" disabled>
                Plan Actual
              </button>
            ) : selectedPlan?.id === plan.id ? (
              <div className="paypal-container">
                <PayPalScriptProvider
                  options={{
                    clientId: PAYPAL_CLIENT_ID,
                    vault: true,
                    intent: 'subscription'
                  }}
                >
                  <PayPalButtons
                    createSubscription={createSubscription}
                    onApprove={onApprove}
                    onError={onError}
                    style={{
                      layout: 'vertical',
                      color: 'gold',
                      shape: 'rect',
                      label: 'subscribe'
                    }}
                  />
                </PayPalScriptProvider>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="btn btn-cancel"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleSelectPlan(plan)}
                className="btn btn-select"
              >
                Seleccionar Plan
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="plans-info">
        <div className="info-card">
          <h3>Modo de Prueba (Sandbox)</h3>
          <p>
            Esta es una versión de demostración usando PayPal Sandbox. Para
            configurar pagos reales:
          </p>
          <ol>
            <li>Crea una cuenta de PayPal Business</li>
            <li>Crea planes de suscripción en tu cuenta</li>
            <li>Reemplaza YOUR_PAYPAL_CLIENT_ID con tu Client ID real</li>
            <li>Reemplaza los Plan IDs con los IDs de tus planes creados</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Plans;
