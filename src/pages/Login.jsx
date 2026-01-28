import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [tab, setTab] = useState("login");
  const [plan, setPlan] = useState("Pro");

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-box">

          {/* TABS */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${tab === "login" ? "active" : ""}`}
              onClick={() => setTab("login")}
            >
              Iniciar Sesión
            </button>

            <button
              className={`auth-tab ${tab === "signup" ? "active" : ""}`}
              onClick={() => setTab("signup")}
            >
              Crear Cuenta
            </button>
          </div>

          {/* LOGIN */}
          {tab === "login" && (
            <form className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" required />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••" required />
              </div>

              <button className="auth-btn">Iniciar Sesión</button>

              <p className="auth-link">
                ¿No tienes cuenta?{" "}
                <span onClick={() => setTab("signup")}>Crear cuenta</span>
              </p>
            </form>
          )}

          {/* SIGN UP */}
          {tab === "signup" && (
            <form className="auth-form">

              {/* PLAN SELECTOR */}
              <div className="form-group">
                <label>Selecciona tu plan</label>
                <div className="plan-selector">
                  {["Básico", "Pro", "Premium"].map(p => (
                    <div
                      key={p}
                      className={`plan-option ${plan === p ? "selected" : ""}`}
                      onClick={() => setPlan(p)}
                    >
                      <h4>{p}</h4>
                      <span>
                        {p === "Básico" && "29€/mes"}
                        {p === "Pro" && "49€/mes"}
                        {p === "Premium" && "89€/mes"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Nombre</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" required />
              </div>

              <button className="auth-btn">
                Crear cuenta y continuar
              </button>

              <p className="auth-link">
                ¿Ya tienes cuenta?{" "}
                <span onClick={() => setTab("login")}>Iniciar sesión</span>
              </p>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}
