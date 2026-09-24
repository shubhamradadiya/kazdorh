import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, UserPlus } from 'lucide-react';
import AuthShell from './AuthShell';
import { BETA_SIGNUP_MESSAGE, useToast } from './Toast';

function SignupPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showToast(BETA_SIGNUP_MESSAGE);
  };

  return (
    <AuthShell headingId="signup-heading" formLabel="Sign up form">
      <div className="card-heading">
        <span className="small-mark"><UserPlus size={17} /></span>
        <h2>Sign up</h2>
        <p>Create your Nestrix account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="auth-fields">
          <label className="text-field">
            <Mail size={16} aria-hidden="true" />
            <span className="sr-only">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              aria-label="Email"
              autoComplete="email"
              required
            />
          </label>
          <label className="text-field">
            <Lock size={16} aria-hidden="true" />
            <span className="sr-only">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              aria-label="Password"
              autoComplete="new-password"
              required
            />
          </label>
        </div>
        <motion.button className="continue-button" type="submit" whileTap={{ scale: 0.97 }}>
          Create account
        </motion.button>
      </form>

      <p className="auth-switch">
        Already have an account?{' '}
        <button type="button" onClick={() => navigate('/login')}>Sign in</button>
      </p>

      <p className="terms-copy">
        By signing up, you agree to Nestrix&apos;s{' '}
        <button type="button" onClick={() => navigate('/terms')}>Terms of Service</button>
        ,<br /> and{' '}
        <button type="button" onClick={() => navigate('/privacy')}>Privacy Policy</button>.
      </p>
    </AuthShell>
  );
}

export default SignupPage;
