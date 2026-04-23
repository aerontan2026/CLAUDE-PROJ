'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const problems = [
  { icon: 'home',       title: 'Ceiling & Wall Seepage',      desc: 'Water staining, dampness, and blistering paint traced back to slab failures, joint breakdowns, or hidden pipe leaks.' },
  { icon: 'roof',       title: 'Roof Leakage',                desc: 'Ponding water, failed membrane laps, open upstands, and corroded flashings causing recurring interior damage.' },
  { icon: 'drop',       title: 'Bathroom Water Ingress',      desc: 'Grout failure, missing waterproof membrane, failed floor traps — allowing water to penetrate into the unit below.' },
  { icon: 'crack',      title: 'Crack & Joint Failures',      desc: 'Structural and movement cracks that act as direct water pathways — requiring crack injection or flexible sealant systems.' },
  { icon: 'facade',     title: 'Façade Leakage',              desc: 'Wind-driven rain penetration through external wall cladding, window reveals, expansion joints, and coping details.' },
  { icon: 'interior',   title: 'Interior Damage from Leaks',  desc: 'Secondary damage to ceilings, floors, walls, and finishes caused by prolonged, unresolved water ingress issues.' },
]

const icons: Record<string, React.JSX.Element> = {
  home:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  roof:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 20h20M4 20V10l8-7 8 7v10"/><path d="M10 20v-5h4v5"/></svg>,
  drop:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  crack:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  facade:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>,
  interior: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/></svg>,
}

export default function Problems() {
  return (
    <section id="problems" className="py-24" style={{ background: '#f4f4f4' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 text-center md:text-left"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: '#45C2FF' }}>
            <span className="w-6 h-[2px] inline-block" style={{ background: '#45C2FF' }} />
            Leak Problems We Solve
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,3vw,42px)] font-black tracking-tight leading-tight" style={{ color: '#2c2c2c' }}>
            Every Water Ingress Issue<br/>
            <span style={{ color: '#45C2FF' }}>Has a Root Cause</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[17px] mt-4 max-w-[520px] leading-relaxed" style={{ color: '#666666' }}>
            We don&apos;t apply band-aid fixes. We trace the source, understand the failure mechanism, and apply the right system the first time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: 'rgba(69,194,255,0.6)', boxShadow: '0 12px 36px rgba(69,194,255,0.10), 0 4px 16px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-6 cursor-default border"
              style={{ borderColor: '#e0e0e0' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3, backgroundColor: '#45C2FF' }}
                transition={{ duration: 0.25 }}
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(69,194,255,0.1)', color: '#45C2FF' }}
              >
                <span className="w-5 h-5">{icons[p.icon]}</span>
              </motion.div>
              <h3 className="font-bold text-[16px] mb-2" style={{ color: '#2c2c2c' }}>{p.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: '#666666' }}>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
