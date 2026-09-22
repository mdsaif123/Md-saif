// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

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

const WhatsAppIcon = () => (
  <IconWrapper>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.28c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.14-8.24 8.14Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.23-.17-.48-.29Z" />
  </IconWrapper>
);

const socialLinks = [
  { label: 'WhatsApp', handle: 'Message me directly', url: 'https://wa.me/916204180519', icon: <WhatsAppIcon /> },
  { label: 'Instagram', handle: '@isaif17', url: 'https://instagram.com/isaif17', icon: <InstagramIcon /> },
  { label: 'Facebook', handle: 'MD Saif', url: 'https://www.facebook.com/share/1M356fhjZj/', icon: <FacebookIcon /> },
  { label: 'X (Twitter)', handle: '@King567Saif', url: 'https://x.com/King567Saif', icon: <XIcon /> },
  { label: 'Snapchat', handle: 'saifu.x7', url: 'https://www.snapchat.com/add/saifu.x7', icon: <SnapchatIcon /> },
];

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) — unchanged */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious web or mobile application to build, a creative engineering role, or a project collaboration in mind? Reach out directly via any channel below.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-[#8C6D4F]/25">
              

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-1">
                    // EDUCATION
                  </span>
                  <p
                    className="text-xs text-[#B3A497] font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Computer Science (Web &amp; App Dev),— 2020–2027
                  </p>
                </div>

              
              </div>
            </div>
          </div>

          {/* Right Column: Social Links Panel (7 Cols) — replaces form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            <span className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-6">
              // FIND ME ONLINE
            </span>

            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] hover:border-[#D4AF37] hover:bg-[#171310] transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-9 h-9 p-2 rounded-full border border-[#8C6D4F]/40 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300 shrink-0">
                      {social.icon}
                    </div>
                    <div>
                      <span
                        className="block text-sm text-white group-hover:text-[#F7E7C4] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {social.label}
                      </span>
                      <span className="block text-[11px] text-[#8C6D4F] group-hover:text-[#A8988B] transition-colors">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8C6D4F] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-sm">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;