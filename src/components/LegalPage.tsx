import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  onBack: () => void;
  children: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

function LegalPage({ title, lastUpdated, onBack, children }: LegalPageProps) {
  return (
    <motion.div
      className="min-h-screen bg-[#fafafa] text-[#0a0a0a]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease }}
    >
      <header className="sticky top-0 z-40 border-b border-[#ece6f3] bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[900px] items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl border border-[#cfc6db] px-3.5 py-2 text-[13px] font-bold text-[#443d52] transition hover:border-[#4f008c] hover:text-[#4f008c]"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button type="button" onClick={onBack} aria-label="Nestrix home">
            <BrandLogo nameClassName="text-[20px] font-extrabold tracking-[-0.06em] text-[#4f008c]" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
        <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">Legal</p>
        <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.04em] text-[#0a0a0a] sm:text-[42px]">
          {title}
        </h1>
        <p className="mt-3 text-[14px] font-semibold text-[#8a8292]">Last updated: {lastUpdated}</p>

        <div className="legal-content mt-10 space-y-8 text-[15px] leading-7 text-[#5f586c]">
          {children}
        </div>
      </main>

      <footer className="border-t border-[#e8e1f0] bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[900px] flex-col gap-2 text-[12px] font-semibold text-[#958d9e] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Nestrix, Inc. All rights reserved.</p>
          <p>Questions? Contact us at legal@nestrix.com</p>
        </div>
      </footer>
    </motion.div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[18px] font-extrabold tracking-[-0.02em] text-[#312b3b]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default LegalPage;
