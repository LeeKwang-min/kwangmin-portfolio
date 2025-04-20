import { ChevronRight, Dot } from "lucide-react";
import Link from "next/link";

function OtherExperience() {
  return (
    <section className="mb-4 pb-20">
      <h2 className="text-3xl font-semibold mb-4 pb-2">
        Additional Experiences
      </h2>

      <div className="space-y-8 relative flex flex-col gap-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">개인 프로젝트</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-20">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col">
                <h5 className="text-[22px] font-bold">
                  {`Kooks - Custom Hooks 라이브러리`}
                </h5>
                <Link
                  href="https://kooks-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00000080] flex items-center hover:underline"
                >
                  {`https://kooks-web.vercel.app/`}
                  <ChevronRight size={14} color="#00000080" />
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@kooks-fe/kooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00000080] flex items-center hover:underline mt-1"
                >
                  {`https://www.npmjs.com/package/@kooks-fe/kooks`}
                  <ChevronRight size={14} color="#00000080" />
                </Link>
              </div>
              <div className="flex flex-col gap-4 pl-2">
                <div className="flex flex-col gap-4">
                  <span className="font-semibold">
                    {`반복되는 Custom Hook 로직 표준화 및 개발 생산성 향상을 위해 개발`}
                  </span>
                  <ul className="pl-2">
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`NPM 배포를 통한 라이브러리 공유와 오픈 소스 관리 경험`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`상세한 공식 문서 사이트를 배포하여 사용법 안내`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`자주 사용되는 로직을 모듈화하여 재사용`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`패키지 번들링을 통한 최적화 진행`}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col">
                <h5 className="text-[22px] font-bold">
                  {`Pullog - 풀업 기록 관리 분석 서비스`}
                </h5>
                <Link
                  href="https://pullog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00000080] flex items-center hover:underline"
                >
                  {`https://pullog.vercel.app/`}
                  <ChevronRight size={14} color="#00000080" />
                </Link>
              </div>

              <div className="flex flex-col gap-4 pl-2">
                <div className="flex flex-col gap-4">
                  <span className="font-semibold">
                    {`개인적인 운동 기록 관리를 위해 개발한 웹 서비스로 실제 유저 접속 확인 및 피드백 수집`}
                  </span>
                  <ul className="pl-2">
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`Next.js를 활용한 SEO 최적화/향상을 통한 구글 1페이지 노출출`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`Supabase를 활용하여 인증/인가 부터 데이터 관리의 백엔드
                    포지션 경험`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`PWA를 적용하여 웹 앱 출시, 접속에 용이한 서비스 제공`}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Dot size={16} color="#00000090" />
                      <span className="text-[#00000090] font-semibold">
                        {`반응형 디자인을 적용하여 데스크톱, 모바일 환경 모두 동일한
                    사용자 경험 제공`}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-gray-200 hidden md:block absolute left-1/3 -top-8 h-full" />
      </div>
    </section>
  );
}

export default OtherExperience;
