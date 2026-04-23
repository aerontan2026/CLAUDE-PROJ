'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    tag: 'Commercial · Roof Waterproofing',
    title: 'Industrial Rooftop Membrane Overhaul',
    desc: 'Full torch-on membrane system installed across 3,200m² of flat roof. Previous system had failed at all upstand junctions.',
    status: 'Completed',
  },
  {
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    tag: 'Residential · Bathroom Waterproofing',
    title: 'MCST Strata Block — Bathroom Overhaul',
    desc: 'Full bathroom waterproofing rectification across 24 affected units: hacking, new screed, liquid membrane, and complete tile reinstatement.',
    status: 'Completed',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tag: 'Commercial · External Wall Protection',
    title: 'Retail Mall Façade Leakage Repair',
    desc: 'Perimeter sealant renewal, elastomeric coating application, and window-reveal waterproofing across the full façade of a 4-storey retail development.',
    status: 'Completed',
  },
  {
    img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
    tag: 'Industrial · Crack Injection',
    title: 'Basement Crack Injection Programme',
    desc: 'Polyurethane injection into 47 linear metres of active cracks in a basement structure, followed by crystalline waterproofing treatment.',
    status: 'Completed',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
              <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
              Featured Projects
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight leading-tight" style={{ color: '#2c2c2c' }}>
              Recent Work
            </motion.h2>
          </div>
          <motion.a variants={fadeUp} href="#"
            className="inline-flex items-center gap-2 border text-sm font-semibold px-5 py-3 rounded no-underline hover:text-blue transition-colors flex-shrink-0"
            style={{ borderColor: '#e0e0e0', color: '#2c2c2c' }}
          >
            View All Projects →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -7, boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden cursor-default border"
              style={{ borderColor: '#e0e0e0' }}
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.55 }}
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">{p.status}</span>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: '#45C2FF' }}>{p.tag}</span>
                <h3 className="font-bold text-[17px] mt-2 mb-2" style={{ color: '#2c2c2c' }}>{p.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#666666' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
