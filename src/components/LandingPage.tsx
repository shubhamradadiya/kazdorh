import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Menu,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

interface LandingPageProps {
  onLogin: () => void;
  onPrivacy: () => void;
  onTerms: () => void;
}

const cabinImage =
  'https://images.pexels.com/photos/37007316/pexels-photo-37007316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const forestHomeImage =
  'https://images.pexels.com/photos/25565675/pexels-photo-25565675.png?auto=compress&cs=tinysrgb&h=650&w=940';

const faqs: [string, string][] = [
  ['Is Nestrix only for short-term rentals?', 'Not at all. Nestrix works beautifully for vacation rentals, furnished homes, and long-term properties in one shared workspace.'],
  ['Can I invite my property team?', 'Yes. Bring owners, co-hosts, cleaners, and operators into the right parts of your workspace with simple team access.'],
  ['How quickly can I get started?', 'Most hosts are set up in a few minutes. Import your listings, connect your calendar, and start managing right away.'],
  ['Is my data secure?', 'Your property and guest information is protected with secure infrastructure, role-based access, and regular backups.'],
];

const ease = [0.22, 1, 0.36, 1] as const;

function LandingPage({ onLogin, onPrivacy, onTerms }: LandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fafafa] text-[#0a0a0a]">
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 border-b border-[#ece6f3] bg-[#fafafa] lg:bg-[#fafafa]/85 lg:backdrop-blur-xl"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-6 lg:px-10">
          <a href="#top" onClick={(e) => scrollTo(e, 'top')}>
            <BrandLogo />
          </a>
          <nav className="hidden items-center gap-9 text-[14px] font-semibold text-[#5f5a6e] lg:flex">
            <a href="#features" onClick={(e) => scrollTo(e, 'features')} className="transition-colors hover:text-[#4f008c]">Features</a>
            <a href="#how-it-works" onClick={(e) => scrollTo(e, 'how-it-works')} className="transition-colors hover:text-[#4f008c]">How it works</a>
            <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="transition-colors hover:text-[#4f008c]">Pricing</a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="transition-colors hover:text-[#4f008c]">About us</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="transition-colors hover:text-[#4f008c]">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={onLogin} className="rounded-xl border border-[#cfc6db] px-5 py-2.5 text-[14px] font-bold text-[#443d52] transition hover:border-[#4f008c] hover:text-[#4f008c]">Login</button>
            <button onClick={onLogin} className="rounded-xl bg-[#4f008c] px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(79,0,140,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3e006f]">Get started</button>
          </div>
          <button className="rounded-lg p-2 text-[#4f008c] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-[74px] border-b border-[#e7e0ef] bg-[#fafafa] px-6 py-5 shadow-xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-5 text-sm font-bold text-[#453d51]">
              <a href="#features" onClick={(e) => scrollTo(e, 'features')}>Features</a>
              <a href="#how-it-works" onClick={(e) => scrollTo(e, 'how-it-works')}>How it works</a>
              <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>Pricing</a>
              <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About us</a>
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
              <button onClick={() => { closeMenu(); onLogin(); }} className="mt-1 rounded-xl bg-[#4f008c] px-5 py-3 text-center text-white">Get started</button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      <main id="top">
        <section className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="pointer-events-none absolute -right-24 -top-24 hidden h-[480px] w-[480px] rounded-full bg-[#f0eaff] opacity-80 blur-3xl lg:block" />
          <motion.div
            style={isDesktop ? { y: heroY, opacity: heroOpacity } : undefined}
            className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
          >
            <div className="max-w-[560px]">
              <motion.div
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9c9ee] bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#4f008c]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <Sparkles size={14} /> All-in-one rental platform
              </motion.div>
              <motion.h1
                className="max-w-[610px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#0a0a0a] sm:text-[52px] sm:leading-[1.06] sm:tracking-[-0.065em] lg:text-[72px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
              >
                Run your properties.<br /><span className="text-[#4f008c]">Grow your freedom.</span>
              </motion.h1>
              <motion.p
                className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#716b7e] sm:mt-7 sm:text-[17px] sm:leading-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                Nestrix gives modern hosts one calm, powerful place to manage listings, bookings, guests, and growth.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
              >
                <motion.button
                  onClick={onLogin}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#4f008c] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(79,0,140,0.2)] transition hover:bg-[#3e006f]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start for free <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.a
                  href="#how-it-works"
                  onClick={(e) => scrollTo(e, 'how-it-works')}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#d6cedf] bg-white px-6 py-3.5 text-[15px] font-bold text-[#4b4355] transition hover:border-[#4f008c] hover:text-[#4f008c]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play size={15} fill="currentColor" /> See how it works
                </motion.a>
              </motion.div>
              <motion.div
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-bold text-[#746d81] sm:mt-12 sm:gap-x-8 sm:gap-y-4 sm:text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="flex items-center gap-2"><Check size={16} className="text-[#4f008c]" /> No credit card required</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-[#4f008c]" /> Set up in 5 minutes</span>
              </motion.div>
            </div>
            <motion.div
              className="relative lg:pl-4"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <motion.div
                className="absolute -left-4 top-14 hidden h-32 w-32 rounded-full border border-[#ded1ee] lg:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="relative rounded-[28px] border border-white bg-white p-3 shadow-[0_25px_70px_rgba(56,27,89,0.14)] sm:p-4"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between border-b border-[#f0edf4] px-3 pb-4">
                  <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f0e8fb] text-[#4f008c]"><Building2 size={16} /></span><span className="text-[13px] font-extrabold">Overview</span></div>
                  <div className="flex gap-2"><span className="rounded-lg border border-[#e5e0ea] px-3 py-1.5 text-[10px] font-bold text-[#716b7e]">This month⌄</span><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#faf7ff] text-[#4f008c]"><Bell size={14} /></span></div>
                </div>
                <div className="grid grid-cols-1 gap-3 p-2 pt-4 sm:grid-cols-3">
                  <StatCard label="Total revenue" value="$24,860" change="+18.4%" icon={<CircleDollarSign size={16} />} delay={0.5} />
                  <StatCard label="Active listings" value="28" change="+4 this month" icon={<Building2 size={16} />} delay={0.6} />
                  <StatCard label="Occupancy rate" value="92.8%" change="+6.2%" icon={<BarChart3 size={16} />} delay={0.7} />
                </div>
                <div className="mt-2 grid gap-3 p-2 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr]">
                  <div className="rounded-2xl border border-[#eeeaf2] p-4">
                    <div className="flex items-center justify-between">
                      <div><p className="text-[12px] font-bold text-[#7c7585]">Revenue overview</p><p className="mt-1 text-xl font-extrabold">$18,620 <span className="text-[11px] font-bold text-[#4e9c76]">+12.6%</span></p></div>
                      <span className="rounded-md bg-[#f7f1fd] px-2 py-1 text-[10px] font-bold text-[#4f008c]">Weekly⌄</span>
                    </div>
                    <div className="mt-7 flex h-28 items-end gap-2 px-1">
                      {[25, 40, 34, 52, 47, 68, 58, 80, 71, 92, 78, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          className="group relative flex-1"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.6, delay: 0.8 + i * 0.05, ease }}
                        >
                          <div className={`h-full rounded-t-md transition-colors group-hover:bg-[#4f008c] ${i === 9 ? 'bg-[#4f008c]' : 'bg-[#e6d6f6]'}`} style={{ height: '100%' }} />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[9px] font-semibold text-[#a19aa8]"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
                  </div>
                  <motion.div
                    className="rounded-2xl border border-[#eeeaf2] p-4"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between"><p className="text-[12px] font-bold text-[#7c7585]">Next booking</p><span className="text-[#a59dae]">•••</span></div>
                    <img src={cabinImage} alt="Warm wooden cabin in the forest" className="mt-3 h-20 w-full rounded-xl object-cover" />
                    <p className="mt-3 text-[12px] font-extrabold">Woodland House</p>
                    <p className="mt-1 text-[10px] text-[#898292]">Tomorrow · 2 guests</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-[#4f008c]"><span className="h-1.5 w-1.5 rounded-full bg-[#4f008c]" /> Confirmed</div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-[#eee8f6] bg-white px-4 py-3 shadow-xl sm:flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1, ease }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eefaf4] text-[#42a170]"><ShieldCheck size={18} /></span>
                <div><p className="text-[11px] font-extrabold">Payments secured</p><p className="text-[10px] text-[#8a8292]">Always protected</p></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="features" className="border-y border-[#eee9f3] bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1150px]">
            <SectionHeading
              eyebrow="Everything in one place"
              title={<>Less admin. More <span className="text-[#4f008c]">living.</span></>}
              subtitle="The thoughtful toolkit that turns a scattered hosting operation into a business you can enjoy running."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <CalendarDays />, title: 'Smart calendar', text: 'Keep every booking, blocked date, and availability synced.' },
                { icon: <MessageSquare />, title: 'Guest messaging', text: 'Stay personal with templates that still sound like you.' },
                { icon: <WalletCards />, title: 'Secure payments', text: 'Collect, track, and reconcile every payment without the spreadsheets.' },
                { icon: <BarChart3 />, title: 'Clear insights', text: 'Know what is working with dashboards built for decisions.' },
              ].map((feature, i) => (
                <FeatureCard key={feature.title} {...feature} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease }}
            >
              <motion.div
                className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#f2eafe]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="relative overflow-hidden rounded-[28px] bg-[#eee8f7] p-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={forestHomeImage} alt="Modern home tucked into a lush forest" className="h-[260px] w-full rounded-[22px] object-cover sm:h-[340px] lg:h-[410px]" />
                <motion.div
                  className="absolute bottom-8 left-8 right-8 rounded-2xl border border-[#ece6f3] bg-white p-4 shadow-xl lg:border-white/60 lg:bg-white/90 lg:backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div><p className="text-[11px] font-bold text-[#7c7585]">Occupancy this year</p><p className="mt-1 text-2xl font-extrabold text-[#0a0a0a]">94.2%</p></div>
                    <div className="rounded-xl bg-[#f1e8fb] px-3 py-2 text-[11px] font-extrabold text-[#4f008c]">+ 14.8%</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="max-w-[520px]">
              <motion.p
                className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                Built around your day
              </motion.p>
              <motion.h2
                className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0a0a0a] sm:text-[40px] sm:leading-[1.08] sm:tracking-[-0.05em] lg:text-[50px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
              >
                Your business,<br /><span className="text-[#4f008c]">beautifully simplified.</span>
              </motion.h2>
              <motion.p
                className="mt-5 text-[15px] leading-7 text-[#777080] sm:mt-6 sm:text-[16px] sm:leading-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                From your first property to your fiftieth, Nestrix keeps the details moving so you can focus on your guests and the life you are building.
              </motion.p>
              <div className="mt-8 space-y-5">
                {[
                  { number: '01', title: 'Bring it all together', text: 'Connect your calendars and keep every listing in view.' },
                  { number: '02', title: 'Make every stay seamless', text: 'Automate the busywork while keeping the human touch.' },
                  { number: '03', title: 'Grow with confidence', text: 'Use real-time insights to make smarter decisions.' },
                ].map((step, i) => (
                  <Step key={step.number} {...step} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#2b1251] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#c6a9e7]">Simple, transparent pricing</p>
              <h2 className="mt-4 max-w-[580px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[40px] sm:leading-[1.08] sm:tracking-[-0.05em] lg:text-[52px]">Start small. Make room to grow.</h2>
              <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-[#d5c8e4] sm:mt-5 sm:text-[16px]">Try the full Nestrix experience free for 14 days. No confusing tiers, no surprise fees.</p>
            </motion.div>
            <motion.div
              className="w-full max-w-[360px] rounded-[24px] bg-white p-7 text-[#0a0a0a] shadow-2xl"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start justify-between">
                <div><p className="text-sm font-extrabold">Nestrix Pro</p><p className="mt-2 text-4xl font-extrabold tracking-[-0.06em]">$29<span className="text-sm font-bold text-[#8a8292]"> / month</span></p></div>
                <span className="rounded-full bg-[#f0e6fb] px-3 py-1 text-[10px] font-extrabold uppercase text-[#4f008c]">Most popular</span>
              </div>
              <div className="my-6 h-px bg-[#eeeaf2]" />
              <ul className="space-y-3 text-[13px] font-semibold text-[#686172]">
                {['Unlimited properties', 'Automated guest messaging', 'Advanced reporting'].map((item) => (
                  <motion.li key={item} className="flex gap-2" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                    <Check size={16} className="text-[#4f008c]" /> {item}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={onLogin}
                className="mt-7 block w-full rounded-xl bg-[#4f008c] py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-[#3e006f]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start your free trial
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[900px] px-5 py-16 sm:px-6 sm:py-20 lg:py-28">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">Questions, answered</p>
            <h2 className="mt-4 text-[30px] font-extrabold tracking-[-0.04em] text-[#0a0a0a] sm:text-[38px] sm:tracking-[-0.05em] lg:text-[46px]">Let's make this easy.</h2>
          </motion.div>
          <div className="mt-10 divide-y divide-[#e9e3ef] rounded-[24px] border border-[#e9e3ef] bg-white px-6 sm:px-8">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="py-5">
                <button className="flex w-full items-center justify-between gap-4 text-left text-[15px] font-extrabold text-[#312b3b]" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                  {question}
                  <motion.span animate={{ rotate: activeFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={18} className="text-[#4f008c]" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="max-w-[720px] pr-8 pt-3 text-[14px] leading-7 text-[#777080]">{answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#e8e1f0] bg-white px-5 pb-8 pt-12 sm:px-6 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-[1150px]">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#top">
                <BrandLogo />
              </a>
              <p className="mt-5 max-w-[270px] text-[14px] leading-7 text-[#827b8c]">A calmer way to run the properties that make life worth living.</p>
            </div>
            <FooterGroup title="Product" links={['Features', 'How it works', 'Pricing', 'Changelog']} />
            <FooterGroup title="Company" links={['About us', 'Careers', 'Contact', 'Partners']} />
            <FooterGroup
              title="Legal"
              links={[
                { label: 'Privacy policy', onClick: onPrivacy },
                { label: 'Terms of service', onClick: onTerms },
                { label: 'Security' },
                { label: 'Help center' },
              ]}
            />
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#eeeaf2] pt-6 text-[12px] font-semibold text-[#958d9e] sm:mt-14 sm:flex-row sm:gap-4">
            <p>© 2025 Nestrix, Inc. All rights reserved.</p>
            <p>Made for hosts who care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <motion.div
      className="mx-auto max-w-[620px] text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease }}
    >
      <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">{eyebrow}</p>
      <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[#0a0a0a] sm:text-[38px] sm:tracking-[-0.05em] lg:text-[48px]">{title}</h2>
      <p className="mt-4 text-[15px] leading-7 text-[#777080] sm:mt-5 sm:text-[16px]">{subtitle}</p>
    </motion.div>
  );
}

function StatCard({ label, value, change, icon, delay }: { label: string; value: string; change: string; icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-[#eeeaf2] bg-[#fdfcff] p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between"><span className="text-[#4f008c]">{icon}</span><span className="text-[9px] font-bold text-[#4e9c76]">{change}</span></div>
      <p className="mt-3 text-[10px] font-bold text-[#8b8492]">{label}</p>
      <p className="mt-1 text-[19px] font-extrabold tracking-[-0.04em]">{value}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, text, index }: { icon: React.ReactNode; title: string; text: string; index: number }) {
  return (
    <motion.div
      className="group rounded-2xl border border-[#ece7f1] bg-[#fdfcff] p-6 transition hover:border-[#cdb2e7] hover:shadow-[0_16px_30px_rgba(79,0,140,0.08)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f0e6fb] text-[#4f008c] transition group-hover:bg-[#4f008c] group-hover:text-white">{icon}</span>
      <h3 className="mt-5 text-[16px] font-extrabold">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-[#817989]">{text}</p>
    </motion.div>
  );
}

function Step({ number, title, text, index }: { number: string; title: string; text: string; index: number }) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease }}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f0e6fb] text-[11px] font-extrabold text-[#4f008c]">{number}</span>
      <div><h3 className="text-[15px] font-extrabold">{title}</h3><p className="mt-1 text-[14px] leading-6 text-[#817989]">{text}</p></div>
    </motion.div>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: Array<string | { label: string; onClick?: () => void }>;
}) {
  return (
    <div>
      <p className="text-[13px] font-extrabold text-[#312b3b]">{title}</p>
      <div className="mt-5 space-y-3">
        {links.map((link) => {
          const label = typeof link === 'string' ? link : link.label;
          const onClick = typeof link === 'string' ? undefined : link.onClick;

          if (onClick) {
            return (
              <button
                key={label}
                type="button"
                onClick={onClick}
                className="block text-left text-[13px] font-semibold text-[#8a8292] transition hover:text-[#4f008c]"
              >
                {label}
              </button>
            );
          }

          return (
            <a href="#top" key={label} className="block text-[13px] font-semibold text-[#8a8292] transition hover:text-[#4f008c]">
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
