import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Check, ChevronDown, KeyRound, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
}

function LoginPage({ onBack }: LoginPageProps) {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('+1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phone.replace(/\D/g, '').length >= 7) setSubmitted(true);
  };

  return (
    <motion.main
      className="login-page"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="welcome-panel" aria-labelledby="welcome-heading">
        <div className="pattern-layer" aria-hidden="true" />
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="back-button" onClick={onBack} aria-label="Back to home">
            <ArrowLeft size={18} />
          </button>
          <div className="brand-lockup">
            <div className="brand-mark"><MapPin size={68} strokeWidth={2.1} /><KeyRound className="brand-key" size={27} strokeWidth={2.5} /></div>
            <span>Kazd<span className="brand-o">o</span>rh</span>
          </div>
          <div className="welcome-copy">
            <h1 id="welcome-heading">Welcome to the Kazd<span>o</span>rh!</h1>
            <p>Log in to manage your property and get bookings or<br className="desktop-break" /> create a new account to get started.</p>
          </div>
        </motion.div>
        <div className="panel-badge"><ShieldCheck size={15} /> Your properties, protected</div>
      </section>

      <section className="form-panel" aria-label="Sign in form">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-heading">
            <span className="small-mark"><Building2 size={17} /></span>
            <h2>Sign in</h2>
            <p>Enter your phone number to sign in</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="phone-row">
              <label className="country-field">
                <span className="sr-only">Country code</span>
                <select value={country} onChange={(event) => setCountry(event.target.value)}>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+91">+91</option>
                </select>
                <ChevronDown size={16} aria-hidden="true" />
              </label>
              <label className="number-field">
                <Phone size={16} aria-hidden="true" />
                <span className="sr-only">Phone number</span>
                <input value={phone} onChange={(event) => { setPhone(event.target.value); setSubmitted(false); }} type="tel" inputMode="tel" placeholder="Phone number*" aria-label="Phone number" required />
              </label>
            </div>
            <motion.button
              className="continue-button"
              type="submit"
              disabled={phone.replace(/\D/g, '').length < 7}
              whileTap={{ scale: 0.97 }}
            >
              Continue
            </motion.button>
            {submitted && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Check size={15} /> Verification code ready to send to {country} {phone}
              </motion.p>
            )}
          </form>
          <p className="terms-copy">By signing up, you agree to Kazd<span>o</span>rh's <a href="#terms">Terms of Service</a>,<br /> and <a href="#privacy">Privacy Policy.</a></p>
        </motion.div>
        <p className="copyright">© 2025 Kazdorh. Built for better property management.</p>
      </section>
    </motion.main>
  );
}

export default LoginPage;
