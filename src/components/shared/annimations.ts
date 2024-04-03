export const variants = {
  open: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
    x: 0,
    height: 0,
  },

  closed: {
    opacity: 0,
    transition: {
      delayChildren: 0.5,
    },
    x: '-100%',
    height: 0,
  },
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
