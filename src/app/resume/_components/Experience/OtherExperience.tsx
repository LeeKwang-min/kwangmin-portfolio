import { ChevronRight } from "lucide-react";
import Link from "next/link";

function OtherExperience() {
  return (
    <section className="mb-4 border-b-[1.5px] border-[#E5E5E5] pb-8">
      <h2 className="text-3xl font-semibold mb-4 pb-2">
        Additional Experiences
      </h2>

      <div className="space-y-8 relative flex flex-col gap-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">개인 프로젝트</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
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
                  Next.js를 활용한 SEO 최적화/향상
                </span>
                <span className="font-semibold">
                  Supabase를 활용하여 인증/인가 부터 데이터 관리의 백엔드 포지션
                  경험
                </span>
                <span className="font-semibold">
                  PWA를 적용하여 웹 앱 출시, 접속에 용이한 서비스 제공
                </span>
                <span className="font-semibold">
                  반응형 디자인을 적용하여 데스크톱, 모바일 환경 모두 익숙한
                  사용자 경험 제공
                </span>
                <span className="font-semibold">
                  내가 좋아하는 도메인을 이해하고 기획하여 서비스 출시
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-gray-200 hidden md:block absolute left-1/3 h-[calc(100%-24px)]" />
      </div>
    </section>
  );
}

export default OtherExperience;
