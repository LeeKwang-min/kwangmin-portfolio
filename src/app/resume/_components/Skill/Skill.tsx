import React from "react";

const skillList = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        description:
          "컴포넌트 기반 개발, Hooks 활용, 상태 관리 (Redux, Recoil)",
      },
      {
        name: "Next.js",
        description: "SSR을 활용하여 SEO 최적화 및 성능 향상",
      },
      {
        name: "TypeScript",
        description: "안정적이고 유지보수가 쉬운 코드 작성",
      },
      {
        name: "HTML/CSS",
        description:
          "시맨틱 마크업, 반응형 디자인, CSS-in-JS (Emotion, Tailwind CSS)",
      },
      {
        name: "서버/클라이언트 상태 관리",
        description: "Redux, Recoil, Tanstack-Query",
      },
      {
        name: "UI/상태 관리",
        description: "React-Hook-Form, Tanstack-Table, Shadcn UI",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Supabase",
        description: "Auth, Database, Storage 등 백엔드 서비스 활용",
      },
      {
        name: "Node.js",
        description: "Express 프레임워크를 이용한 RESTful API 개발",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Version Control",
        description: "Git, GitHub",
      },
      {
        name: "Deployment",
        description: "Vercel",
      },
      {
        name: "Docker",
        description: "컨테이너화된 애플리케이션 배포",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Jira",
        description: "프로젝트 일정 및 타임라인 관리",
      },
      {
        name: "Confluence",
        description: "프로젝트 문서 관리",
      },
      {
        name: "Figma",
        description: "기획 및 디자인 협업 툴",
      },
    ],
  },
];

function Skill() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">SKILLS</h2>
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
