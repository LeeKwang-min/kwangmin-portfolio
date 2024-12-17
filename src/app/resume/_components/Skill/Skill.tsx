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
        description: "적절한 SSR을 활용하여 SEO 최적화 및 성능 향상",
      },
      {
        name: "TypeScript",
        description:
          "정적 타입 시스템을 활용한 안정적이고 유지보수가 쉬운 코드 작성",
      },
      {
        name: "HTML/CSS",
        description:
          "시맨틱 마크업, 반응형 디자인, CSS-in-JS (Styled-Components, Tailwind CSS)",
      },
      {
        name: "서버/클라이언트 상태 관리",
        description: "Redux, Recoil, Tanstack-Query",
      },
      {
        name: "폼 관리",
        description: "React-Hook-Form",
      },
      {
        name: "테이블 관리",
        description: "Tanstack-Table",
      },
      {
        name: "일관된 UI 관리",
        description: "Shadcn UI",
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
];

function Skill() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">SKILLS</h2>
      <div className="space-y-6">
        {skillList.map((item) => (
          <div key={item.title}>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              {item.title}
            </h3>
            <ul className="list-disc list-inside">
              {item.skills.map((skill) => (
                <li key={skill.name}>
                  {skill.name}: {skill.description}
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
