import InDropUp from '~/components/animation/in-drop-up';

export default function Description() {
  return (
    <section className="flex h-[600px] items-center justify-center bg-[#f7f8fac7]">
      <InDropUp y={50} mb={-100} duration={0.8}>
        <p className="text-center text-[32px] leading-[1.6] font-bold text-[#1f1e33]">
          내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
          <br />
          이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
          <br />
          토스와 함께라면 당신의 일상이 새로워질 거예요.
        </p>
      </InDropUp>
    </section>
  );
}
