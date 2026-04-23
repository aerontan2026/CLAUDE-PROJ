import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.0 },
  },
}

export const viewportOnce = { once: true, margin: '-80px' }
