import cn from 'classnames';
import dayjs from 'dayjs';

interface Props {
  title: string;
  createdAt: string;
}

export default function NoticeTitle({ title, createdAt }: Props) {
  return (
    <div
      className={cn(
        'flex h-[116px] flex-col justify-center gap-[4px] border-b-1 py-[16px]',
      )}
    >
      <h3 className="text-[24px] leading-[38.4px] font-[700] text-[#1b1c1d]">{title}</h3>
      <p className="text-[14px] leading-[22.4px] font-[500] text-[#4e5968]">
        {dayjs(createdAt).format('YYYY. MM. DD')}
      </p>
    </div>
  );
}
