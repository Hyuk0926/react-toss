import InDropUp from '~/components/animation/in-drop-up';

export default function InvestService() {
  return (
    <section className="h-[1724px]">
      <div className="container pt-[250px]">
        <div>
          <InDropUp y={100} mb={-50} duration={0.8}>
            <h1 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              투자
            </h1>
            <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              투자, <br />
              모두가 할 수 있도록 <br />
            </p>
          </InDropUp>
        </div>
        <div className="text-[23px] leading-[1.5] font-[600] text-[#33414b]">
          <div className="flex h-[800px]">
            <div className="flex flex-1 items-center justify-end">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <p className="">
                  이해하기 쉬운 용어 <br />
                  설명이 필요 없는 <br />
                  직관적인 화면 구성 <br />
                </p>
              </InDropUp>
            </div>
            <div className="relative flex-2">
              <img
                src="/images/invest-screen.png"
                alt="invest-screen"
                className="absolute top-[85px] left-[115px] w-[295px]"
              />
              <img src="/images/iPhone.png" alt="iPhone" className="absolute w-[600px]" />
            </div>
            <div className="flex-1 pt-[150px]">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <p>
                  송금처럼 쉬운 구매 경험 <br />
                  그리고 투자 판단에 <br />
                  도움을 주는 콘텐츠까지 <br />
                </p>
              </InDropUp>
            </div>
          </div>
          <div className="items-center justify-center pt-[30px] text-center">
            <InDropUp y={100} mb={-50} duration={0.8}>
              <p>
                별도 앱 설치 없이 토스에서 바로, <br />
                토스증권으로 나만의 투자를 시작해 보세요. <br />
              </p>
            </InDropUp>
          </div>
        </div>
      </div>
    </section>
  );
}
