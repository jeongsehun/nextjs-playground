import Image from 'next/image';

function Footer() {
  return (
    <footer className="flex flex-col items-center w-full border-t border-[#001c3414] bg-white text-sm font-normal leading-7">
      <div className="flex flex-col items-start justify-between flex-nowrap max-w-[1040px] w-[90vw] p-20">
        <div className="relative">
          <Image src="/its-typo-gray.svg" width={120} height={38} alt="아이템스카우트 로고 심볼" />
          <ul className="m-0 p-0 pt-3 bg-white list-none">
            <li>
              <span>주식회사 문리버</span>
              <span className="text-border-deep px-[2px]">|</span>
              <span>대표: 최경준</span>
              <span className="text-border-deep px-[2px]">|</span>
              <span>주소: 서울특별시 구로구 디지털로 300, 12층 1226호</span>
            </li>
            <li>
              <span>사업자등록번호: 505-81-86012</span>
              <span className="text-border-deep px-[2px]">|</span>
              <span>통신판매신고번호: 제 2022-서울영등포-2585호</span>
            </li>
            <li>
              <span>
                전화: <a href="tel:070-8833-3002">070-8833-3002</a>
              </span>
              <span className="text-border-deep px-[2px]">|</span>
              <span>
                메일:
                <a href="mailto:help@itemscout.io">help@itemscout.io</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-4 w-full relative">
          <nav className="min-w-[280px] max-w-[600px] flex items-start content-start flex-wrap gap-x-2 gap-y-1">
            <a
              href="https://company.itemscout.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              회사소개
            </a>
            <a
              href="/policy/service/20210805"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              이용약관
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.itemscout.app"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              모바일 앱
            </a>
            {/* TODO: 채널톡 연동 */}
            <a
              href="https://play.google.com/store/apps/details?id=io.itemscout.app"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              문의/상담
            </a>
            <a
              href="https://company.itemscout.io/#jump-recruit"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              채용안내
            </a>
            <a
              href="/policy/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              개인정보 처리방침
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/itemscout/ecmeogcbcoalojmkfkmancobmiahaigg?hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              확장 프로그램
            </a>
            <a
              href="mailto:help@itemscout.io"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[128px] max-w-[128px] text-sm font-normal leading-7 hover:text-base-80 hover:font-bold hover:underline hover:underline-offset-4">
              강의 제휴
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
