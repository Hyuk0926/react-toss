import { Button } from '~/components/ui/button';

export default function BusinessCall() {
  return (
    <section className="h-[306px] bg-[#f5f6f8] py-[33px]">
      <div className="container flex items-center justify-around">
        <div className="max-w-[500px]">
          <h2 className="mb-[16px] text-[36px] leading-[1.3] font-[700] text-[#333d4b]">
            비지니스 고객 정보
          </h2>
          <p className="mb-[20px] text-[16px] leading-[1.5] font-[400] text-[#00132b94]">
            토스팀과의 협업 중 불편을 느끼셨나요?
            <br />
            지금 바로 알려주세요.
          </p>
          <Button variant="secondary">접수하기</Button>
        </div>
        <div className="w-[240px]">
          <img
            src="/images/business-call.png"
            alt="business-call"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
