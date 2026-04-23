'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

const clientTypes = [
  { icon: '🏢', label: 'Commercial Buildings' },
  { icon: '🏘', label: 'Property Managers / MCST' },
  { icon: '🛍', label: 'Retail & F&B Operators' },
  { icon: '🏭', label: 'Industrial Facilities' },
  { icon: '🏠', label: 'Homeowners' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24" style={{ background: '#f4f4f4' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeLeft} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
              <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
              Who We Work With
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight leading-tight mb-8" style={{ color: '#2c2c2c' }}>
              Trusted by Owners,<br/>
              <span style={{ color: '#45C2FF' }}>Managers & Developers</span>
            </motion.h2>

            <div className="flex flex-col gap-2">
              {clientTypes.map((c, i) => (
                <motion.div
                  key={c.label}
                  variants={fadeLeft}
                  whileHover={{ x: 6, borderColor: '#45C2FF', backgroundColor: 'rgba(69,194,255,0.06)' }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 bg-white rounded-lg px-4 py-4 cursor-default border"
                  style={{ borderColor: '#e0e0e0' }}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="font-semibold text-[15px]" style={{ color: '#2c2c2c' }}>{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl p-8 border"
            style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="text-3xl mb-4" style={{ color: '#45C2FF' }}>&ldquo;</div>
            <p className="text-white text-[18px] leading-relaxed mb-6">
              We&apos;d had the same roof leak <em className="not-italic font-semibold" style={{ color: '#45C2FF' }}>&apos;repaired&apos;</em> three times by different contractors. AquaShield was the only team who actually diagnosed the root cause and fixed it permanently.
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/10">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-sm flex-shrink-0" style={{ background: '#45C2FF' }}>JL</div>
              <div>
                <div className="font-semibold text-white text-[14px]">James Lim</div>
                <div className="text-white/45 text-[12px]">Facilities Manager — Pacific Tower Commercial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
