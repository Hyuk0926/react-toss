import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function Description() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="flex h-[428px] items-center justify-center bg-[#f7f8fac7] px-4 desktop:h-[600px]">
      <InDropUp y={50} mb={-100} duration={0.8}>
        <div className="container">
          <p
            className={`text-center leading-[1.6] font-[600] text-[#1f1e33] ${
              isMobile ? 'text-[22px]' : 'text-[32px]'
            }`}
          >
            내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
            <br />
            이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
            <br />
            토스와 함께라면 당신의 일상이 새로워질 거예요.
          </p>
        </div>
      </InDropUp>
    </section>
  );
}
