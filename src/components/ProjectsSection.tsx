import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface SocialPlatform {
  number: string;
  platform: string;
  category: string;
  description: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
}

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    {children}
  </svg>
);

const InstagramIcon = () => (
  <IconWrapper>
    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.28 1.33 9.68 1.33 12 1.33Zm0 3.13a6.67 6.67 0 1 0 0 13.34 6.67 6.67 0 0 0 0-13.34Zm0 11a4.33 4.33 0 1 1 0-8.66 4.33 4.33 0 0 1 0 8.66Zm6.9-11.27a1.56 1.56 0 1 1-3.12 0 1.56 1.56 0 0 1 3.12 0Z" />
  </IconWrapper>
);

const FacebookIcon = () => (
  <IconWrapper>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
  </IconWrapper>
);

const XIcon = () => (
  <IconWrapper>
    <path d="M18.24 2.75h3.3l-7.2 8.23 8.47 11.27h-6.63l-5.19-6.8-5.94 6.8H1.75l7.7-8.8L1.34 2.75h6.8l4.69 6.24 5.41-6.24Zm-1.16 17.5h1.83L7 4.65H5.03l12.05 15.6Z" />
  </IconWrapper>
);

const SnapchatIcon = () => (
  <IconWrapper>
    <path d="M12.03 2c3.35 0 5.6 2.5 5.6 5.6 0 1.02-.07 1.9-.13 2.62.03.02.35.2.86.2.58 0 .93-.28 1.16-.28.36 0 .6.24.6.55 0 .5-.6.78-1.26 1.02-.08.03-.3.1-.32.32-.02.24.1.55.36 1.02.58 1.07 1.5 1.66 2.66 1.9.2.04.35.2.32.42-.05.42-.83.68-1.9.86-.1.28-.16.62-.24.9-.05.2-.2.3-.42.3-.16 0-.34-.03-.6-.03-.44 0-1.04.1-1.7.5-.76.46-1.53 1.1-2.9 1.1-.06 0-.11 0-.16-.01-.04.01-.09.01-.16.01-1.37 0-2.14-.64-2.9-1.1-.66-.4-1.26-.5-1.7-.5-.28 0-.46.04-.6.03-.22 0-.37-.1-.42-.3-.08-.28-.14-.62-.24-.9-1.07-.18-1.85-.44-1.9-.86-.03-.22.12-.38.32-.42 1.16-.24 2.08-.83 2.66-1.9.26-.47.38-.78.36-1.02-.02-.22-.24-.3-.32-.32-.66-.24-1.26-.52-1.26-1.02 0-.3.24-.55.6-.55.23 0 .58.28 1.16.28.5 0 .82-.17.86-.2-.06-.72-.13-1.6-.13-2.62 0-3.1 2.25-5.6 5.6-5.6Z" />
  </IconWrapper>
);

const socials: SocialPlatform[] = [
  {
    number: '01',
    platform: 'Instagram',
    category: 'PHOTOS · REELS · DAILY LIFE',
    description:
      "Where I post the everyday stuff — behind the scenes, moments, and whatever I'm up to outside of code.",
    handle: '@isaif17',
    url: 'https://instagram.com/isaif17',
    icon: <InstagramIcon />,
  },
  {
    number: '02',
    platform: 'Facebook',
    category: 'UPDATES · CONNECT · FRIENDS',
    description:
      'Add me or follow along for updates, posts, and general life stuff shared with friends and family.',
    handle: 'MD Saif',
    url: 'https://www.facebook.com/share/1M356fhjZj/',
    icon: <FacebookIcon />,
  },
  {
    number: '03',
    platform: 'X (Twitter)',
    category: 'THOUGHTS · TECH · RANDOM TAKES',
    description:
      'Random thoughts, tech takes, and whatever crosses my mind. Shortest way to reach me publicly.',
    handle: '@King567Saif',
    url: 'https://x.com/King567Saif',
    icon: <XIcon />,
  },
  {
    number: '04',
    platform: 'Snapchat',
    category: 'SNAPS · REAL-TIME · CASUAL',
    description:
      'The most unfiltered version of my day-to-day — add me for snaps and behind-the-scenes moments.',
    handle: 'saifu.x7',
    url: 'https://www.snapchat.com/add/saifu.x7',
    icon: <SnapchatIcon />,
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FIND ME ONLINE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              LET'S CONNECT.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              FIND ME AROUND.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to see where else you can catch me. Tap any card to jump straight to my profile.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {socials.map((social) => (
            <ScrollStackItem key={social.platform}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {social.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {social.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {social.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {social.platform}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {social.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#8C6D4F]/25">
                      <span className="px-3 py-1 text-[11px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5]">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  {/* Right Column (5 Cols) — Icon + Visit Button */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 p-5 rounded-full border border-[#D4AF37]/50 bg-[#050403] text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-500">
                      {social.icon}
                    </div>

                  <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VISIT PROFILE</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;