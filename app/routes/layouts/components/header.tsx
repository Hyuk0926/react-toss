import { useState } from 'react';
import { Link } from 'react-router';

import LangButton from './lang-button';
import TossLogo from './svg/toss-logo.svg?react';

interface NavItem {
  to: string;
  label: string;
}

const MENU: NavItem[] = [
  { to: '/', label: '회사소개' },
  { to: '/notice', label: '공지사항' },
  { to: '#', label: '고객센터' },
  { to: '#', label: '자주묻는질문' },
  { to: '#', label: '토스인증서' },
  { to: '#', label: '채용' },
];

export default function Header() {
  const [language, setLanguage] = useState('KO'); // ✅ 언어 상태 정의

  return (
    <header className="fixed z-50 h-[60px] w-full bg-white">
      <div className="container flex h-full items-center justify-between">
        <Link to="/" className="w-[66px]">
          <TossLogo />
        </Link>

        {/* 메뉴 네비게이션 */}
        <nav className="flex gap-6">
          {' '}
          {/* gap 수치를 늘려줌 */}
          {MENU.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="px-3 py-2 text-sm text-gray-700 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ✅ 언어 선택 영역 */}
        <div className="flex items-center gap-2">
          <LangButton language={language} setLanguage={setLanguage} value="KO">
            KO
          </LangButton>
          <span className="text-[#d1d6db]">|</span>
          <LangButton language={language} setLanguage={setLanguage} value="EN">
            ENG
          </LangButton>
        </div>
      </div>
    </header>
  );
}
