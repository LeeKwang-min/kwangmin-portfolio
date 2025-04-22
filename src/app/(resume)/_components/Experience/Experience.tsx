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

        {/* Vision */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(진행중)`}</span>
              2025.04 ~
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`Vision`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"인하우스 서비스 통합 대시보드 / 리포트 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">{`렌더링 방식을 통한 페이지 최적화`}</span>
              <ul className="pl-2">
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`다수의 인하우스 서비스 데이터를 호출하는 구조로 인해 초기 로딩 지연 및 서버 부하 발생`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`특성과 목적에 따라 Next.js 렌더링 전략(SSR, CSR, SSG, ISR)을 적용하여 최적화 진행`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`정적 콘텐츠 중심의 서비스 렌딩 페이지는 SSG를 통해 빌드 시 정적 HTML로 생성`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`최신성과 서버 효율성이 모두 필요한 문의 내역 페이지는 ISR로 일정 주기마다 갱신`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`유저별 구조가 다르고 데이터가 바로 보여져야 하는 페이지는 SSR로 서버에서 HTML 생성 후 전달`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`사용자 인터랙션이 많고 데이터가 동적으로 바뀌는 페이지는 CSR적용`}
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`Lighthouse Performance(FCP, TTI, LCP) 점수 평균 10점 이상 향상`}
                  </span>
                  {/* SSG/SSR 기반 초기 콘텐츠 제공 방식으로 FCP, LCP 지표를 개선 */}
                </li>
                <li className="flex gap-2 items-center">
                  <Dot size={16} color="#00000090" />
                  <span className="text-[#00000090] font-semibold">
                    {`페이지 응답 속도 및 사용자 만족도 향상, 서버 부하 분산으로 시스템 효율성 개선`}
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`디자인 시스템 구축`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`3개의 인하우스 서비스에서 동일한 디자인이 사용되는 것을 확인`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`공통 디자인 시스템 구축의 필요성을 인지`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`ADR 문서 작성 및 디자인 시스템 구축 계획 수립`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`소스 코드가 직접 포함되는 장점이 있는 Shadcn UI 도입`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`공통 컴포넌트 및 스타일 설정 파일 개발을 통해 개발 및 UI 작업 시간 단축`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`DnD를 통한 차트 정렬 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`기존 차트 정렬 방식이 제목 중심의 모달 방식으로 정렬 과정에서 불편함 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`react-dnd를 사용하여 차트 리스트에서 DnD 방식으로 직관적 차트 순서 변경 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`차트 정렬 시간 약 50% 단축 및 계약사의 긍정적 피드백을 통한 비즈니스 가치 향상`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`차트 상태 관리 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`대시보드, 리포트 화면을 비롯한 여러 화면에서 차트 상태 공유 필요성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`상태 관리의 복잡성 감소 및 개발 생산성 향상 필요성 요구`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`최소한의 보일러플레이트로 상태 관리가 가능한 Zustand를 채택하여 직관적이며 간결한 상태 관리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`상태 관리 복잡성 감소 및 개발 생산성 향상`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`차트 리렌더링/API 호출 최적화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`DnD를 통한 정렬 과정에서 선택한 차트의 잦은 리렌더링 발생 확인`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tanstack Query 캐시 정책을 데이터 적재 단위로 설정하여 API 호출 횟수 감소`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`메모이제이션(Memoization)을 통해 데이터 변경 시에만 리렌더링 진행`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KB 검진 대행 서비스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 5개월)`}</span>
              2024.12 ~ 2025.04
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`KB 검진 대행 서비스`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"건강검진을 예약/관리하고 결과를 확인할 수 있는 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`캐싱 전략을 통한 API 응답 속도 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`병원의 정보를 필터 기반으로 호출하는 기능에서 평균 응답 시간 약 5초 소요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`필터 조건이 자주 변경되는 특성상 사용자 불편 및 서버 부하 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tanstack Query의 캐싱 전략을 적용하여 성능 개선 진행행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`queryKey를 필터 조건에 따라 설정하여 조건별 캐시를 분리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`staleTime을 정책에 맞춰 DB 갱신 주기에 맞춰 재호출 되로록 설정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`동일 조건에 대한 API 호출을 대폭 감소시키고 캐시 데이터를 즉시 반환하여 응답`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자 이탈률 감소 및 서버 부하 완화로 전반적 성능 최적화`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`모바일 SMS 인증번호 자동 입력 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자가 인증번호를 수동으로 입력하는 과정에서 불만 CS발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`autocomplete 특성을 one-time-code로 설정하여 자동 입력 기능 설정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`인증 성공률 향상 및 서비스 이탈률 감소, 불만 CS 감소`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`추천 검색어 접근 방식 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자가 추천 검색어를 마우스로 선택하는 과정에서 불만 CS발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`키보드와 엔터키를 사용한 검색어 선택 및 탐색, 스크롤 이동 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`탐색 소요 시간 감소 및 탐색 횟수 감소로 사용자 경험 개선`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`추천 검색어 호출 기능에 Debounce 적용`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자의 키 입력마다 API 호출이 발생하여 서버 부하 및 비용 상승이 우려`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`서버 비용 약 30% 절감 및 응답 속도 개선으로 사용자 만족도 향상`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`쿼리 파라미터를 사용한 조건 유지 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 이동 혹은 재진입 시 필터, 정렬 조건 유지에 대한 불만 CS 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`쿼리 파라미터를 관리하는 공통 함수를 개발하여 조건을 쿼리 파라미터로 관리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 이동과 재진입, 공유시에 조건이 유지되도록 처리하여 재설정 시간 제거`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`SSO 인증/인가 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`KB 모바일 앱을 통한 자동 로그인 프로세스 개발`}
                    </span>
                  </li>
                </ul>
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
                  버튼 중복 클릭 방지 기능 개발
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`동일한 버튼 클릭으로 인해 중복 API 요청이 빈번하여 데이터 정확성 저하 및 비용 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Form Submit의 Pending 상태를 확인하여 버튼 disabled 처리 및 로딩 아이콘 표시`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Throttling으로 1초 내 연속 클릭 방지, 중복 호출 방지로 API 요청 감소`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`데이터 정확성 및 사용자 만족도 증가, 서버 자원 절약에 기여`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Lazy Loading 적용 및 코드 스플리팅을 통한 초기 로딩 속도 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`초기 페이지 로딩 시간이 길어 사용자의 서비스 체류 시간 및 만족도가 낮음 (로딩 평균 5초)`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`코드 스플리팅 적용 후 초기 로딩 속도 2초로 단축(약 60% 개선)`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자 피드백에서 성능 만족도 향상 확인`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  라이프로그 간의의 데이터 시각화 기능 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`관리자가 라이프로그 간의 관계와 연관성을 텍스트로 확인하는 과정에서 어렵다는 피드백`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`라이프로그 간의 관계를 플로우 차트로 시각화하여 확인 가능하도록 개선`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`새롭게 추가한 라이프로그의 정보에 대한 미리보기 기능 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`라이프로그 생성, 연결 소요 시간 50% 감소 및 긍정적 피드백`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`Jira 기반 요구사항 정의 및 프로젝트 관리`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비개발 팀과의 협업 과정에서 개발 일정과 달성률 확인 과정에서 어려움 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Jira issue 기반의 일정 관리 및 달성 상태 공유`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비개발자와의 소통 과정에서 효율적인 소통 방법 제시`}
                    </span>
                  </li>
                </ul>
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
                  {`음식 영양 정보를 차트로 시각화하여 제공`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자들이 텍스트 기반의 영양 정보에 대한 이해도가 낮아 시각적 데이터 필요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Recharts를 활용한 직관적인 차트 제공으로 데이터 이해도 및 앱 사용 편의성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`서비스 이용률 약 30% 증가, 사용자 피드백에서 긍정적 피드백`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  PWA 적용 및 반응형 디자인 구현으로 모바일 최적화
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`모바일 접속 사용자 비율이 90% 이상의 서비스로 접속 과정의 편의성 제공이 필수인 서비스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`PWA를 통한 홈 화면 접속 가능한 앱으로 제공, 접속율 약 50% / 사용율 약 30% 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`반응형 디자인을 적용하여 모든 기기에서 일관된 경험 제공`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  사전 허용된 사용자만 접근 가능하도록 처리
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`고가의 데이터를 사용하는 서비스로 사용 제한이 필요한 서비스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Next-Auth와 Middleware를 활용하여 자사, 계약사 사용자만 접근 가능하도록 처리`}
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
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비동기식(이메일 등) 커뮤니케이션으로 실시간 대응이 어렵고 비효율적인 업무 프로세스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`채팅 기능 도입으로 실시간 커뮤니케이션 가능, 문의 대응 시간을 평균 10분에서 5분 이내로 단축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`업무 효율성 증가, 진행 속도와 생산성 개선 확인`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Sentry 기반 에러 모니터링 구축
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`장애 및 에러 발생 시 대응이 지연되어 서비스 안정성 문제로 사용자 불만 접수`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Sentry 적용으로 실시간 에러 트래킹과 알림을 통한 대응 프로세스 구축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`장애 확인 속도를 1시간 이내로 단축하여 장애 대응 효율 상승`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  임직원 라이프로그 정보 시각화 정보 제공
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`임직원 건강 코칭시에 정보 확인에 어려움이 있다는 피드백`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Chart.js를 활용하여 복잡한 건강 정보를 각종 차트로 시각화 하여 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`정보 확인 편의성 증가와 실시간 코칭시 정보 확인 용이성 확보`}
                    </span>
                  </li>
                </ul>
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
                      {`iOS의 사파리 브라우저 환경에서 input 태그, viewport와 같은 호환성 문제 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`webkit 설정, dvh 단위 등을 사용하여 호환성 문제 해결`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`iOS 환경에서도 Android 환경과 동일한 모바일 환경 제공`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Git 기반 코드 리뷰 및 커밋 컨벤션 도입
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`코드 품질 관리 부재로 유지보수 비용과 기술 부채 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`ADR 문서를 통한 코드 리뷰 프로세스와 커밋 컨벤션 도입 결정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`에러율 감소 및 코드 품질 개선, 유지보수 비용 절감에 기여`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">i18n 다국어 지원</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`글로벌 사용자를 고려한 서비스로 다국어 지원이 필요한 서비스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`i18n 기반 언어 지원으로 해외 사용자 접근 용이성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`글로벌 시장 확장 및 신규 사용자 확보에 기여`}
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
