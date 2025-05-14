import { motion } from 'framer-motion';

import HeroDown from '~/components/svg/hero-down.svg?react';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

import AppButton from './app-button';

export default function Hero() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  const titleClass = isMobile
    ? 'text-[32px] leading-[1.4] font-bold text-black'
    : 'text-[66px] leading-[1.4] font-bold text-black';

  const sectionPadding = isMobile ? 'pt-[80px]' : 'pt-[150px]';
  const buttonClass = isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base';

  return (
    <section
      className={`relative flex h-[calc(100vh-60px)] w-full flex-col items-center justify-start bg-[url('/images/new_main.png')] bg-cover bg-center ${sectionPadding}`}
    >
      <div className="hero-shadow absolute top-0 h-[500px] w-full" />

      <motion.div
        className="z-10 mb-[30px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className={titleClass}>
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
      </motion.div>

      <motion.div
        className="z-10 mb-[50px] flex w-full max-w-[600px] items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
      >
        <AppButton className={buttonClass}>
          <img src="/images/apple.png" alt="apple" width={24} height={24} />
          App Store
        </AppButton>
        <AppButton className={buttonClass}>
          <img src="/images/google.png" alt="google" width={24} height={24} />
          Google Play
        </AppButton>
      </motion.div>

      <motion.div
        className="absolute bottom-[45px] z-10 h-[50px] w-[50px]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, y: [0, 15, 0], scale: 1 }}
        transition={{
          opacity: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut',
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
          y: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },
        }}
      >
        <HeroDown />
      </motion.div>
    </section>
  );
}
