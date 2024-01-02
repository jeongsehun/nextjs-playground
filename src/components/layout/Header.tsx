'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { userInfoAtom, isLoginAtom } from '@/store/user';

import { Button } from '@/components/ui/Button';

function Header() {
  const isLogin = useAtomValue(isLoginAtom);
  const userInfo = useAtomValue(userInfoAtom);

  return (
    <header
      className="flex flex-col justify-around items-center w-full z-50 p-0 h-16 shadow-md min-w-[980px] sticky top-0 bg-white"
      style={{
        boxShadow: '0 1px 0 rgba(68, 121, 178, 0.08), 0 2px 10px rgba(68, 121, 178, 0.08)',
      }}>
      <nav className="flex items-center w-full">
        <div className="p-5 pl-[116px]">
          <Link href="/" className="flex items-center">
            <Image src="/its-logo.svg" width={24} height={24} alt="아이템스카우트 로고 심볼" />
            <Image
              src="/its-typo.svg"
              width={82}
              height={14}
              className="ml-[10px]"
              alt="아이템스카우트 로고 텍스트"
            />
          </Link>
        </div>
        {isLogin ? (
          <div className="ml-auto pr-[116px]">
            <Link className="ml-5" href="/mypage">
              {userInfo?.nickname}님 {'>'}
            </Link>
          </div>
        ) : (
          <div className="ml-auto pr-[116px]">
            <Link href="/signin">
              <Button>로그인</Button>
            </Link>
            <Link className="ml-5" href="/signup">
              <Button>회원가입</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
