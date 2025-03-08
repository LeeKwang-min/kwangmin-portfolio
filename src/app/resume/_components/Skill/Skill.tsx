import React from "react";

const skillList = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React (상급)",
        description: "컴포넌트 기반 개발, Hooks 활용, 상태 관리",
      },
      {
        name: "Next.js (상급)",
        description: "SSR을 활용하여 SEO 최적화 및 Client에 필요한 API 작성",
      },
      {
        name: "TypeScript (상급)",
        description: "안정적이고 유지보수가 쉬운 코드 작성",
      },
      {
        name: "HTML/CSS (상급)",
        description:
          "시맨틱 마크업, 반응형 디자인, CSS-in-JS (Emotion, Tailwind CSS)",
      },
      {
        name: "서버/클라이언트 상태 관리 (상급)",
        description: "Recoil, Tanstack-Query",
      },
      {
        name: "UI/상태 관리 (상급)",
        description: "React-Hook-Form, Tanstack-Table, Shadcn UI",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Supabase (초급)",
        description: "Auth, Database, Storage 등 백엔드 서비스 활용",
      },
      {
        name: "Node.js (중급)",
        description: "Express 프레임워크를 이용한 RESTful API 개발",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Version Control (상급)",
        description: "Git, GitHub",
      },
      {
        name: "Deployment (중급)",
        description: "Vercel",
      },
      {
        name: "Docker (초급)",
        description: "컨테이너화된 애플리케이션 배포",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Jira (중급)",
        description: "프로젝트 일정 및 타임라인 관리",
      },
      {
        name: "Confluence (상급)",
        description: "프로젝트 문서 관리",
      },
      {
        name: "Figma (중급)",
        description: "기획 및 디자인 협업 툴",
      },
    ],
  },
];

function Skill() {
  return (
    <section className="mb-4 border-b-[1.5px] border-[#E5E5E5] pb-8">
      <h2 className="text-3xl font-semibold mb-4 pb-2">Skills</h2>

      <div className="space-y-8 relative flex flex-col gap-8">
        {/* Frontend */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">Frontend</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px] border-l-4 border-gray-200">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">React (상급)</span>
              <span className="font-semibold">
                컴포넌트 기반 개발, Hooks 활용, 상태 관리
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Next.js (상급)</span>
              <span className="font-semibold">
                SSR을 활용하여 SEO 최적화 및 Client에 필요한 API 작성
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">TypeScript (상급)</span>
              <span className="font-semibold">
                안정적이고 유지보수가 쉬운 코드 작성
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">HTML/CSS (상급)</span>
              <span className="font-semibold">
                시맨틱 마크업, 반응형 디자인, CSS-in-JS (Emotion, Tailwind CSS)
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">
                서버/클라이언트 상태 관리 (상급)
              </span>
              <span className="font-semibold">Recoil, Tanstack-Query</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">UI/상태 관리 (상급)</span>
              <span className="font-semibold">
                React-Hook-Form, Tanstack-Table, Shadcn UI
              </span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">Backend</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px] border-l-4 border-gray-200">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Supabase (초급)</span>
              <span className="font-semibold">
                Auth, Database, Storage 등 백엔드 서비스 활용
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Node.js (중급)</span>
              <span className="font-semibold">
                Express 프레임워크를 이용한 RESTful API 개발
              </span>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">DevOps</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px] border-l-4 border-gray-200">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">
                Version Control (상급)
              </span>
              <span className="font-semibold">Git, GitHub</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Deployment (중급)</span>
              <span className="font-semibold">Vercel</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Docker (초급)</span>
              <span className="font-semibold">
                컨테이너화된 애플리케이션 배포
              </span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">Tools</h3>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px] border-l-4 border-gray-200">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Jira (중급)</span>
              <span className="font-semibold">
                프로젝트 일정 및 타임라인 관리
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Confluence (상급)</span>
              <span className="font-semibold">프로젝트 문서 관리</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[22px]">Figma (중급)</span>
              <span className="font-semibold">기획 및 디자인 협업 툴</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className="mb-4 border-b-[1.5px] border-[#E5E5E5] pb-8">
      <h2 className="text-3xl font-semibold mb-4"></h2>
      <div className="space-y-6 gap-4 grid grid-cols-2">
        {skillList.map((item) => (
          <div key={item.title} className="border-l-4 border-gray-200 pl-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              {item.title}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {item.skills.map((skill) => (
                <li key={skill.name} className="flex flex-col gap-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-600">{skill.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
