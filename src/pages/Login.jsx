import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    login(email, password);
    navigate('/planes');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2>{isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'}</h2>
          <p className="login-subtitle">
            {isRegister
              ? 'Regístrate para acceder a nuestros planes'
              : 'Bienvenido de vuelta'}
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-submit">
              {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="login-footer">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="toggle-mode"
            >
              {isRegister
                ? '¿Ya tienes cuenta? Inicia sesión'
                : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>

          <div className="demo-note">
            <p><strong>Modo Demo:</strong> Usa cualquier email y contraseña para probar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
