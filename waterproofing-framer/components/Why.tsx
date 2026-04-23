'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { staggerContainer, fadeLeft, scaleIn, viewportOnce } from '@/lib/animations'

const stats = [
  { n: 500, suffix: '+',    label: 'Projects Completed',      sub: 'Across commercial & residential' },
  { n: 18,  suffix: ' Yrs', label: 'Industry Experience',     sub: 'Deep technical expertise' },
  { n: 94,  suffix: '%',    label: 'Issue Reduction',         sub: 'Across rectified buildings' },
  { n: 100, suffix: '%',    label: 'Handover Documentation',  sub: 'Every project, every time' },
]

function Counter({ n, suffix }: { n: number; suffix: string }) {
  const ref       = useRef<HTMLSpanElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const mv        = useMotionValue(0)
  const spring    = useSpring(mv, { duration: 1800, bounce: 0 })
  const [val, setVal] = useState('0')

  useEffect(() => { spring.on('change', v => setVal(Math.round(v).toString())) }, [spring])
  useEffect(() => { if (inView) mv.set(n) }, [inView, n, mv])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function Why() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeLeft} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
              <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-[clamp(28px,3vw,40px)] font-black tracking-tight leading-tight mb-5" style={{ color: '#2c2c2c' }}>
              We Don&apos;t Patch Leaks —<br/>
              <span style={{ color: '#45C2FF' }}>We Solve Them</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-[17px] leading-relaxed mb-6" style={{ color: '#666666' }}>
              Our approach focuses on root-cause diagnosis and proper execution, helping you avoid recurring issues and rising maintenance costs.
            </motion.p>
            {[
              'Full root-cause investigation before any work begins',
              'System recommendations matched to your substrate and exposure',
              'Detailed workmanship guarantee on all completed works',
            ].map((pt, i) => (
              <motion.div key={i} variants={fadeLeft} className="flex items-start gap-3 mb-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(69,194,255,0.15)' }}>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#45C2FF" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span className="text-[15px]" style={{ color: '#2c2c2c' }}>{pt}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}
            className="grid grid-cols-2 gap-[3px] rounded-xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={scaleIn}
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(69,194,255,0.08)' }}
                className="p-7 flex flex-col justify-between"
                style={{
                  background: '#1a1a1a',
                  borderRadius: i===0?'10px 0 0 0':i===1?'0 10px 0 0':i===2?'0 0 0 10px':'0 0 10px 0'
                }}
              >
                <div className="text-[32px] font-black text-white leading-none mb-2 tabular-nums">
                  <Counter n={s.n} suffix={s.suffix} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold mb-1" style={{ color: '#45C2FF' }}>{s.label}</div>
                  <div className="text-[12px] text-white/40">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
