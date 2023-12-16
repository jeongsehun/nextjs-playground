import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

function Header() {
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
        <ul className="flex items-center max-w-[400px] h-full">
          <li className="box-border flex items-center h-16 p-0 mx-3 leading-none rounded-none min-w-16">
            <Link href="/category" className="flex items-center text-sm font-normal h-[60px]">
              아이템발굴
            </Link>
          </li>
          <li className="box-border flex items-center h-16 p-0 mx-3 leading-none rounded-none min-w-16">
            <Link href="/keyword" className="flex items-center text-sm font-normal h-[60px]">
              키워드분석
            </Link>
          </li>
          <li className="box-border flex items-center h-16 p-0 mx-3 leading-none rounded-none min-w-16">
            <Link href="/tracking" className="flex items-center text-sm font-normal h-[60px]">
              랭킹추적
            </Link>
          </li>
        </ul>
        <div className="ml-auto pr-[116px]">
          <Button>
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
