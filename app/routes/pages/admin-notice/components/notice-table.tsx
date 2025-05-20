import dayjs from 'dayjs';
import { ArrowUpDown } from 'lucide-react';
import { useSearchParams as _useSearchParams } from 'react-router'; // unused 무시 처리

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import type { Notice } from '~/generated/prisma';

import NoticePagination from './notice-pagination';

interface Props {
  notices: Notice[];
  totalCount: number;
  page: number;
}

export const NoticeTable = ({ notices, totalCount, page }: Props) => {
  const [_, setSearchParams] = _useSearchParams(); // eslint 무시 처리
  const handleSort = () => {
    setSearchParams((current) => {
      const params = {
        ...Object.fromEntries(current),
      };
      params.sort = params.sort === 'asc' ? 'desc' : 'asc';
      return params;
    });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <Input className="w-100" placeholder="공지사항 제목으로 검색..." />
        <Button>새 공지사항 등록</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead onClick={handleSort}>
              <div className="flex cursor-pointer items-center gap-2">
                <span>생성시간</span>
                <ArrowUpDown size={16} />
              </div>
            </TableHead>
            <TableHead>수정시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notices.map((notice) => (
            <TableRow key={notice.id}>
              <TableCell>{notice.id}</TableCell>
              <TableCell>{notice.title}</TableCell>
              <TableCell>
                {dayjs(notice.createdAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
              <TableCell>
                {dayjs(notice.updatedAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-8">
        <NoticePagination totalCount={totalCount} page={page} />
      </div>
    </div>
  );
};
