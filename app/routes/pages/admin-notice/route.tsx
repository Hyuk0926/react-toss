import { useState } from 'react';
import { Link, type LoaderFunctionArgs, redirect, useSearchParams } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

import type { Route } from '../admin-notice/+types/route';
import NoticePagination from './components/notice-pagination';
import { NoticeTable } from './components/notice-table';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (!adminAuth) {
    return redirect('/admin/login');
  }

  const url = new URL(request.url);
  const query = Object.fromEntries(url.searchParams);
  let page = parseInt(query.page);
  if (!page) page = 1;

  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.notice.count(),
  ]);

  return { notices, totalCount, page };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리</BreadcrumbItem>,
};

export default function AdminNotice({ loaderData }: Route.ComponentProps) {
  const { notices, totalCount, page } = loaderData;
  const [keyword, setKeyword] = useState('');
  const [, _setSearchParams] = useSearchParams(); // ✅ ESLint 규칙에 따라 허용됨

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <Input
          className="w-100"
          placeholder="공지사항 제목으로 검색..."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <Link to="/admin/notice/create">
          <Button>새 공지사항 등록</Button>
        </Link>
      </div>
      <NoticeTable notices={notices} />
      <div className="mt-8">
        <NoticePagination totalCount={totalCount} page={page} />
      </div>
    </div>
  );
}
