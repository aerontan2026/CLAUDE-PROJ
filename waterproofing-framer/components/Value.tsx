'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: 'Root-Cause Solutions',
    desc: 'We identify and treat the source of the problem — not just the visible symptom. This stops the cycle of repeat repairs and rising costs.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Proper Detailing Prevents Failures',
    desc: 'Critical junctions, upstands, and terminations are executed to specification — because most failures occur at the details, not the field.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>,
    title: 'Reduce Repeated Repair Costs',
    desc: 'A properly executed waterproofing system typically lasts 10–15 years. Short-cut fixes rarely last 12 months. We focus on the former.',
  },
]

export default function Value() {
  return (
    <section className="py-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
            <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
            Built for the Long Term
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight text-white leading-tight">
            Built for Long-Term Protection
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-[17px] mt-4 max-w-[500px] mx-auto leading-relaxed">
            Every recommendation we make is driven by durability, not just the lowest cost at the point of repair.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -5, borderColor: 'rgba(69,194,255,0.4)', backgroundColor: 'rgba(69,194,255,0.04)' }}
              transition={{ duration: 0.25 }}
              className="rounded-xl p-7 cursor-default border"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(69,194,255,0.22)' }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(69,194,255,0.1)', color: '#45C2FF' }}
              >
                <span className="w-6 h-6">{v.icon}</span>
              </motion.div>
              <h3 className="font-bold text-white text-[16px] mb-3">{v.title}</h3>
              <p className="text-white/45 text-[14px] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
