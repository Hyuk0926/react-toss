import NoticeItem from './components/notice-item';
import NoticePagination from './components/pagination';

interface Notice {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const NOTICE: Notice[] = [
  {
    title: '공지사항 제목1',
    content: '공지사항 내용1',
    createdAt: new Date('2025-05-12'),
    updatedAt: new Date('2025-05-12'),
  },
  {
    title: '공지사항 제목2',
    content: '공지사항 내용2',
    createdAt: new Date('2025-05-11'),
    updatedAt: new Date('2025-05-11'),
  },
  {
    title: '공지사항 제목3',
    content: '공지사항 내용3',
    createdAt: new Date('2025-05-10'),
    updatedAt: new Date('2025-05-10'),
  },
];

export default function Notice() {
  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          {NOTICE.map((notice, index) => (
            <NoticeItem
              key={index}
              title={notice.title}
              createdAt={notice.createdAt.toISOString()}
              isLast={index === NOTICE.length - 1}
            />
          ))}
        </div>
        <div className="pt-[50px]">
          <NoticePagination />
        </div>
      </div>
    </section>
  );
}
