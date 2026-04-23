'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: '#problems', label: 'Solutions' },
  { href: '#services', label: 'Services' },
  { href: '#process',  label: 'Process' },
  { href: '#projects', label: 'Projects' },
  { href: '#clients',  label: 'Clients' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled ? 'h-[60px] bg-black/98 shadow-lg' : 'h-[68px] bg-black/96'
        }`}
        style={{ backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-blue rounded flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 20 20" className="w-5 h-5 fill-black">
              <path d="M10 2C6 6 3 9 3 12.5a7 7 0 0014 0C17 9 14 6 10 2z"/>
            </svg>
          </div>
          <span className="text-[17px] font-extrabold text-white tracking-tight">
            Aqua<span className="text-blue">Shield</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-white/75 hover:text-white text-sm font-medium transition-colors no-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#cta"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block bg-blue text-black text-[13px] font-bold px-[22px] py-[10px] rounded no-underline"
        >
          Book Assessment
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <motion.span
              key={i}
              className="block h-[2px] bg-white rounded"
              animate={open
                ? i === 0 ? { rotate: 45,  y: 7,  width: '100%' }
                : i === 1 ? { opacity: 0,  width: 0 }
                :           { rotate: -45, y: -7, width: '100%' }
                : { rotate: 0, y: 0, opacity: 1, width: '100%' }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 top-[60px] z-40 flex flex-col pt-8 px-6 pb-10 gap-0 overflow-y-auto"
            style={{ background: 'rgba(14,14,14,0.98)', backdropFilter: 'blur(12px)' }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="block py-[18px] text-xl font-semibold text-white/80 hover:text-blue no-underline border-b border-white/7 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              onClick={() => setOpen(false)}
              className="mt-7 w-full text-center bg-blue text-black text-base font-bold py-4 px-7 rounded no-underline"
            >
              Book Assessment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <ScrollBar />
    </>
  )
}

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] z-[200] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #45C2FF, #00e5ff)',
      }}
    />
  )
}
