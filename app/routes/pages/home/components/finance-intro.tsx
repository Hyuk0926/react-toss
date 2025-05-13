// 수정된 FinanceIntro 컴포넌트
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FinanceIntro() {
  const ref = useRef(null); // ref는 FinanceIntro 내에서만 사용
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  return (
    <section
      ref={ref}
      className="relative h-[800px] bg-[url('/images/finance-bg.jpg')] bg-cover bg-center"
    >
      <motion.div
        className="absolute top-0 left-0 z-20 h-full w-1/4 bg-white"
        style={{ x: leftX }}
      />
      <motion.div
        className="absolute top-0 right-0 z-20 h-full w-1/4 bg-white"
        style={{ x: rightX }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-[80px] font-[700] text-white">꼭 필요했던 금융</h1>
      </div>
    </section>
  );
}
