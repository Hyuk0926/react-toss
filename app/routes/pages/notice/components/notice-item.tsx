import dayjs from 'dayjs';

import { cn } from '~/lib/utils';

interface Props {
  title: string;
  createdAt: string;
  isLast: boolean;
}

export default function NoticeItem({ title, createdAt, isLast }: Props) {
  return (
    <div
      className={cn(
        'flex h-[100px] flex-col justify-center gap-[4px] py-[16px]',
        !isLast && 'border-b border-gray-200',
      )}
    >
      <h3 className="text-[18px] leading-[23.4px] font-[700] text-[#1b1c1d]">{title}</h3>
      <p className="text-[14px] leading-[18.2px] font-[400] text-[#4e5968]">
        {dayjs(createdAt).format('YYYY. MM. DD')}
      </p>
    </div>
  );
}
