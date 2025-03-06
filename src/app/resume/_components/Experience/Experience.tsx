import { cn } from "@/lib/utils";
import React from "react";

const experienceList = [
  {
    company: "휴레이포지티브",
    position: "프론트엔드 개발자",
    period: "2022.02 - 현재",
    description: `"UX 중심의 백오피스 및 서비스 개발로 비즈니스 가치 향상"`,
    tasks: [
      {
        title: "백오피스 웹 애플리케이션 개발 및 유지보수, 프로젝트 주도",
        content: [
          "개발부터 유지보수까지 주도하며 서비스 운영의 안정성과 확장성 확보",
        ],
      },
      {
        title: "사용자 피드백 기반 UX 개선 및 성능 최적화",
        content: [
          "사용자 요청에 대한 즉각적인 반응성 강화",
          "❯ API 요청 중 로딩 UI 제공 및 피드백 시스템 구축(토스트 메시지, 오류 경고)",
          "사용자 입력 편의성 향상, 모바일 사용성 개선",
          "❯ 자동 포커스 이동, 페이지 스크롤 유지, TOP 버튼 및 UI 배치 최적화",
          "❯ 키보드 사용자를 고려한 Tabindex 설정으로 접근성 강화",
        ],
      },
      {
        title: "성능 최적화 및 로딩 속도 개선",
        content: [
          "서버 호출 및 불필요한 리렌더링 최소화",
          "❯ Debounce가 적용된 테이블 필터 제공",
          "초기 페이지 로딩 속도 단축, 컴포넌트 성능 최적화",
          "❯ 이미지, 컴포넌트 Lazy Loading 적용, 코드 스플리팅을 통한 Next.js 하이드레이션 활용",
        ],
      },
      {
        title: "PWA 적용 및 반응형 디자인 구현으로 모바일 최적화",
        content: [
          "서비스 접근성 강화, 스크롤 네비게이션 최적화",
          "❯ 모바일 홈 화면 서비스 추가, TOP 버튼",
          "터치 인터랙션 최적화 및 사용성 극대화",
          "❯ 버튼 애니메이션 적용, UX 배치 개선",
        ],
      },
    ],
    projects: [
      {
        title: "검진대행 사용자 서비스 (2024.12 ~ 현재)",
        tasks: ["작성중"],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Shadcn UI",
        ],
      },
      {
        title: "라이프로그 통합 관리 백오피스 (2024.01 - 2024.12)",
        tasks: [
          "성능 최적화 및 초기 로딩 속도 개선",
          "❯ Debounce 적용한 테이블 필터를 활용하여 서버 호출 횟수 및 화면 리렌더링 최소화",
          "❯ Lazy Loading 적용 및 코드 스플리팅",
          "사용자 경험 우선 UX 개선 및 성능 최적화",
          "❯ 사용자 피드백을 반영한 UX 개선, 주요 기능 재설계를 통해 사용 편의성 증가",
          "❯ API 요청 중 로딩 UI 제공 및 토스트 메시지, 오류 경고 시스템 구축",
          "❯ 자동 포커스, 스크롤 Tabindex 설정으로 접근성 강화",
          "사용자 인터랙션 분석 후 최적 레이아웃 적용 및 기능 최적화",
          "클라이언트 개발 리딩, 프로세스 자동화 및 서비스 운영의 안정화와 확장",
          "Jira 기반 요구사항 정의 및 프로젝트 관리, 효율적인 협업 환경 구축",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Shadcn UI",
        ],
      },
      {
        title: "음식 인식 애플리케이션 (2024.06 - 2024.09)",
        tasks: [
          "PWA 적용 및 반응형 디자인 구현으로 모바일 최적화",
          "❯ 간편 접속 제공, URL 입력이나 검색 없이 홈 화면에서 바로 접근 가능",
          "❯ 모바일 UX/UI 최적화, 모바일 맞춤 배치 및 버튼 추가로 사용성 강화",
          "❯ 버튼 애니메이션 적용 및 터치 인터랙션 최적화",
          "보안성과 접근성 개선",
          "❯ Next-Auth와 Middleware 기반 인증 시스템 구축으로 보안 강화",
          "❯ 브라우저 저장소를 활용한 인식된 음식별 적합 영양 정보 추천/제공",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tailwind CSS, Shadcn UI, Next-Auth, Next-PWA",
        ],
      },
      {
        title: "헬스케어 서비스 및 백오피스 (2022.02 - 2024.01)",
        tasks: [
          "사용자 경험, 편의성 향상",
          "❯ API 요청 중 로딩 UI 제공",
          "❯ 사용자 입력 검증, 즉각적인 피드백 시스템 구축",
          "❯ 페이지 스크롤 유지 및 자동 포커스 이동",
          "개발 생산성 향상, 개발 문화 정의",
          "❯ Git을 활용한 코드 리뷰 및 커밋 컨벤션 정의로 개발 생산성 향상",
          "❯ Confluence를 통한 문서 관리 및 지식 공유, 프로젝트 유지보수 용이성 확보",
          "서비스 안정성 및 성능 개선",
          "❯ Sentry 기반 에러 모니터링 및 대응 프로세스 구축",
          "❯ 공통 차트 컴포넌트 개발, 데이터 시각화 및 사용자 인터랙션 최적화",
          "사용자 피드백 기반 UX 개선 및 글로벌 접근성 강화",
          "❯ 다국어 지원(i18n) 적용, 글로벌 사용자 대상 접근성 개선",
        ],
        stacks: [
          "React, TypeScript, Next.js, Recoil, Chart.js, Axios, Tanstack-Query, React-Hook-Form, Tailwind CSS",
        ],
      },
    ],
  },
];

function Experience() {
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
              <div className="flex items-center gap-8">
                <h4 className="font-semibold text-gray-900">{item.position}</h4>
                <p className="text-gray-600">{item.period}</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="text-gray-900 font-bold text-xl py-8">
                  {item.description}
                </p>
                <h5 className="text-xl font-bold text-gray-800 mb-2">
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
                </ul>
                {item.projects.map((project) => (
                  <div key={project.title} className="border-b-2 py-6">
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      {project.title}
                    </h5>
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
                                "text-xl text-gray-800 font-semibold leading-8"
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
