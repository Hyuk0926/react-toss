import InDropUp from '~/components/animation/in-drop-up';
import Shield from '~/components/svg/shield.svg?react';
import Timer from '~/components/svg/timer.svg?react';
import WonLogo from '~/components/svg/won-logo.svg?react';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function TransformService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-[1900px] bg-[#f9fafb] desktop:h-[2311px]">
      <div className="container h-full pt-[100px] desktop:pt-[250px]">
        {isMobile ? (
          <>
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className="mb-[80px] px-4">
                <h2 className="mb-4 text-[24px] font-bold text-[#3182f6]">송금</h2>
                <p className="text-[28px] leading-snug font-bold text-[#191f28]">
                  간편하고 안전하게
                  <br />
                  수수료는 평생 무료로,
                  <br />
                  이런 송금 써보셨나요?
                </p>
              </div>
            </InDropUp>

            {/* 평생 무료 송금 */}
            <div className="mb-[60px] flex flex-col items-center px-4">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="mb-4 w-full max-w-[500px]">
                  <h2 className="flex items-center gap-2 text-[18px] font-semibold text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <WonLogo />
                    </div>
                    평생 무료 송금
                  </h2>
                  <p className="mt-2 text-[28px] leading-snug font-bold text-[#191f28]">
                    토스 평생 무료송금으로 <br /> 모두의 금융에 자유를.
                  </p>
                  <p className="mt-2 text-[18px] leading-relaxed font-semibold text-[#6b7684]">
                    누구에게 보내든 은행 상관 없이, <br />
                    이제 토스와 함께 수수료 걱정 없이 송금하세요.
                  </p>
                </div>
              </InDropUp>
              <InDropUp y={100} mb={-50} duration={0.8}>
                <img
                  src="/images/kimtoss.png"
                  alt="kimtoss"
                  className="w-full max-w-[300px]"
                />
              </InDropUp>
            </div>
            <div className="mb-[60px] flex flex-col items-center px-4">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <img
                  src="/images/alert-service.png"
                  alt="alert-service"
                  className="w-full max-w-[300px]"
                />
              </InDropUp>
              {/* 사기 계좌 조회 */}
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="mt-4 w-full max-w-[500px] pt-[30px]">
                  <h2 className="flex items-center gap-2 text-[15px] font-semibold text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <Shield />
                    </div>
                    사기계좌 조회
                  </h2>
                  <p className="mt-2 text-[22px] leading-snug font-bold text-[#191f28]">
                    송금 전 사기 내역 조회로
                    <br />
                    피해를 미리 방지할 수 있어요
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed font-semibold text-[#6b7684]">
                    송금 전 토스가 알아서 사기 내역 조회를 해드려요.
                    <br />
                    상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
                    <br />
                    안전하게 송금할 수 있어요.
                  </p>
                </div>
              </InDropUp>
            </div>

            {/* 자동이체 예약 */}
            <div className="mb-[60px] flex flex-col items-center px-4">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="mb-4 w-full max-w-[500px]">
                  <h2 className="flex items-center gap-2 text-[18px] font-semibold text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <Timer />
                    </div>
                    자동이체 예약
                  </h2>
                  <p className="mt-2 text-[28px] leading-snug font-bold text-[#191f28]">
                    은행 점검 시간,
                    <br />
                    기다릴 필요 없어요
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed font-semibold text-[#6b7684]">
                    은행 점검 시간에는 자동이체 예약을 이용해보세요.
                    <br />
                    점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
                  </p>
                </div>
              </InDropUp>
              <InDropUp y={100} mb={-50} duration={0.8}>
                <img
                  src="/images/inspection.png"
                  alt="inspection"
                  className="w-full max-w-[500px]"
                />
              </InDropUp>
            </div>
          </>
        ) : (
          <>
            <InDropUp y={100} mb={-50} duration={0.8}>
              <div className="mb-[80px]">
                <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
                  송금
                </h2>
                <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
                  간편하고 안전하게
                  <br />
                  수수료는 평생 무료로,
                  <br />
                  이런 송금 써보셨나요?
                </p>
              </div>
            </InDropUp>

            <div className="mb-[100px] flex justify-between">
              <div className="w-[510px]">
                <InDropUp y={100} mb={-50} duration={0.8}>
                  <h2 className="item-center mb-[10px] flex gap-1 text-[20px] leading-[1.4] font-[600] text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <WonLogo />
                    </div>
                    평생 무료 송금
                  </h2>
                  <p className="mb-[20px] text-[40px] leading-[1.4] font-[700] text-[#191f28]">
                    토스 평생 무료송금으로 <br /> 모두의 금융에 자유를.
                  </p>
                  <p
                    className="text-[22px] leading-[1.5] font-[600]"
                    style={{ color: 'rgb(107, 118, 132)' }}
                  >
                    누구에게 보내든 은행 상관 없이, <br /> 이제 토스와 함께 수수료 걱정
                    없이 송금하세요.
                  </p>
                </InDropUp>
              </div>
              <div className="w-[510px]">
                <InDropUp y={100} mb={-50} duration={0.8}>
                  <img src="/images/kimtoss.png" alt="kimtoss" />
                </InDropUp>
              </div>
            </div>

            <div className="mb-[100px] flex justify-between">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="w-[510px]">
                  <img src="/images/alert-service.png" alt="alert-service" />
                </div>
              </InDropUp>
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="w-[510px]">
                  <h2 className="item-center mb-[10px] flex gap-1 text-[20px] leading-[1.4] font-[600] text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <Shield />
                    </div>
                    사기계좌 조회
                  </h2>
                  <p className="mb-[20px] text-[40px] leading-[1.4] font-[700] text-[#191f28]">
                    송금 전 사기 내역 조회로
                    <br />
                    피해를 미리 방지할 수 있어요
                  </p>
                  <p
                    className="text-[22px] leading-[1.5] font-[600]"
                    style={{ color: 'rgb(107, 118, 132)' }}
                  >
                    송금 전 토스가 알아서 사기 내역 조회를 해드려요.
                    <br />
                    상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
                    <br />
                    안전하게 송금할 수 있어요.
                  </p>
                </div>
              </InDropUp>
            </div>

            <div className="flex justify-between">
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="w-[510px]">
                  <h2 className="item-center mb-[10px] flex gap-1 text-[20px] leading-[1.4] font-[600] text-[#3182f6]">
                    <div className="h-[24px] w-[24px]">
                      <Timer />
                    </div>
                    자동이체 예약
                  </h2>
                  <p className="mb-[20px] text-[40px] leading-[1.4] font-[700] text-[#191f28]">
                    은행 점검 시간,
                    <br />
                    기다릴 필요 없어요
                  </p>
                  <p
                    className="text-[22px] leading-[1.5] font-[600]"
                    style={{ color: 'rgb(107, 118, 132)' }}
                  >
                    은행 점검 시간에는 자동이체 예약을 이용해보세요.
                    <br />
                    점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
                  </p>
                </div>
              </InDropUp>
              <InDropUp y={100} mb={-50} duration={0.8}>
                <div className="w-[510px]">
                  <img src="/images/inspection.png" alt="inspection" />
                </div>
              </InDropUp>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
