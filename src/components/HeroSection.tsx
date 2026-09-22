import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroIMG from '../assets/saif2.jpeg';
import type { Variants } from 'framer-motion';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [showBirthdayNotice, setShowBirthdayNotice] = useState(false);
  const [daysToBirthday, setDaysToBirthday] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

   // Birthday countdown logic
   useEffect(() => {
    const BIRTHDAY_MONTH = 10; // October
    const BIRTHDAY_DAY = 17;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let nextBirthday = new Date(today.getFullYear(), BIRTHDAY_MONTH - 1, BIRTHDAY_DAY);
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY);
    }

    const diffDays = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    setDaysToBirthday(diffDays);

    if (diffDays <= 30) {
      const showTimer = setTimeout(() => setShowBirthdayNotice(true), 1200);
      const hideTimer = setTimeout(() => setShowBirthdayNotice(false), 1200 + 7000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);



  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">

      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}
      

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
          {/* ================= 2. FIXED IMAGE LAYER ================= */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center md:justify-end">
        <img
          src={HeroIMG}
          alt="Hero"
          className="h-full w-full object-cover object-center md:h-screen md:w-auto md:max-w-none md:object-contain md:origin-right md:scale-95 lg:scale-100"
        />

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
          ISAIF17.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Instagram + Let's Talk */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 ml-auto md:ml-0">
            {/* Instagram Icon Link */}
            <a
              href="https://www.instagram.com/isaif17/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center justify-center w-8 h-8 rounded-sm border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.08)]"
              title="@the.cipher.stack on Instagram"
              aria-label="Instagram @the.cipher.stack"
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Let's Talk Button */}
            <a
            href="https://wa.me/916204180519"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>
          </div>
        </header>
              {/* ================= BIRTHDAY COUNTDOWN TOAST ================= */}
      {/* ================= BIRTHDAY COUNTDOWN TOAST ================= */}
      <AnimatePresence>
        {showBirthdayNotice && daysToBirthday !== null && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto w-[92%] sm:w-auto"
          >
            <div className="flex items-center space-x-3.5 px-5 sm:px-6 py-3.5 rounded-sm border border-[#D4AF37] bg-[#120F0C]/95 backdrop-blur-md shadow-[0_10px_35px_rgba(212,175,55,0.25)] w-full sm:w-auto">
              <span className="text-lg shrink-0">🎂</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#F7E7C4] font-semibold">
                  {daysToBirthday === 0
                    ? "IT'S MY BIRTHDAY TODAY!"
                    : `${daysToBirthday} DAY${daysToBirthday === 1 ? '' : 'S'} TO MY BIRTHDAY`}
                </span>
                <span className="text-[10px] text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {daysToBirthday === 0 ? 'Celebrating today 🎉' : 'October 17 — mark your calendar!'}
                </span>
              </div>

              {/* Send Wish Button */}
              <a
                href={`https://wa.me/916204180519?text=${encodeURIComponent(
                  daysToBirthday === 0
                    ? 'Happy Birthday! 🎉🎂'
                    : 'Just saw your birthday is coming up — wishing you an early Happy Birthday! 🎂'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 shrink-0 px-3 py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black transition-all duration-300 whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Wish Me
              </a>

              <button
                onClick={() => setShowBirthdayNotice(false)}
                className="ml-1 sm:ml-2 text-[#C4B5A5] hover:text-white text-xs transition-colors shrink-0"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: HEY, I'M */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  HEY, I'M
                </span>

                {/* Line 2: YOUR NAME */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  MD SAIF
                </span>

                {/* Line 3: A DEVELOPER */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  A DEVELOPER
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CODES STUFF <span className="text-[#8C6D4F] mx-1">•</span> LOVES CRICKET <span className="text-[#8C6D4F] mx-1">•</span> OVERTHINKS EVERYTHING
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Just someone who turns random late-night ideas into real things on a screen.
                <br />
                When I'm not coding, you'll probably find me [doing your hobby / thing you like].
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              

              {/* Say Hi Button */}
              <motion.a
                href="https://wa.me/916204180519"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>SAY HI</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
              "
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE BY DAY.</p>
              <p>DREAM BY NIGHT.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.2rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Mr. Saifuu 
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;