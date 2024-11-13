import React from "react";

function Skill() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">SKILLS</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">
            Frontend
          </h3>
          <ul className="list-disc list-inside">
            <li>
              React: 컴포넌트 기반 개발, Hooks 활용, 상태 관리 (Redux, Recoil)
            </li>
            <li>
              Next.js: SSR, SSG, ISR을 활용한 최적화된 웹 애플리케이션 개발
            </li>
            <li>TypeScript: 정적 타입 시스템을 활용한 안정적인 코드 작성</li>
            <li>
              HTML/CSS: 시맨틱 마크업, 반응형 디자인, CSS-in-JS
              (Styled-Components, Tailwind CSS)
            </li>
            <li>상태 관리: Redux, Recoil, Tanstack-Query</li>
            <li>폼 관리: React-Hook-Form</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js: Express 프레임워크를 이용한 RESTful API 개발</li>
            <li>Database: MongoDB, MySQL 기본 CRUD 작업</li>
            <li>Supabase: 백엔드 서비스 활용 경험</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">DevOps</h3>
          <ul className="list-disc list-inside">
            <li>Version Control: Git, GitHub</li>
            <li>Deployment: Vercel, Netlify</li>
            <li>Docker: 컨테이너화된 애플리케이션 배포</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skill;
