import { motion } from 'framer-motion'

import style from './index.module.css'

const ArrowRight = ({ text }) => {
  return (
    <motion.aside 
      className={style.arrowRight}
      initial={{ transform: 'translateX(-80%)' }}
      whileInView={{ transform: 'translateX(0)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p>
        {text}
      </p>
      <svg
        viewBox='0 0 28 8'
      >
        <path 
          d="M28.3535 4.35416C28.5488 4.1589 28.5488 3.84232 28.3535 3.64706L25.1716 0.465078C24.9763 0.269816 24.6597 0.269816 24.4645 0.465078C24.2692 0.66034 24.2692 0.976922 24.4645 1.17218L27.2929 4.00061L24.4645 6.82904C24.2692 7.0243 24.2692 7.34088 24.4645 7.53614C24.6597 7.73141 24.9763 7.73141 25.1716 7.53614L28.3535 4.35416ZM0 4.50061L28 4.50061V3.50061L0 3.50061L0 4.50061Z"
          fill="var(--white)"
        />
      </svg>
    </motion.aside>
  )
}

export default ArrowRight 