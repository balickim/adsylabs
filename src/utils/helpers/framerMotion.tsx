import React from 'react';
import { motion, Variants } from 'framer-motion';

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    y: -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Motion = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial = "hide"
    whileInView = "show"
    variants = { introHeaderVariants }
    viewport = {{ once: true }}
  >
    {children}
  </motion.div>
);