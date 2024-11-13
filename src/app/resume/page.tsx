import Image from "next/image";
import React from "react";
import { FaEnvelope, FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* 1. Personal Information Section */}
        <section className="mb-12 flex flex-col md:flex-row items-center md:items-start">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Profile"
            fill
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-800">홍길동</h1>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:example@email.com" className="hover:underline">
                  example@email.com
                </a>
              </p>
              <p className="flex items-center">
                <FaBlog className="mr-2" />
                <a
                  href="https://blog.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  blog.example.com
                </a>
              </p>
              <p className="flex items-center">
                <FaGithub className="mr-2" />
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/example
                </a>
              </p>
              <p className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a
                  href="https://linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/example
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 2. Self Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
            ABOUT ME
          </h2>
          <p className="text-lg">
            사용자 중심의 웹 애플리케이션을 개발하는 것에 열정을 가진 프론트엔드
            개발자입니다. 최신 기술 트렌드를 지속적으로 학습하며, 효율적이고
            확장 가능한 코드 작성을 목표로 하고 있습니다. 팀 협업을 통해 더 나은
            서비스를 만들어가는 과정에서 성장하고 있으며, 사용자 경험 향상과
            성능 최적화에 특별한 관심을 가지고 있습니다.
          </p>
        </section>

        {/* 3. Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
            WORK EXPERIENCE
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-700">
                  회사 프로젝트
                </h3>
                <p className="text-gray-600">2020.07 - 현재</p>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="text-xl font-semibold text-gray-700">
                    프로젝트 A
                  </h4>
                  <p className="text-gray-600 mb-2">2022.01 - 2022.06</p>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    프로젝트 개요
                  </h5>
                  <p className="mb-2">사용자 대시보드 개발 프로젝트</p>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    주요 업무
                  </h5>
                  <ul className="list-disc list-inside mb-2">
                    <li>반응형 UI 구현</li>
                    <li>데이터 시각화 컴포넌트 개발</li>
                    <li>성능 최적화</li>
                  </ul>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    사용 기술
                  </h5>
                  <p className="text-sm text-gray-600">
                    React, TypeScript, D3.js, Styled-Components
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-700">
                  개인 프로젝트
                </h3>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="text-xl font-semibold text-gray-700">
                    프로젝트 B
                  </h4>
                  <p className="text-gray-600 mb-2">2023.03 - 2023.05</p>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    프로젝트 개요
                  </h5>
                  <p className="mb-2">개인 블로그 플랫폼 개발</p>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    주요 기능
                  </h5>
                  <ul className="list-disc list-inside mb-2">
                    <li>SSR을 활용한 SEO 최적화</li>
                    <li>마크다운 에디터 구현</li>
                    <li>댓글 시스템 개발</li>
                  </ul>
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    사용 기술
                  </h5>
                  <p className="text-sm text-gray-600">
                    Next.js, MongoDB, TailwindCSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
            SKILLS
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                Frontend
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  React: 컴포넌트 기반 개발, Hooks 활용, 상태 관리 (Redux,
                  Recoil)
                </li>
                <li>
                  TypeScript: 정적 타입 시스템을 활용한 안정적인 코드 작성
                </li>
                <li>HTML/CSS: 시맨틱 마크업, 반응형 디자인, CSS-in-JS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                Backend
              </h3>
              <ul className="list-disc list-inside">
                <li>Node.js: Express 프레임워크를 이용한 RESTful API 개발</li>
                <li>Database: MongoDB, MySQL 기본 CRUD 작업</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                DevOps
              </h3>
              <ul className="list-disc list-inside">
                <li>Git: 버전 관리, 협업 워크플로우</li>
                <li>Docker: 컨테이너화된 애플리케이션 배포</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Additional Experiences Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
            ADDITIONAL EXPERIENCES
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">교육</h3>
              <p>
                네이버 커넥트재단 부스트캠프 웹・모바일 6기 수료 (2021.07 -
                2021.12)
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">블로그</h3>
              <p>기술 블로그 운영: 주 1회 새로운 기술 및 개발 경험 공유</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">학력</h3>
              <p>OO대학교 컴퓨터공학과 졸업 (2016.03 - 2020.02)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
