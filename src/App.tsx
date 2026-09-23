import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from '@/components/LandingPage';
import LoginPage from '@/components/LoginPage';

type View = 'landing' | 'login';

function App() {
  const [view, setView] = useState<View>('landing');

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' ? (
        <LandingPage key="landing" onLogin={() => setView('login')} />
      ) : (
        <LoginPage key="login" onBack={() => setView('landing')} />
      )}
    </AnimatePresence>
  );
}

export default App;
