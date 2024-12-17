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
        tasks: [""],
        stacks: [
          "React, TypeScript, Next.js, Tanstack-Table, React-Hook-Form, Tailwind CSS, Shadcn UI",
        ],
      },
      {
        title: "음식 인식 애플리케이션 프로젝트",
        tasks: [""],
        stacks: [
          "React, TypeScript, Next.js, Next-Auth, Next-PWA, Tailwind CSS, Shadcn UI",
        ],
      },
      {
        title: "헬스케어 서비스 및 백오피스 웹 애플리케이션 개발",
        tasks: [""],
        stacks: [
          "React, TypeScript, Next.js, Recoil, Tanstack-Query, React-Hook-Form, Tailwind CSS",
        ],
      },
    ],
  },
  // {
  //   company: "개인 프로젝트",
  //   position: "1인 기획 및 풀스택 개발",
  //   period: "2023.03 - 2023.05",
  //   description: "Next.js를 활용한 개인 블로그 플랫폼 개발",
  //   tasks: [
  //     "Next.js를 활용한 개인 블로그 플랫폼 개발",
  //     "SSR을 활용한 SEO 최적화",
  //     "마크다운 에디터 구현",
  //     "댓글 시스템 개발",
  //     "반응형 디자인 적용",
  //   ],
  //   projects: [
  //     {
  //       title: "서비스 관리 백오피스 프로젝트",
  //       tasks: [
  //         "Next.js를 활용한 개인 블로그 플랫폼 개발",
  //         "SSR을 활용한 SEO 최적화",
  //         "마크다운 에디터 구현",
  //         "반응형 디자인 적용",
  //       ],
  //       stacks: ["Next.js, TypeScript, MongoDB, TailwindCSS"],
  //     },
  //   ],
  // },
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
                <h4 className="text-xl font-semibold text-gray-700">
                  {item.position}
                </h4>
                <p className="mb-2">{item.description}</p>
                <h5 className="text-lg font-semibold text-gray-600 mb-2">
                  주요 업무
                </h5>
                <ul className="mb-2 flex flex-col gap-2">
                  {item.tasks.map((task) => (
                    <li key={task}>{`- ${task}`}</li>
                  ))}
                </ul>
                {item.projects.map((project) => (
                  <div key={project.title} className="mt-8 border-b-2 pb-4">
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      {project.title}
                    </h5>
                    <ul className="list-disc list-inside mb-2">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      사용 기술
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
