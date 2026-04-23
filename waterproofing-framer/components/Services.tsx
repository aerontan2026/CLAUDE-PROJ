'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const services = [
  { n: '01', title: 'Roof Waterproofing',        desc: 'Torch-on membrane, liquid-applied systems, and reinforced coatings for flat and pitched roofs.' },
  { n: '02', title: 'Bathroom Waterproofing',    desc: 'Full-system bathroom rectification including hacking, re-screed, membrane application and tiling.' },
  { n: '03', title: 'External Wall Protection',  desc: 'Elastomeric coating systems and anti-carbonation treatments for façade protection and crack bridging.' },
  { n: '04', title: 'Crack Injection',           desc: 'Polyurethane and epoxy injection for structural and non-structural cracks to restore water-tightness.' },
  { n: '05', title: 'Joint Sealant Works',       desc: 'Supply and upgrade of failed movement joints, expansion joints, and window perimeter sealants.' },
  { n: '06', title: 'Leak Rectification',        desc: 'Emergency and planned leak rectification across residential, commercial, and industrial buildings.' },
  { n: '07', title: 'Membrane Systems',          desc: 'Supply and installation of sheet membranes, self-adhesive systems, and high-performance liquid membranes.' },
  { n: '08', title: 'Reinstatement Works',       desc: 'Coordinated reinstatement of tiles, linings, ceilings, and internal finishes following waterproofing works.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#f4f4f4' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
              <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
              What We Do
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight leading-tight" style={{ color: '#2c2c2c' }}>
              Our Waterproofing Services
            </motion.h2>
          </div>
          <motion.a variants={fadeUp} href="#cta"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded no-underline flex-shrink-0"
            style={{ background: '#45C2FF', color: '#0e0e0e' }}
          >
            Request a Quote →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              whileHover={{ y: -5, borderColor: 'rgba(69,194,255,0.5)', backgroundColor: 'rgba(69,194,255,0.03)', boxShadow: '0 10px 32px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-5 cursor-default border"
              style={{ borderColor: '#e0e0e0' }}
            >
              <motion.span
                whileHover={{ color: '#45C2FF' }}
                className="block text-[11px] font-bold tracking-widest mb-3 tabular-nums"
                style={{ color: 'rgba(102,102,102,0.6)' }}
              >
                {s.n}
              </motion.span>
              <h3 className="font-bold text-[15px] mb-2 leading-snug" style={{ color: '#2c2c2c' }}>{s.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: '#666666' }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
