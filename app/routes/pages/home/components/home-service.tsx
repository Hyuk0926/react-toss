import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function HomeService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const right = useTransform(scrollYProgress, [0, 1], ['0%', '250%']);

  return (
    <section className="h-[1015px] desktop:h-[1687px]" ref={ref}>
      <div className="container flex h-full py-[100px] desktop:px-[46px] desktop:pt-[250px] desktop:pb-[165px]">
        {isMobile ? (
          <div className="flex flex-col items-center space-y-10 px-4 py-10">
            {/* 1. 타이틀 텍스트 */}
            <InDropUp y={150} mb={-100} duration={0.8}>
              <div className="text-center">
                <h2 className="mb-2 text-[16px] font-bold text-[#3182f6]">홈 · 소비</h2>
                <p className="text-[22px] leading-snug font-bold text-[#191f28]">
                  내 돈 관리,
                  <br />
                  지출부터 일정까지
                  <br />
                  똑똑하게
                </p>
              </div>
            </InDropUp>

            {/* 2. 이미지들 */}
            <div className="flex justify-center gap-4">
              {/* 이미지 1 */}
              <InDropUp y={150} mb={-100} duration={0.8}>
                <motion.div className="relative h-[300px] w-[150px]" style={{ right }}>
                  <img
                    className="absolute top-[25px] left-[33px] w-[80px]"
                    src="/images/home-service-1.png"
                    alt="home-service-1"
                  />
                  <img
                    className="relative z-10 w-[150px]"
                    src="/images/iPhone.png"
                    alt="iphone"
                  />
                </motion.div>
              </InDropUp>

              {/* 이미지 2 */}
              <InDropUp y={150} mb={-100} duration={0.8}>
                <motion.div className="relative h-[300px] w-[150px]" style={{ right }}>
                  <img
                    className="absolute top-[26px] left-[32px] w-[85px]"
                    src="/images/home-service-2.png"
                    alt="home-service-2"
                  />
                  <img
                    className="relative z-10 w-[150px]"
                    src="/images/iPhone.png"
                    alt="iphone"
                  />
                </motion.div>
              </InDropUp>
            </div>

            {/* 3. 설명 텍스트 */}
            <InDropUp y={150} mb={-100} duration={0.8}>
              <p className="text-center text-[15px] leading-[1.5] font-[600] text-[#333d4b]">
                토스에 계좌와 카드를 연결해 보세요.
                <br />
                계좌 잔액, 대출·투자 내역은 기본,
                <br />
                일자별 소비와 수입까지 한 번에 볼 수 있어요.
              </p>
            </InDropUp>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <InDropUp y={150} mb={-100} duration={0.8}>
                <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
                  홈 · 소비
                </h2>
                <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
                  내 돈 관리,
                  <br />
                  지출부터 일정까지
                  <br />
                  똑똑하게
                </p>
              </InDropUp>
              <div className="relative">
                <InDropUp y={150} mb={-100} duration={0.8}>
                  <img
                    className="absolute top-[75px] left-[32px] w-[275px]"
                    src="/images/home-service-1.png"
                    alt="home-service-1"
                  />
                  <img
                    className="relative left-[-70px] w-[600px]"
                    src="/images/iPhone.png"
                    alt="iphone"
                  />
                </InDropUp>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end">
              <InDropUp y={150} mb={-100} duration={0.8}>
                <div className="relative">
                  <img
                    className="absolute top-[75px] left-[92px] w-[275px]"
                    src="/images/home-service-2.png"
                    alt="home-service-2"
                  />
                  <img
                    className="relative left-[-10px] w-[600px]"
                    src="/images/iPhone.png"
                    alt="iphone"
                  />
                </div>
              </InDropUp>
              <div>
                <InDropUp y={150} mb={-100} duration={0.8}>
                  <p className="text-[rgb(51, 61, 75)] pt-[30px] text-[23px] leading-[1.5] font-[600]">
                    토스에 계좌와 카드를 연결해 보세요.
                    <br />
                    계좌 잔액, 대출·투자 내역은 기본,
                    <br />
                    일자별 소비와 수입까지 한 번에 볼 수 있어요.
                  </p>
                </InDropUp>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
