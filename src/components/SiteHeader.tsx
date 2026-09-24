import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const ease = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About us' },
  { id: 'contact', label: 'Contact' },
] as const;

function SiteHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const goToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate(id === 'top' ? '/' : { pathname: '/', hash: id });
  };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#ece6f3] bg-[#fafafa] lg:bg-[#fafafa]/85 lg:backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <a href="/#top" onClick={(e) => goToSection(e, 'top')} aria-label="Nestrix home">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-9 text-[14px] font-semibold text-[#5f5a6e] lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => goToSection(e, id)}
              className="transition-colors hover:text-[#4f008c]"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="rounded-xl border border-[#cfc6db] px-5 py-2.5 text-[14px] font-bold text-[#443d52] transition hover:border-[#4f008c] hover:text-[#4f008c]"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="rounded-xl bg-[#4f008c] px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(79,0,140,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3e006f]"
          >
            Get started
          </button>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-[#4f008c] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <motion.div
          className="absolute left-0 right-0 top-[74px] border-b border-[#e7e0ef] bg-[#fafafa] px-6 py-5 shadow-xl lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col gap-5 text-sm font-bold text-[#453d51]">
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`/#${id}`} onClick={(e) => goToSection(e, id)}>
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                navigate('/login');
              }}
              className="rounded-xl border border-[#cfc6db] px-5 py-3 text-center text-[#443d52]"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                closeMenu();
                navigate('/signup');
              }}
              className="rounded-xl bg-[#4f008c] px-5 py-3 text-center text-white"
            >
              Get started
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default SiteHeader;
