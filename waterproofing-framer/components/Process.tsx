'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const steps = [
  { n: '01', title: 'Site Inspection',                  desc: 'Thorough on-site inspection to identify leak sources, moisture pathways, and structural contributing factors.' },
  { n: '02', title: 'Root-Cause Diagnosis',             desc: 'Identify the primary failure mechanism — not just where the water exits, but where it enters.' },
  { n: '03', title: 'System Recommendation',            desc: 'Tailored waterproofing system selection matched to your substrate, exposure level, and occupancy requirements.' },
  { n: '04', title: 'Rectification & Application',      desc: 'Precision membrane application with full attention to terminations, upstands, penetrations, and junctions.' },
  { n: '05', title: 'Testing & Handover',               desc: 'Water test, hose test, or visual verification — then written warranty and documentation issued.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: '#111' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
              <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight text-white leading-tight">
              Our Waterproofing Process
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-[17px] mt-3 max-w-[500px] leading-relaxed">
              A structured, methodology-driven approach — from the first inspection to final handover with zero shortcuts.
            </motion.p>
          </div>
          <motion.a variants={fadeUp} href="#cta"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-3 rounded hover:border-blue hover:text-blue transition-colors no-underline flex-shrink-0"
          >
            Get a Quote →
          </motion.a>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] origin-left"
            style={{ background: 'rgba(69,194,255,0.2)' }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="flex md:flex-col items-start md:items-center md:text-center gap-5 md:gap-0"
              >
                <motion.div
                  whileHover={{ scale: 1.12, backgroundColor: '#45C2FF', color: '#0e0e0e', boxShadow: '0 0 24px rgba(69,194,255,0.45)' }}
                  transition={{ duration: 0.25 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-[15px] flex-shrink-0 relative z-10 md:mb-5 cursor-default"
                  style={{
                    border: '2px solid rgba(69,194,255,0.3)',
                    background: '#1a1a1a',
                    color: '#45C2FF',
                    boxShadow: i===0 ? '0 0 0 5px rgba(14,14,14,1), 0 0 0 7px rgba(69,194,255,0.2)' : '0 0 0 5px rgba(14,14,14,1)'
                  }}
                >
                  {s.n}
                </motion.div>
                <div className="md:px-2">
                  <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-white/45 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
