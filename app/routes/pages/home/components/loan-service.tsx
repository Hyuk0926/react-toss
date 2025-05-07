import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';

export default function LoanService() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px 100px 0px`, // <- 백틱으로 템플릿 리터럴 사용
  });

  return (
    <section>
      <div className="container flex">
        <div className="flex-1">
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[210px]">
              <h1 className="leading-1.3 mb-[20px] text-[28px] font-[700] text-[#3182f6]">
                대출
              </h1>
              <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
                여러 은행의 조건을
                <br />
                1분 만에
                <br />
                확인해보세요.
              </p>
            </div>
          </InDropUp>
          <div className="text-[rgb(51,61,75)]">
            <div ref={ref}>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              >
                한도는 높게,
              </motion.h2>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
              >
                금리는 <span className="text-[#8b96ab]">낮게</span>,
              </motion.h2>
              <motion.h2
                className="mb-[30px] text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
              >
                부담은 <span className="text-[#d1d6db]">적게</span>,
              </motion.h2>
            </div>
            <InDropUp y={100} mb={-50} duration={0.8}>
              <p className="text-[23px] leading-[1.5] font-[600]">
                앉은 자리에서 여러 은행의 한도와 금리를 비교하고
                <br />
                내게 꼭 맞는 대출을 찾아보세요.
                <br />
                신용, 비상금, 대환, 주택담보대출 모두 가능해요.
              </p>
            </InDropUp>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <InDropUp y={100} mb={-50} duration={0.8}>
              <img
                className="absolute top-[70px] left-[80px] w-[300px]" // left 값을 40px 증가
                src="/images/loan-service.png"
                alt="loan-service"
              />
              <img
                className="relative left-[-30px] w-[600px]" // left 값을 40px 증가
                src="/images/iPhone.png"
                alt="iphone"
              />
            </InDropUp>
          </div>
        </div>
      </div>
    </section>
  );
}
