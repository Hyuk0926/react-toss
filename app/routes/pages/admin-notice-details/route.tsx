import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';

// Removed broken import for Route type

export const loader = async ({ params }) => {
  const { id } = params;
  const notice = await prisma.notice.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!notice) {
    throw new Error('Notice not found');
  }

  return {
    notice,
  };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리 / 상세</BreadcrumbItem>,
};

type Notice = {
  id: number;
  title: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

type AdminNoticeDetailsProps = {
  loaderData: {
    notice: Notice;
  };
};

export default function AdminNoticeDetails({ loaderData }: AdminNoticeDetailsProps) {
  const { notice } = loaderData;
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="leading-1.4 text-2xl font-bold">{notice.title}</h1>
      <div className="flex justify-between py-4 text-foreground/40">
        <p>{dayjs(notice.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
        <p>{dayjs(notice.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</p>
      </div>
      <Separator />
      <div className="pt-[40px] text-[16px] leading-[25.6px] font-[400]">
        {notice.content.split('\n').map((line: string, index: number) => (
          <p key={index} className="block pb-[10px]">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <Button onClick={() => navigate(-1)}>목록 보기</Button>
      </div>
    </div>
  );
}
