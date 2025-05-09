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
  const opacity = useTransform(scrollYProgress, [startScrollY, endScrollY], [0, 1]);
  const y = useTransform(scrollYProgress, [startScrollY, endScrollY], [30, 0]); // 아래에서 올라오는 효과

  return (
    <motion.div className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
