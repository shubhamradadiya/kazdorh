import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  Check,
  CircleDollarSign,
  MessageSquare,
  Play,
  ShieldCheck,
  Star,
  WalletCards,
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import SiteHeader from './SiteHeader';

const cabinImage =
  'https://images.pexels.com/photos/37007316/pexels-photo-37007316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const forestHomeImage =
  'https://images.pexels.com/photos/25565675/pexels-photo-25565675.png?auto=compress&cs=tinysrgb&h=650&w=940';
const rentalInteriorImage =
  'https://images.pexels.com/photos/7745932/pexels-photo-7745932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const testimonials = [
  { name: 'Marcus Reid', role: 'Host · 12 properties', rating: 5, avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'I used to spend Sundays reconciling spreadsheets. Now it takes ten minutes a week and my Sundays are mine again.' },
  { name: 'Daniel Osei', role: 'Co-host · 6 properties', rating: 5, avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'The guest messaging alone pays for itself. My reviews mention how fast I reply, and that drives more bookings.' },
  { name: 'Peter Langford', role: 'Property manager · 30 units', rating: 4.5, avatar: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'We onboarded our whole portfolio in an afternoon. The team access means my cleaners see what they need, nothing more.' },
  { name: 'Sofia Marchetti', role: 'Host · 4 properties', rating: 5, avatar: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'Booking sync used to be a nightmare. Now everything stays aligned and I have not had a double booking in months.' },
  { name: 'Amara Bello', role: 'Host · 8 properties', rating: 4.5, avatar: 'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'The dashboard is the first thing I open every morning. I know exactly what needs attention before my coffee is done.' },
  { name: 'Lena Park', role: 'Co-host · 15 properties', rating: 5, avatar: 'https://images.pexels.com/photos/16160809/pexels-photo-16160809.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'My cleaning team gets automatic notifications after every checkout. No more texting back and forth about schedules.' },
  { name: 'Kaleef Mensah', role: 'Host · 3 properties', rating: 4.5, avatar: 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'I finally stopped losing track of payments. Everything is in one place and I can see my revenue at a glance.' },
  { name: 'Nadia Hassan', role: 'Property manager · 22 units', rating: 5, avatar: 'https://images.pexels.com/photos/37272329/pexels-photo-37272329.png?auto=compress&cs=tinysrgb&h=120&w=120', quote: 'The reporting is clear without being overwhelming. My owners love the monthly summaries I can export in two clicks.' },
];

const stats = [
  { value: 12000, suffix: '+', label: 'Properties managed' },
  { value: 4.9, suffix: '/5', label: 'Average host rating', decimals: 1 },
  { value: 38, suffix: '%', label: 'Avg. time saved weekly' },
  { value: 99.9, suffix: '%', label: 'Uptime guarantee', decimals: 1 },
];

const faqs: [string, string][] = [
  [
    'Is Nestrix only for short-term rentals?',
    'No. You can run vacation rentals, furnished homes, and longer stays in the same workspace.',
  ],
  [
    'Can I invite my property team?',
    'Yes. Add owners, co-hosts, cleaners, and operators, and give each person access to what they need.',
  ],
  [
    'How quickly can I get started?',
    'Most hosts are up and running in a few minutes — add listings, connect your calendar, and start managing stays.',
  ],
  [
    'Is my data secure?',
    'Yes. We use secure infrastructure, role-based access, and regular backups to protect property and guest information.',
  ],
  [
    'Does Nestrix sync with Airbnb, Booking.com, or VRBO?',
    'You can connect external calendars so availability stays aligned and double bookings are easier to avoid.',
  ],
  [
    'How does pricing work?',
    'Nestrix Pro is $29/month with a 14-day free trial. No confusing add-ons or surprise fees on the core plan.',
  ],
  [
    'Can I manage more than one property?',
    'Yes. Nestrix is built for portfolios — run one cabin or dozens of homes from a single dashboard.',
  ],
  [
    'What happens after the free trial?',
    'If you keep your plan, billing starts at the trial rate. Cancel anytime before the trial ends and you will not be charged.',
  ],
  [
    'Do you offer customer support?',
    'Yes. Reach us by email for setup help, billing questions, or product issues — we typically reply within one business day.',
  ],
  [
    'Can I cancel my subscription anytime?',
    'Yes. Cancel from your account whenever you want. You keep access through the end of the billing period you already paid for.',
  ],
];

const ease = [0.22, 1, 0.36, 1] as const;

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fafafa] text-[#0a0a0a]">
      <SiteHeader />

      <main id="top">
        <section className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="pointer-events-none absolute -right-24 -top-24 hidden h-[480px] w-[480px] rounded-full bg-[#f0eaff] opacity-80 blur-3xl lg:block" />
          <motion.div
            style={isDesktop ? { y: heroY, opacity: heroOpacity } : undefined}
            className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
          >
            <div className="max-w-[560px]">
              <motion.h1
                className="max-w-[610px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#0a0a0a] sm:text-[52px] sm:leading-[1.06] sm:tracking-[-0.065em] lg:text-[72px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
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
                  onClick={() => navigate('/signup')}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#4f008c] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(79,0,140,0.2)] transition hover:bg-[#3e006f]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start for free <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
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

        <section id="features" className="scroll-mt-24 border-y border-[#eee9f3] bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
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

        <section className="mx-auto max-w-[1150px] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <CountUpStat key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
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

        <section id="testimonials" className="scroll-mt-24 overflow-hidden border-y border-[#eee9f3] bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1150px] px-5 sm:px-6 lg:px-10">
            <SectionHeading
              eyebrow="Loved by hosts"
              title={<>Don't take our word <span className="text-[#4f008c]">for it.</span></>}
              subtitle="Thousands of hosts trust Nestrix to keep their properties running smoothly."
            />
          </div>
          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
            <motion.div
              className="flex w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="mr-4 flex w-[300px] shrink-0 flex-col rounded-2xl border border-[#ece7f1] bg-[#fdfcff] p-6 sm:w-[360px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="fill-[#f5a623] text-[#f5a623]"
                          style={idx < Math.floor(t.rating) ? undefined : idx < t.rating ? { opacity: 0.5 } : { opacity: 0, fill: 'none', color: '#e5e0ea' }}
                        />
                      ))}
                    </div>
                    <span className="text-[12px] font-extrabold text-[#4f008c]">{t.rating.toFixed(1)}</span>
                  </div>
                  <p className="mt-4 flex-1 text-[14px] leading-7 text-[#5a5364]">{t.quote}</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-[#f0edf4] pt-4">
                    <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-[13px] font-extrabold text-[#0a0a0a]">{t.name}</p>
                      <p className="text-[11px] font-semibold text-[#8a8292]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-[#2b1251] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
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
                onClick={() => navigate('/signup')}
                className="mt-7 block w-full rounded-xl bg-[#4f008c] py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-[#3e006f]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start your free trial
              </motion.button>
            </motion.div>
          </div> 
        </section>

        <section id="get-started" className="scroll-mt-24 relative overflow-hidden bg-[#fafafa] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <img
              src={cabinImage}
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/40 to-transparent" />
          </div>
          <div className="pointer-events-none absolute -left-24 top-10 h-[360px] w-[360px] rounded-full bg-[#efe6fa] opacity-80 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">Get started</p>
              <h2 className="mt-4 max-w-[560px] text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0a0a0a] sm:text-[42px] sm:leading-[1.06] sm:tracking-[-0.05em] lg:text-[52px]">
                Start managing stays the way you always meant to.
              </h2>
              <p className="mt-5 max-w-[480px] text-[15px] leading-7 text-[#716b7e] sm:mt-6 sm:text-[16px] sm:leading-8">
                Set up your listings, connect your calendar, and run bookings from one place — free for 14 days.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.button
                  onClick={() => navigate('/signup')}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#4f008c] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(79,0,140,0.18)] transition hover:bg-[#3e006f]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start for free <ArrowRight size={17} />
                </motion.button>
                <motion.a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#cfc6db] bg-white px-7 py-3.5 text-[15px] font-bold text-[#443d52] transition hover:border-[#4f008c] hover:text-[#4f008c]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View pricing
                </motion.a>
              </div>

              <div className="mt-10 grid max-w-[440px] grid-cols-3 gap-4 border-t border-[#ece6f3] pt-8">
                {[
                  { value: '14 days', label: 'Free trial' },
                  { value: '$29', label: 'Per month' },
                  { value: '5 min', label: 'Typical setup' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease }}
                  >
                    <p className="text-[18px] font-extrabold tracking-[-0.03em] text-[#4f008c] sm:text-[20px]">{item.value}</p>
                    <p className="mt-1 text-[11px] font-semibold text-[#8a8292]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="relative overflow-hidden rounded-[28px] border border-[#ece6f3] shadow-[0_24px_60px_rgba(43,18,81,0.12)]">
                <img
                  src={rentalInteriorImage}
                  alt="Bright rental living room ready for guests"
                  className="aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1251]/55 via-transparent to-transparent" />
              </div>
              <motion.div
                className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease }}
              >
                <p className="text-[11px] font-bold text-[#4f008c]">Today&apos;s overview</p>
                <p className="mt-2 text-[22px] font-extrabold tracking-[-0.04em] text-[#0a0a0a]">3 check-ins</p>
                <p className="mt-1 text-[12px] font-semibold text-[#8a8292]">2 cleanings scheduled</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 relative overflow-hidden bg-[#f7f4fb] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#ebe0f8] opacity-70 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              className="lg:sticky lg:top-28 lg:self-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease }}
            >
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#4f008c]">FAQ</p>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0a0a0a] sm:text-[40px] sm:tracking-[-0.05em] lg:text-[46px]">
                Common questions<br className="hidden sm:block" /> from hosts.
              </h2>
              <p className="mt-5 max-w-[360px] text-[15px] leading-7 text-[#716b7e] sm:text-[16px] sm:leading-8">
                Setup, pricing, teams, and how Nestrix works for vacation and long-term rentals.
              </p>
            </motion.div>

            <div className="divide-y divide-[#ece7f1] overflow-hidden rounded-[24px] border border-[#ece7f1] bg-[#fafafa]">
              {faqs.map(([question, answer], index) => {
                const open = activeFaq === index;
                return (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.24), ease }}
                    className={open ? 'bg-white' : 'bg-transparent'}
                  >
                    <button
                      type="button"
                      className="group flex w-full items-center gap-4 px-5 py-5 text-left transition sm:px-7 sm:py-6"
                      onClick={() => setActiveFaq(open ? -1 : index)}
                      aria-expanded={open}
                    >
                      <span className="flex-1 text-[15px] font-extrabold leading-snug text-[#312b3b] sm:text-[16px]">
                        {question}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition ${
                          open
                            ? 'border-[#4f008c] bg-[#4f008c] text-white'
                            : 'border-[#e0d8eb] bg-white text-[#4f008c] group-hover:border-[#4f008c]'
                        }`}
                        aria-hidden="true"
                      >
                        <motion.span
                          animate={{ rotate: open ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-[22px] font-light leading-none"
                        >
                          +
                        </motion.span>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-5 pb-6 text-[14px] leading-7 text-[#777080] sm:px-7 sm:pr-16">
                        {answer}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-[#e8e1f0] bg-white px-5 pb-8 pt-12 sm:px-6 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-[1150px]">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#top" onClick={(e) => scrollToSection(e, 'top')} aria-label="Back to top">
                <BrandLogo />
              </a>
              <p className="mt-5 max-w-[270px] text-[14px] leading-7 text-[#827b8c]">A calmer way to run the properties that make life worth living.</p>
            </div>
            <FooterGroup
              title="Product"
              links={[
                { label: 'Features', href: '#features', onClick: (e) => scrollToSection(e, 'features') },
                { label: 'How it works', href: '#how-it-works', onClick: (e) => scrollToSection(e, 'how-it-works') },
                { label: 'Pricing', href: '#pricing', onClick: (e) => scrollToSection(e, 'pricing') },
                { label: 'Get started', onClick: () => navigate('/signup') },
              ]}
            />
            <FooterGroup
              title="Company"
              links={[
                { label: 'About us', href: '#about', onClick: (e) => scrollToSection(e, 'about') },
                { label: 'Contact', href: '#contact', onClick: (e) => scrollToSection(e, 'contact') },
                { label: 'Login', onClick: () => navigate('/login') },
                { label: 'Sign up', onClick: () => navigate('/signup') },
              ]}
            />
            <FooterGroup
              title="Legal"
              links={[
                { label: 'Privacy policy', onClick: () => navigate('/privacy') },
                { label: 'Terms of service', onClick: () => navigate('/terms') },
              ]}
            />
          </div>
          <div className="mt-12 border-t border-[#eeeaf2] pt-6 text-center text-[12px] font-semibold text-[#958d9e] sm:mt-14">
            <p>© 2025 Nestrix, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CountUpStat({ value, suffix, label, decimals = 0, delay }: { value: number; suffix: string; label: string; decimals?: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const formatted = display >= 1000
    ? `${Math.round(display / 100) / 10}k`
    : display.toFixed(decimals);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease }}
    >
      <p className="text-[32px] font-extrabold tracking-[-0.04em] text-[#4f008c] sm:text-[40px] lg:text-[48px]">
        {formatted}{suffix}
      </p>
      <p className="mt-1 text-[12px] font-bold text-[#7c7585] sm:text-[14px]">{label}</p>
    </motion.div>
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
  links: Array<{
    label: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  }>;
}) {
  return (
    <div>
      <p className="text-[13px] font-extrabold text-[#312b3b]">{title}</p>
      <div className="mt-5 space-y-3">
        {links.map((link) => {
          if (link.href) {
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="block text-[13px] font-semibold text-[#8a8292] transition hover:text-[#4f008c]"
              >
                {link.label}
              </a>
            );
          }

          return (
            <button
              key={link.label}
              type="button"
              onClick={link.onClick}
              className="block text-left text-[13px] font-semibold text-[#8a8292] transition hover:text-[#4f008c]"
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
