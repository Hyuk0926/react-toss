import { useState } from 'react';

import LangButton from './lang-button';
import NavButton from './nav-button';
import TossLogo from './svg/toss-logo.svg?react';

interface NavItem {
  to: string;
  label: string;
}

const MENU: NavItem[] = [
  { to: '#', label: '회사소개' },
  { to: '#', label: '공지사항' },
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
        <div className="w-[66px]">
          <TossLogo />
        </div>

        {/* ✅ nav 부분은 그대로 유지 */}
        <nav className="flex gap-4">
          {MENU.map((item, i) => (
            <NavButton key={i}>{item.label}</NavButton>
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
