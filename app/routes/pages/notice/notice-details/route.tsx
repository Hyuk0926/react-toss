import { Link } from 'react-router';

import { Button } from '~/components/ui/button';

import { NOTICE } from '../route';
import NoticeContent from './components/notice.content';
import NoticeTitle from './components/notice-title';

export const loader = ({ params }) => {
  const { id } = params;
  // 객체 형태로 데이터를 반환
  console.log('id', id);

  const notice = NOTICE.find((n) => n.id === id);
  if (!notice) {
    throw new Error('Notice not found');
  } // id에 해당하는 공지사항을 찾음 일치하지 않으면 에러 발생

  return {
    notice,
  };
}; //서버상에서 처리되는 로직으로, params에서 id를 가져와서 NOTICE 배열에서 해당 id를 가진 공지사항을 찾음

export default function NoticeDetails({ loaderData }) {
  const { notice } = loaderData;
  // loaderData에서 notice를 가져옴
  console.log('notice', notice);

  // 화면상에서 보여지는 로직으로, notice를 props로 받아서 화면에 표시함

  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          <div>
            <NoticeTitle
              title="공지사항 제목"
              createdAt={new Date('2025-05-12').toISOString()}
            />
          </div>
          <div>
            <NoticeContent content={notice.content} />
            <Link to="/notice">
              <Button variant="secondary" className="my-[100px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
