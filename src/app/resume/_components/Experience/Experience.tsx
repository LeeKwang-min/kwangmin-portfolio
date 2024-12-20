import React from "react";

const experienceList = [
  {
    company: "휴레이포지티브",
    position: "프론트엔드 개발자",
    period: "2022.02 - 현재",
    description: "사용자 평가를 활용한 UX 중심적 백오피스 웹 서비스 개발",
    tasks: [
      "백오피스 웹 애플리케이션 기획, 디자인, 개발 및 유지보수",
      "UX 개선 및 성능 최적화를 통한 사용자 경험 개선",
      "A/B 테스트 활용한 효율성 향상 및 사용자 평가 활용",
      "서비스 통합 관리 백오피스 프로젝트 주도 (2024.01 - 진행중)",
      "음식 인식 애플리케이션 프로젝트 주도 (2024.06 - 2024.09)",
      "헬스케어 서비스 및 백오피스 웹 애플리케이션 개발 (2022.02 - 2024.01)",
    ],
    projects: [
      {
        title: "사내 서비스 통합 관리 백오피스 프로젝트",
        tasks: [
          "클라이언트 기획부터 디자인, 개발까지 주도하여 리딩",
          "Jira를 통한 유저 스토리 정의 및 프로젝트 관리",
          "Debounce를 활용한 UI를 적용하여 성능 최적화 및 사용자 경험 개선",
          "수작업으로 진행되던 프로세스를 로직/자동화하여 사용자 편의성 향상",
          "실제 사용자의 피드백을 반영한 UX 개선 및 효율성 향상",
          "A/B 테스트를 통해 사용자 효율성과 편의성 향상",
          "실제 사용자와의 꾸준한 소통을 통한 요구사항의 이해와 개발 진행",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Shadcn UI",
        ],
      },
      {
        title: "음식 인식 애플리케이션 프로젝트",
        tasks: [
          "PWA 적용을 통한 모바일 최적화 진행",
          "반응형 디자인을 적용하여 웹과 모바일 환경에서 자연스러운 UI 제공",
          "Next-Auth와 Middleware를 활용한 클라이언트 단독 인증 시스템 구현",
          "도메인 이해를 바탕으로 추가 기능 기획 및 개발",
        ],
        stacks: [
          "React, TypeScript, Next.js, Tailwind CSS, Shadcn UI, Next-Auth, Next-PWA",
        ],
      },
      {
        title: "헬스케어 서비스 및 백오피스 웹 애플리케이션 개발",
        tasks: [
          "Git을 활용한 코드 리뷰 및 커밋 컨벤션 정의",
          "Confluence를 통한 문서 관리 및 공유",
          "Sentry를 통한 에러 추적 및 모니터링",
          "웹뷰 프로젝트 개발 진행",
          "디자인 시스템 개발 진행",
          "공통 차트 컴포넌트 개발",
          "상태 관리 라이브러리를 통한 데이터 관리 및 렌더링 최적화",
          "i18n을 통한 다국어 지원",
          "RESTful API 활용",
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
              <p className="text-gray-600">{item.period}</p>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  {item.position}
                </h4>
                <p className="mb-2">{item.description}</p>
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  주요 업무
                </h5>
                <ul className="mb-2 flex flex-col gap-2 pb-4">
                  {item.tasks.map((task) => (
                    <li key={task}>{`- ${task}`}</li>
                  ))}
                </ul>
                {item.projects.map((project) => (
                  <div key={project.title} className="border-b-2 py-6">
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      {project.title}
                    </h5>
                    <ul className="list-disc list-inside mb-2 leading-8">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
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
