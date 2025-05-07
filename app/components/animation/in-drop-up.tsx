import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  y?: number;
  mb?: number;
  duration?: number;
}

export default function InDropUp({
  children,
  className,
  y = 100,
  mb = -100,
  duration = 0.6,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px ${mb}px 0px`, // <- 백틱으로 템플릿 리터럴 사용
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
