import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Plans from './pages/Plans';
import Method from './pages/Method';
import Workouts from './pages/Workouts';
import FAQ from './pages/FAQ';
import Videos from './pages/Videos';
import './App.css';

function AppContent() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        userPlan={user?.plan === 'simple' ? 'Simple' : user?.plan === 'premium' ? 'Premium' : ''}
        onLogout={logout}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/method" element={<Method />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
