'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export default function Footer() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="border-t pt-16 pb-8"
      style={{ background: '#0e0e0e', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-12">
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded flex items-center justify-center" style={{ background: '#45C2FF' }}>
                <svg viewBox="0 0 20 20" className="w-5 h-5" style={{ fill: '#0e0e0e' }}><path d="M10 2C6 6 3 9 3 12.5a7 7 0 0014 0C17 9 14 6 10 2z"/></svg>
              </div>
              <span className="text-white font-extrabold text-[17px]">Aqua<span style={{ color: '#45C2FF' }}>Shield</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
              Specialist waterproofing contractor for commercial, industrial, and residential properties. Root-cause diagnosis. Proper execution. Lasting results.
            </p>
            <div className="flex gap-3 mt-5">
              {['in','f','tw'].map(s => (
                <motion.a key={s} href="#" whileHover={{ scale: 1.12, borderColor: '#45C2FF', color: '#45C2FF' }}
                  className="w-8 h-8 rounded flex items-center justify-center text-white/40 text-xs no-underline transition-colors border border-white/15"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            { title: 'Services', links: ['Roof Waterproofing','Bathroom Waterproofing','External Wall Protection','Crack Injection','Joint Sealant Works','Leak Rectification','Membrane Systems','Reinstatement Works'] },
            { title: 'Company',  links: ['About Us','Our Process','Projects','Certifications','Case Studies','Careers','Contact'] },
          ].map(col => (
            <motion.div key={col.title} variants={fadeUp}>
              <h4 className="text-white font-bold text-[14px] mb-4">{col.title}</h4>
              <ul className="list-none flex flex-col gap-2 p-0 m-0">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-white/40 text-sm no-underline transition-colors hover:text-white">{l}</a></li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-[14px] mb-4">Contact</h4>
            {[
              { icon: '📞', text: '+65 1234 5678' },
              { icon: '✉️', text: 'hello@aquashield.sg' },
              { icon: '📍', text: '18 Tuas Crescent\nSingapore 638712' },
              { icon: '🕐', text: 'Mon–Fri: 8am – 6pm\nSat: 8am – 1pm' },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span className="text-base mt-0.5 flex-shrink-0">{c.icon}</span>
                <span className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{c.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[13px]" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <span>© 2025 AquaShield Waterproofing Pte Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','BCA Licence: WP-2024-XXXX'].map(l => (
              <a key={l} href="#" className="hover:text-white no-underline transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
