'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export default function CTABanner() {
  const btnRef = useRef<HTMLAnchorElement>(null)
  const inView  = useInView(btnRef, { once: false, margin: '-100px' })

  return (
    <section id="cta" className="py-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-4" style={{ color: '#45C2FF' }}>
            <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
            Recurring Leak Issues?
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(32px,5vw,56px)] font-black tracking-tight text-white leading-tight mb-5"
          >
            Get a Professional<br/>
            <span style={{ color: '#45C2FF' }}>Waterproofing Assessment</span><br/>
            Today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/55 text-[17px] mb-10 max-w-[480px] mx-auto leading-relaxed">
            No obligation. Our specialists will inspect your site, identify the source, and provide a clear recommendation.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <motion.a
              ref={btnRef}
              href="tel:+6512345678"
              animate={inView ? { boxShadow: ['0 0 0 0 rgba(69,194,255,0.5)', '0 0 0 16px rgba(69,194,255,0)', '0 0 0 0 rgba(69,194,255,0)'] } : {}}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded no-underline"
              style={{ background: '#45C2FF', color: '#0e0e0e' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Assessment
            </motion.a>
            <motion.a
              href="tel:+6512345678"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-bold text-base px-8 py-4 rounded no-underline hover:border-white/60 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            {['No-obligation inspection', 'Same-week availability', 'Written report provided'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#45C2FF" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
