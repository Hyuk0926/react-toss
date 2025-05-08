import { motion, MotionValue, useTransform } from 'motion/react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  scrollYProgress: MotionValue<number>;
  startScrollY: number;
  endScrollY: number;
}

export default function ScrollOpacity({
  children,
  className,
  scrollYProgress,
  startScrollY,
  endScrollY,
}: Props) {
  // `scrollYProgress`에 따라 opacity 값을 조정
  const opacity = useTransform(scrollYProgress, [startScrollY, endScrollY], [0, 1]);

  return (
    <motion.div className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
