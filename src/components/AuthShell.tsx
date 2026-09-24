import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { BrandMark } from './BrandLogo';

interface AuthShellProps {
  headingId: string;
  children: React.ReactNode;
  formLabel: string;
}

function AuthShell({ headingId, children, formLabel }: AuthShellProps) {
  const navigate = useNavigate();

  return (
    <motion.main
      className="login-page"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="welcome-panel" aria-labelledby={headingId}>
        <div className="pattern-layer" aria-hidden="true" />
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            className="brand-lockup"
            onClick={() => navigate('/')}
            aria-label="Nestrix home"
          >
            <div className="brand-mark" aria-hidden="true">
              <BrandMark />
            </div>
            <span>Nestrix</span>
          </button>
          <div className="welcome-copy">
            <h1 id={headingId}>Welcome to Nestrix!</h1>
            <p>
              Log in to manage your property and get bookings or
              <br className="desktop-break" /> create a new account to get started.
            </p>
          </div>
        </motion.div>
        <div className="panel-badge">
          <ShieldCheck size={15} /> Your properties, protected
        </div>
      </section>

      <section className="form-panel" aria-label={formLabel}>
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
        <p className="copyright">© 2025 Nestrix. Built for better property management.</p>
      </section>
    </motion.main>
  );
}

export default AuthShell;
