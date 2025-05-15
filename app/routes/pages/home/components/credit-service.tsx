import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function CreditService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  if (isMobile) {
    return (
      <section className="h-[1600px] bg-[#f9fafb]">
        <div className="container pt-[150px]">
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[80px]">
              <h2 className="mb-[30px] text-[20px] leading-[1.3] font-[700] text-[#3182f6]">
                신용
              </h2>
              <p className="mb-[80px] text-[30px] leading-[1.4] font-[700] text-[#191f28]">
                금융 생활의 첫 걸음, <br />
                신용점수를 미리 <br />
                무료로 관리하세요
              </p>
            </div>
          </InDropUp>

          <div
            className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} justify-start`}
          >
            {/* 카드 1 */}
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className="mb-[80px]">
                <img
                  src="/images/credit-point.png"
                  alt="credit-point"
                  width={80}
                  className="mb-[30px]"
                />
                <h2 className="mb-[10px] text-[20px] leading-[1.5] font-[700] text-[#333d4b]">
                  내 신용점수
                </h2>
                <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684]">
                  언제 어디서든, 원할 때 간편하게 <br />
                  KCB, NICE 신용점수를 한 곳에서 확인할 수 <br />
                  있어요. <br />
                </p>
              </div>
            </InDropUp>

            {/* 카드 2 */}
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className={`mb-[80px] ${!isMobile ? 'ml-[50px]' : ''}`}>
                <img
                  src="/images/credit-point-up.png"
                  alt="credit-point-up"
                  width={80}
                  className="mb-[30px]"
                />
                <h2 className="mb-[10px] text-[20px] leading-[1.5] font-[700] text-[#333d4b]">
                  신용점수 올리기
                </h2>
                <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684]">
                  통신비, 일반 납부내역 등의 서류를 <br />
                  토스에서 바로 제출해 신용점수를 올릴 수 <br />
                  있어요. <br />
                </p>
              </div>
            </InDropUp>

            {/* 카드 3 */}
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className="mb-[80px]">
                <img src="/images/bell.png" alt="bell" width={80} className="mb-[30px]" />
                <h2 className="mb-[10px] text-[20px] leading-[1.5] font-[700] text-[#333d4b]">
                  신용관리 알림
                </h2>
                <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684]">
                  신용점수에 변동이 생기면 토스가 알람을 보내드려요. <br />
                  나의 신용점수가 바뀔 때마다 바로 확인하세요. <br />
                </p>
              </div>
            </InDropUp>

            {/* 카드 4 */}
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className={`mb-[800px] ${!isMobile ? 'ml-[50px]' : ''}`}>
                <img src="/images/bulb.png" alt="bulb" width={80} className="mb-[30px]" />
                <h2 className="mb-[10px] text-[20px] leading-[1.5] font-[700] text-[#333d4b]">
                  신용관리 팁
                </h2>
                <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684]">
                  신용점수 관리가 막막하다면? <br />
                  신용관리 팁 콘텐츠를 한번 읽어보세요. <br />
                </p>
              </div>
            </InDropUp>
          </div>
        </div>
      </section>
    );
  }

  // PC UI
  return (
    <section className="bg-[#f9fafb]">
      <div className="container pt-[250px]">
        <InDropUp y={100} mb={-50} duration={0.8}>
          <div className="mb-[150px]">
            <h2 className="leading-1.3 mb-[30px] text-[28px] font-[700] text-[#3182f6]">
              신용
            </h2>
            <p className="mb-[80px] text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              금융 생활의 첫 걸음, <br />
              신용점수를 미리 <br />
              무료로 관리하세요
            </p>
          </div>
        </InDropUp>
        <div className="grid grid-cols-2">
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[150px]">
              <img
                src="/images/credit-point.png"
                alt="credit-point"
                width={120}
                className="mb-[30px]"
              />
              <h2 className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
                내 신용점수
              </h2>
              <p className="text-[22px] leading-[1.5] font-[600] text-[#6b7684]">
                언제 어디서든, 원할 때 간편하게 <br />
                KCB, NICE 신용점수를 한 곳에서 확인할 수 <br />
                있어요. <br />
              </p>
            </div>
          </InDropUp>
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[150px] ml-[50px]">
              <img
                src="/images/credit-point-up.png"
                alt="credit-point-up"
                width={120}
                className="mb-[30px]"
              />
              <h2 className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
                신용점수 올리기
              </h2>
              <p className="text-[22px] leading-[1.5] font-[600] text-[#6b7684]">
                통신비, 일반 납부내역 등의 서류를 <br />
                토스에서 바로 제출해 신용점수를 올릴 수 <br />
                있어요. <br />
              </p>
            </div>
          </InDropUp>
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[150px]">
              <img src="/images/bell.png" alt="bell" width={120} className="mb-[30px]" />
              <h2 className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
                신용관리 알림
              </h2>
              <p className="text-[22px] leading-[1.5] font-[600] text-[#6b7684]">
                신용점수에 변동이 생기면 토스가 알람을 보내드려요. <br />
                나의 신용점수가 바뀔 때마다 바로 확인하세요. <br />
              </p>
            </div>
          </InDropUp>
          <InDropUp y={100} mb={-50} duration={0.8}>
            <div className="mb-[150px] ml-[50px]">
              <img src="/images/bulb.png" alt="bulb" width={120} className="mb-[30px]" />
              <h2 className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
                신용관리 팁
              </h2>
              <p className="text-[22px] leading-[1.5] font-[600] text-[#6b7684]">
                신용점수 관리가 막막하다면? <br />
                신용관리 팁 콘텐츠를 한번 읽어보세요. <br />
              </p>
            </div>
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
