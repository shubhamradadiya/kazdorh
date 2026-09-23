import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from '@/components/LandingPage';
import LoginPage from '@/components/LoginPage';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';
import TermsOfServicePage from '@/components/TermsOfServicePage';

type View = 'landing' | 'login' | 'privacy' | 'terms';

function App() {
  const [view, setView] = useState<View>('landing');
  const [returnTo, setReturnTo] = useState<View>('landing');

  const openLegal = (page: 'privacy' | 'terms') => {
    setReturnTo(view === 'privacy' || view === 'terms' ? returnTo : view);
    setView(page);
  };

  const closeLegal = () => setView(returnTo === 'privacy' || returnTo === 'terms' ? 'landing' : returnTo);

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' && (
        <LandingPage
          key="landing"
          onLogin={() => setView('login')}
          onPrivacy={() => openLegal('privacy')}
          onTerms={() => openLegal('terms')}
        />
      )}
      {view === 'login' && (
        <LoginPage
          key="login"
          onBack={() => setView('landing')}
          onPrivacy={() => openLegal('privacy')}
          onTerms={() => openLegal('terms')}
        />
      )}
      {view === 'privacy' && (
        <PrivacyPolicyPage key="privacy" onBack={closeLegal} />
      )}
      {view === 'terms' && (
        <TermsOfServicePage key="terms" onBack={closeLegal} />
      )}
    </AnimatePresence>
  );
}

export default App;
