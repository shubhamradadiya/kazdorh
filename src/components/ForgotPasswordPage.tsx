import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, KeyRound, Mail } from 'lucide-react';
import AuthShell from './AuthShell';
import { BETA_RESET_MESSAGE, useToast } from './Toast';

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showToast(BETA_RESET_MESSAGE);
  };

  return (
    <AuthShell headingId="reset-heading" formLabel="Reset password form">
      <div className="card-heading">
        <span className="small-mark"><KeyRound size={17} /></span>
        <h2>Reset Password</h2>
        <p>Enter your email to receive reset instructions</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="auth-fields">
          <div className="field-block">
            <label htmlFor="reset-email" className="field-label">Email Address</label>
            <label className="text-field">
              <Mail size={16} aria-hidden="true" />
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-label="Email Address"
                autoComplete="email"
                required
              />
            </label>
          </div>
        </div>

        <motion.button className="continue-button" type="submit" whileTap={{ scale: 0.97 }}>
          Send Reset Link
        </motion.button>
      </form>

      <button type="button" className="auth-back" onClick={() => navigate('/login')}>
        <ArrowLeft size={15} /> Back to Sign In
      </button>
    </AuthShell>
  );
}

export default ForgotPasswordPage;
