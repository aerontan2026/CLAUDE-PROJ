'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const trustStats = [
  { n: '500+', l: 'Projects Completed' },
  { n: '18 Yrs', l: 'Experience' },
  { n: '94%',  l: 'Issue Reduction' },
  { n: '100%', l: 'Handover Docs' },
]

const certBadges = [
  { icon: '🛡', label: 'BCA Registered' },
  { icon: '✅', label: 'ISO 9001 Certified' },
  { icon: '⭐', label: '5-Star Rated' },
]

interface DropProps {
  width: string
  height: string
  left: string
  top: string
  opacity: number
  animationDuration: number
  animationDelay: number
}

// Water drop particle
function WaterDrop({ style }: { style: DropProps }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background: 'rgba(69,194,255,0.25)',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        width: style.width,
        height: style.height,
        left: style.left,
        top: style.top,
        opacity: style.opacity,
      }}
      animate={{ y: [0, 120, 120], opacity: [0, 0.6, 0] }}
      transition={{
        duration: style.animationDuration,
        delay: style.animationDelay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 80])
  const y2 = useTransform(scrollY, [0, 600], [0, 40])

  const drops = Array.from({ length: 14 }, (_, i) => {
    const seed = i * 137.5
    const w = 3 + ((seed * 1.7) % 7)
    return {
      width:  `${w}px`,
      height: `${w * 1.5}px`,
      left:   `${(seed * 2.3) % 100}%`,
      top:    `${(seed * 1.9) % 70}%`,
      opacity: 0.08 + ((seed * 0.03) % 0.18),
      animationDuration: 5 + ((seed * 0.7) % 7),
      animationDelay: -((seed * 0.8) % 8),
    }
  })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ paddingTop: 68 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(105deg, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.7) 60%, rgba(14,14,14,0.55) 100%),
            url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80') center/cover no-repeat
          `,
        }}
      />

      {/* Water drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {drops.map((d, i) => <WaterDrop key={i} style={d} />)}
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center flex-1 py-16 md:py-24">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="inline-flex items-center gap-2 border text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(69,194,255,0.1)', borderColor: 'rgba(69,194,255,0.3)', color: '#45C2FF' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#45C2FF' }} />
            Specialist Waterproofing
          </motion.div>

          <motion.h1
            style={{ y: y1 }}
            className="text-[clamp(40px,6vw,68px)] font-black leading-[1.08] tracking-tight text-white mb-5"
          >
            <motion.span
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="block"
            >
              Stop Water
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="block"
            >
              Seepage{' '}
              <span style={{ color: '#45C2FF' }}>at the Source</span>
            </motion.span>
          </motion.h1>

          <motion.p
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="text-white/70 text-lg leading-relaxed mb-8 max-w-[500px]"
          >
            We diagnose, rectify, and prevent recurring leak issues with specialist
            waterproofing systems tailored to your building&apos;s unique requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded no-underline"
              style={{ background: '#45C2FF', color: '#0e0e0e' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book an Assessment
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-sm px-7 py-4 rounded no-underline hover:border-white/60 transition-colors"
            >
              View Projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.92 }}
            className="grid grid-cols-3 border-t border-white/10 pt-6 gap-0"
          >
            {trustStats.slice(0,3).map((s, i) => (
              <div key={i} className={`text-center px-2 ${i < 2 ? 'border-r border-white/10' : ''}`}>
                <div className="text-[22px] font-black text-white leading-none mb-1">{s.n}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="hidden md:block"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10" style={{ height: 420 }}>
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
              alt="Waterproofing site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.7) 0%, transparent 60%)' }} />
            <div className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
              Active Site — Roof Waterproofing
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cert strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="relative z-10 border-t border-white/10"
        style={{ background: 'rgba(14,14,14,0.85)', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-3 flex flex-wrap justify-center md:justify-start items-center gap-6">
          <span className="text-white/30 text-[11px] font-semibold uppercase tracking-widest hidden md:block">Trusted by</span>
          {certBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5 text-white/60 text-[12px] font-medium">
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
