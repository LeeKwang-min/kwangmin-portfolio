import { Dot, Quote } from "lucide-react";
import React from "react";

function Experience() {
  const calcDate = () => {
    const startDate = new Date("2022-02-07");
    const today = new Date();

    const years = today.getFullYear() - startDate.getFullYear();
    const months = today.getMonth() - startDate.getMonth();

    const totalMonths = years * 12 + months;

    const resultYears = Math.floor(totalMonths / 12);
    const resultMonths = totalMonths % 12;

    return `${resultYears}년 ${resultMonths}개월`;
  };

  return (
    <section className="mb-4 pb-20">
      <h2 className="text-3xl font-semibold mb-4 pb-2">Work Experience</h2>
      <div className="space-y-8 relative flex flex-col gap-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">휴레이포지티브</h3>
            <h4 className="font-semibold">
              2022.02 - 현재{" "}
              <span className="font-bold">{`(${calcDate()})`}</span>
            </h4>
            <h4 className="text-xs mt-[3px] text-[#00000080] font-semibold">
              프론트엔드 개발자
            </h4>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p className="font-bold pb-8 flex items-end w-full justify-center gap-1 mt-2">
              <Quote
                size={16}
                color="#00000090"
                fill="#00000080"
                className="h-10 transform scale-x-[-1] border-none"
              />
              {`UX 중심의 백오피스 및 서비스 개발/유지보수로 비즈니스 가치 향상`}
              <Quote
                size={16}
                color="#00000090"
                fill="#00000080"
                className="h-10 border-none"
              />
            </p>
          </div>
        </div>

        {/* KB 검진 대행 사용자 서비스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(진행중)`}</span>
              2024.12 ~
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`KB 검진대행 사용자 서비스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"건강검진을 예약/관리하고 결과를 확인할 수 있는 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">성능 최적화</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`추천 검색어 호출 기능에 Debounce 적용, 서버 호출 횟수 감소`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">사용자 경험 개선</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`모바일 환경에서 SMS 수신시 인증번호 자동 입력 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`화살표와 엔터키를 사용한 검색어 선택 및 탐색 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tabindex와 포커스 설정, 스크롤 이동으로 입력 순서 편의성 개선`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`쿼리 파라미터를 사용하여 페이지 이동, 공유 시 검색 조건 유지`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">SSO인증/인가 기능 개발</span>
              </div>
            </div>
          </div>
        </div>

        {/* 라이프로그 통합 관리 백오피스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 1년)`}</span>
              2024.01 - 2024.12
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`라이프로그 통합 관리 백오피스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"사용자의 라이프로그를 통합 관리하여 미디어를 생성하고 코칭하는 백오피스"`}
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  성능, 리렌더링 최적화 및 초기 로딩 속도 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`검색 버튼에 Throttling 적용, 다중 클릭에 대한 API 이중 호출 방지`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Lazy Loading 적용 및 코드 스플리팅을 통한 초기 로딩 속도 개선`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`실시간 데이터 변화가 필요한 곳에 Debounce 필터 적용, 서버 호출 횟수 감소`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">사용자 경험 개선</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`생성중인 미디어가 사용될 서비스 화면의 미리보기 기능 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`플로우 차트로 복잡한 라이프로그 간의 연결 관계 시각화`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`정렬 순서를 브라우저 저장소에 저장, 유저별 선호하는 정렬 순서 유지`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`자주 사용된 라이프로그 정보를 상단에 노출되도록 처리`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`Jira 기반 요구사항 정의 및 프로젝트 관리, 효율적인 협업 환경 설정`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 음식 사진 인식 애플리케이션션 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 4개월)`}</span>
              2024.06 - 2024.09
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`음식 사진 인식 애플리케이션`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"음식 사진을 인식하여 영양 정보를 제공하는 애플리케이션"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`Recharts를 활용, 음식 영양 정보를 차트로 시각화하여 제공`}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  PWA 적용 및 반응형 디자인 구현으로 모바일 최적화
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`간편 접속 제공, URL 입력이나 검색 없이 홈 화면에서 바로 접근 가능`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`모바일 사용자를 고려한 반응형 디자인 구현`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`버튼에 scale 애니메이션, 상태에 따른 디자인을 적용하여 터치 인터랙션 최적화`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`본문으로 스크롤시 상단 GNB 메뉴를 숨김처리 하여 넓은 화면 유지`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">인증/인가</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Next-Auth와 Middleware를 활용하여 사전 허용된 사용자만 접근 가능하도록 처리`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 임직원 코칭 백오피스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 1년 4개월)`}</span>
              2023.02 - 2024.05
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`임직원 코칭 백오피스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"임직원의 코칭 결과를 관리하고 코칭 프로세스를 지원하는 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`WebSocket을 활용한 실시간 채팅 기능 구현`}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  서비스 안정성 및 성능 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Sentry 기반 에러 모니터링 및 대응 프로세스 구축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`공통 차트 컴포넌트 개발, 데이터 시각화 및 사용자 인터랙션 최적화`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Chart.js를 활용, 임직원 라이프로그들을 차트로 시각화 하여 제공
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* KB오케어 헬스케어 서비스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 11개월)`}</span>
              2022.02 - 2022.12
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`KB오케어 헬스케어 서비스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"KB오케어 서비스에 들어가는 헬스케어 서비스 제작"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`웹뷰 개발 및 모바일 이슈 대응`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`iOS 환경, 사파리 브라우저 호환성 개선`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  개발 생산성 향상, 개발 문화 정의
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Git을 활용한 코드 리뷰 및 커밋 컨벤션 정의로 개발 생산성 향상`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Confluence를 통한 문서 관리 및 지식 공유, 프로젝트 유지보수 용이성 확보`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">글로벌 접근성 강화</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`i18n을 사용하여 다국어 지원`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`접속 환경별 시간 계산 및 표시`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-gray-200 hidden md:block absolute left-1/3 -top-8 h-full" />
      </div>
    </section>
  );
}

export default Experience;
