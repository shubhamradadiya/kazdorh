import { motion } from 'framer-motion';
import SiteHeader from './SiteHeader';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <motion.div
      className="min-h-screen overflow-hidden bg-[#fafafa] text-[#0a0a0a]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease }}
    >
      <SiteHeader />

      <main className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-28">
        <div className="pointer-events-none absolute -left-24 top-16 hidden h-[320px] w-[320px] rounded-full bg-[#f0eaff] opacity-70 blur-3xl lg:block" />

        <div className="relative mx-auto max-w-[720px]">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">Legal</p>
          <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.04em] text-[#0a0a0a] sm:text-[42px] sm:tracking-[-0.05em]">
            {title}
          </h1>
          <p className="mt-3 text-[14px] font-semibold text-[#8a8292]">Last updated: {lastUpdated}</p>

          <div className="legal-content mt-10 space-y-9 border-t border-[#ece6f3] pt-10 text-[15px] leading-7 text-[#5f586c] sm:mt-12 sm:space-y-10 sm:pt-12">
            {children}
          </div>
        </div>
      </main>
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
