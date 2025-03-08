import { cn } from "@/lib/utils";
import React from "react";

const experienceList = [
  {
    company: "휴레이포지티브",
    position: "프론트엔드 개발자",
    period: "2022.02 - 현재",
    description: `"UX 중심의 백오피스 및 서비스 개발/유지보수로 비즈니스 가치 향상"`,
    // tasks: [
    //   {
    //     title: "백오피스 웹 애플리케이션 개발 및 유지보수, 프로젝트 주도",
    //     content: [
    //       "개발부터 유지보수까지 주도하며 서비스 운영의 안정성과 확장성 확보",
    //     ],
    //   },
    //   {
    //     title: "사용자 피드백 기반 UX 개선 및 성능 최적화",
    //     content: [
    //       "사용자 요청에 대한 즉각적인 반응성 강화",
    //       "❯ API 요청 중 로딩 UI 제공 및 피드백 시스템 구축(토스트 메시지, 오류 경고)",
    //       "사용자 입력 편의성 향상, 모바일 사용성 개선",
    //       "❯ 자동 포커스 이동, 페이지 스크롤 유지, TOP 버튼 및 UI 배치 최적화",
    //       "❯ 키보드 사용자를 고려한 Tabindex 설정으로 접근성 강화",
    //     ],
    //   },
    //   {
    //     title: "성능 최적화 및 로딩 속도 개선",
    //     content: [
    //       "서버 호출 및 불필요한 리렌더링 최소화",
    //       "❯ Debounce가 적용된 테이블 필터 제공",
    //       "초기 페이지 로딩 속도 단축, 컴포넌트 성능 최적화",
    //       "❯ 이미지, 컴포넌트 Lazy Loading 적용, 코드 스플리팅을 통한 Next.js 하이드레이션 활용",
    //     ],
    //   },
    //   {
    //     title: "PWA 적용 및 반응형 디자인 구현으로 모바일 최적화",
    //     content: [
    //       "서비스 접근성 강화, 스크롤 네비게이션 최적화",
    //       "❯ 모바일 홈 화면 서비스 추가, TOP 버튼",
    //       "터치 인터랙션 최적화 및 사용성 극대화",
    //       "❯ 버튼 애니메이션 적용, UX 배치 개선",
    //     ],
    //   },
    // ],
    projects: [
      {
        title: "검진대행 사용자 서비스",
        description: "건강검진을 예약/관리하고 결과를 확인할 수 있는 서비스",
        period: "2024.12 ~ 현재 (진행중)",
        tasks: [
          "SSO 인증/인가 기능 개발",
          "❯ 암호화된 토큰을 정재하여 서버에 전달, 받아온 유저 정보를 통해 인증/인가 처리",
          "성능 최적화",
          "❯ 검색어 추천/자동 완성 기능에 Debounce 적용, 검색어 입력이 끝난 후 서버 호출",
          "사용자 경험 개선",
          "❯ 쿼리 파라미터를 활용하여 페이지 이동, 공유 시 검색 조건이 유지되도록 처리",
          "❯ 모바일 환경에서 인증번호 SMS 수신시 자동 입력 기능을 추가하여 사용자 입력 시간 감소",
          "❯ 화살표와 엔터키를 사용한 검색어 선택 및 탐색 기능을 추가하여 사용자 편의성 강화",
          "❯ Form에 포커스, Tabindex 설정으로 사용자의 입력 순서에 대한 순차적 접근성 강화",
          "❯ 검색어 입력창 포커스시 추천 검색어 선택에 최적화된 위치로 페이지 스크롤 이동",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Recharts, Shadcn UI",
        ],
      },
      {
        title: "라이프로그 통합 관리 백오피스",
        description:
          "사용자의 라이프로그를 통합 관리하여 미디어를 생성하고 코칭하는 백오피스",
        period: "2024.01 - 2024.12 (약 1년)",
        tasks: [
          "성능, 리렌더링 최적화 및 초기 로딩 속도 개선",
          "❯ 데이터 실시간 필터(드롭다운, 태그 등)에 Debounce 적용, 필터링이 끝난 후 서버 호출",
          "❯ 검색 버튼에 Throttling 적용, 다중 클릭에 대한 API 이중 호출 방지",
          "❯ 동적 Select에 Debounce 적용, 선택이 끝난 후 서버 호출",
          "❯ Lazy Loading 적용 및 코드 스플리팅을 통한 초기 로딩 속도 개선",
          "사용자 경험 개선",
          "❯ 사용자별 정렬 순서를 브라우저 저장소에 저장하여 선호하는 정렬 순서 유지",
          "❯ 토스트 메시지와 로딩 UI를 통한 API 요청과 결과에 대한 즉각적인 피드백 제공",
          "❯ Form 입력시 사용자 입력 검증에 대한 즉각적인 피드백 제공",
          "Jira 기반 요구사항 정의 및 프로젝트 관리, 효율적인 협업 환경 구축",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Recharts, Shadcn UI",
        ],
      },
      {
        title: "음식 인식 애플리케이션",
        description: "음식을 인식하여 영양 정보를 제공하는 애플리케이션",
        period: "2024.06 - 2024.09 (약 4개월)",
        tasks: [
          "Recharts를 활용, 음식 영양 정보를 차트로 시각화하여 제공",
          "PWA 적용 및 반응형 디자인 구현으로 모바일 최적화",
          "❯ 간편 접속 제공, URL 입력이나 검색 없이 홈 화면에서 바로 접근 가능",
          "❯ 모바일 사용자를 고려한 반응형 디자인 구현",
          "❯ 버튼에 scale 애니메이션, 상태에 따른 디자인을 적용하여 터치 인터랙션 최적화",
          "❯ 본문으로 스크롤시 상단 GNB 메뉴를 숨김처리 하여 넓은 화면 유지",
          "인증/인가",
          "❯ Next-Auth와 Middleware를 활용하여 사전 허용된 사용자만 접근 가능하도록 처리",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tailwind CSS, Shadcn UI, Next-Auth, Next-PWA, Recharts",
        ],
      },
      {
        title: "임직원 코칭 백오피스",
        description:
          "임직원의 코칭 결과를 관리하고 코칭 프로세스를 지원하는 서비스",
        period: "2023.02 - 2024.05 (약 1년 4개월)",
        tasks: [
          "WebSocket을 활용한 실시간 채팅 기능 구현",
          "서비스 안정성 및 성능 개선",
          "❯ Sentry 기반 에러 모니터링 및 대응 프로세스 구축",
          "❯ 공통 차트 컴포넌트 개발, 데이터 시각화 및 사용자 인터랙션 최적화",
          "Chart.js를 활용, 임직원 라이프로그들을 차트로 시각화 하여 제공",
        ],
        stacks: [
          "React, TypeScript, Next.js, Recoil, Chart.js, Axios, Tanstack-Query, React-Hook-Form, Tailwind CSS",
        ],
      },
      {
        title: "오케어 헬스케어 서비스",
        description: "오케어 서비스에 들어가는 헬스케어 서비스 제작",
        period: "2022.02 - 2022.12 (약 11개월)",
        tasks: [
          "웹뷰 개발 및 모바일 이슈 대응",
          "❯ iOS 환경, 사파리 브라우저 호환성 개선",
          "개발 생산성 향상, 개발 문화 정의",
          "❯ Git을 활용한 코드 리뷰 및 커밋 컨벤션 정의로 개발 생산성 향상",
          "❯ Confluence를 통한 문서 관리 및 지식 공유, 프로젝트 유지보수 용이성 확보",
          "글로벌 접근성 강화",
          "❯ i18n을 사용하여 다국어 지원",
          "❯ 접속 환경별 시간 계산 및 표시",
        ],
        stacks: [
          "React, TypeScript, Next.js, Recoil, Chart.js, Axios, Tanstack-Query, React-Hook-Form, Tailwind CSS",
        ],
      },
    ],
  },
];

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
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
        WORK EXPERIENCE
      </h2>
      <div className="space-y-8">
        {experienceList.map((item) => (
          <div key={item.company} className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-700">
                {item.company}
              </h3>
              <h4 className="font-semibold text-gray-900">{item.position}</h4>
              <div className="flex items-center gap-2">
                <p className="text-gray-600">{item.period}</p>
                <h4 className="text-gray-700 font-bold">{`(${calcDate()})`}</h4>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="text-gray-900 font-bold text-xl pb-8 pt-4 underline">
                  {item.description}
                </p>
                {/* <h5 className="text-xl font-bold text-gray-800 mb-2">
                  주요 업무
                </h5>
                <ul className="mb-2 flex flex-col gap-2 pb-4 border-b-2">
                  {item.tasks.map((task) => (
                    <li key={task.title}>
                      <h6 className="text-lg font-semibold text-gray-800 mb-1">
                        {task.title}
                      </h6>
                      <div className="text-base whitespace-pre-wrap">
                        {task.content.map((content) => {
                          const isSubTask = content.startsWith("❯");

                          return (
                            <p key={content} className="pl-4 leading-7 flex">
                              {!isSubTask && <span className="mr-2">•</span>}
                              <span className={cn(isSubTask && "pl-4")}>
                                {content}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    </li>
                  ))}
                </ul> */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  주요 프로젝트
                </h3>
                {item.projects.map((project, idx) => (
                  <div
                    key={project.title}
                    className={cn("border-b-2 py-6", idx === 0 && "pt-0")}
                  >
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex items-center gap-4">
                        <h5 className="text-lg font-semibold text-gray-600">
                          {project.title}
                        </h5>
                        <p className="text-gray-600 font-bold text-sm">
                          {project.period}
                        </p>
                      </div>
                      <p className="text-gray-700 font-bold">
                        {`"${project.description}"`}
                      </p>
                    </div>
                    <ul className="mb-2 leading-8">
                      {project.tasks.map((task) => {
                        const isSubTask = task.startsWith("❯");

                        return (
                          <li
                            key={task}
                            className={cn(
                              "list-disc list-inside",
                              isSubTask && "list-none",
                              !isSubTask &&
                                "text-lg text-gray-800 font-semibold leading-8"
                            )}
                          >
                            <span className={cn(isSubTask && "pl-4")}>
                              {task}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      기술 스택
                    </h5>
                    <p className="text-sm text-gray-600">
                      {project.stacks?.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
