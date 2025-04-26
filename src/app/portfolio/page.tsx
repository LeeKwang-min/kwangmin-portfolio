"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = {
  FE: [
    "Next.js",
    "TypeScript",
    "React",
    "Next-Auth",
    "Zustand",
    "Jotai",
    "Tanstack Query",
    "React Hook Form",
  ],
  BE: ["Supabase", "Node.js", "Docker", "Vercel"],
  "UI/UX": ["Tailwind CSS", "Shadcn UI", "Recharts", "Chart.js"],
  "협업 도구": ["Git", "Jira", "Confluence", "Figma"],
};

const projects = [
  {
    title: "Vision - 인하우스 통합 대시보드/리포트",
    features:
      "Next.js 렌더링 전략(SSR, SSG, ISR, CSR) 최적화로 초기 로딩 지연 및 서버 부하 문제 해결.",
    techStack: "Next.js, React, Tanstack Query, Tailwind CSS",
    contribution: "페이지 특성별 최적화 전략 수립 및 렌더링 방식 적용 주도.",
    troubleshooting: {
      problem: "다수 데이터 호출로 인한 초기 로딩 지연 및 서버 부하.",
      solution: "페이지 특성에 맞게 SSR, CSR, SSG, ISR을 구분 적용.",
      result: "Lighthouse 성능 지표 평균 10점 이상 향상 및 서버 부하 분산.",
    },
    period: "2025.04 진행 중",
  },
  {
    title: "디자인 시스템 구축",
    features: "Shadcn UI 기반 공통 컴포넌트 설계 및 구축.",
    techStack: "React, Shadcn UI, Tailwind CSS",
    contribution: "디자인 시스템 구조 설계 및 공통 컴포넌트 개발 주도.",
    troubleshooting: {
      problem: "UI 컴포넌트 중복 및 유지보수성 문제.",
      solution: "공통 디자인 시스템 구축 및 모듈화.",
      result: "UI 구현/유지보수 시간 대폭 절감.",
    },
    period: "2025.02 진행 중",
  },
  {
    title: "KB 검진 대행 서비스",
    features: "필터 기반 병원 검색 성능 개선 및 서버 부하 30% 완화.",
    techStack: "Next.js, React, Tanstack Query",
    contribution: "캐싱 전략 개선 및 API 최적화 담당.",
    troubleshooting: {
      problem: "병원 검색 API 호출 시 평균 5초 지연.",
      solution: "queryKey 분리 및 staleTime 정책 설정.",
      result: "응답 속도 개선 및 서버 부하 완화.",
    },
    period: "2024.12 ~ 2025.04",
  },
  {
    title: "Pullog - 턱걸이 기록 관리 서비스",
    features: "Next.js + Supabase 기반 PWA 개인 프로젝트.",
    techStack: "Next.js, Supabase, Tailwind CSS",
    contribution: "서비스 전체 설계 및 개발, SEO 최적화.",
    troubleshooting: {
      problem: "운동 기록 관리의 접근성 및 SEO 부족.",
      solution: "PWA 적용 및 SEO 최적화.",
      result: "구글 1페이지 노출 및 사용자 피드백 수집.",
    },
    period: "2024.03 ~ 2024.06",
  },
];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Sticky Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 py-4 flex justify-center gap-8 text-sm font-medium
            ${
              isScrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
                : "hidden"
            }`}
      >
        {[
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "career", label: "Career" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`hover:text-blue-500 transition-colors`}
          >
            {item.label}
          </a>
        ))}
      </motion.header>
      {/* Full Screen Hero Section with Header */}
      <section className={cn("h-screen relative")}>
        {/* Hero Content */}
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-100/50 to-transparent relative overflow-hidden">
          {/* 배경 이미지 */}
          <motion.div
            className="absolute inset-x-20 inset-y-32 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2.5, duration: 1.5 }}
          >
            <motion.div className="w-full h-full bg-gradient-to-b from-white/50 to-white/20">
              <motion.img
                src="/assets/profile.jpg"
                alt="이광민 프로필 이미지 배경"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, duration: 2 }}
              />
            </motion.div>
          </motion.div>

          {/* 텍스트 컨텐츠 */}
          <div className="relative z-10 text-center">
            {/* 텍스트 애니메이션 컨테이너 */}
            <motion.div
              className="relative h-[200px]"
              animate={{ y: -40 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {/* Web FE 텍스트 */}
              <motion.h1
                className="text-[118px] font-bold text-gray-300/90 absolute w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Web FE
              </motion.h1>

              {/* 인사말 */}
              <motion.h2
                className="text-4xl font-bold text-gray-800 dark:text-gray-200 absolute w-full"
                initial={{ opacity: 0, y: 160 }}
                animate={{ opacity: 1, y: 120 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                프론트엔드 개발자{" "}
                <span className="text-blue-600 dark:text-blue-400 font-extrabold">
                  이광민
                </span>
                입니다.
              </motion.h2>
            </motion.div>

            {/* 소개 문구 */}
            <motion.p
              className="text-xl max-w-2xl mx-auto font-bold whitespace-pre-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {`사용자 경험과 비즈니스 가치를 동시에 고려합니다. 
              성능 최적화와 UX 개선으로 실질적 성과를 만들어내는데 집중합니다.`}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-900">
        {/* Content Sections */}
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-32 text-gray-900 dark:text-gray-100">
          {/* About Section */}
          <section id="about" className="space-y-8">
            <h2 className="text-4xl font-bold">{`이광민이란 개발자는`}</h2>
            <div className="flex flex-col space-y-6">
              <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    왜 프론트엔드를 선택했나요?
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {`저는 사용자와 직접 소통하며 가치를 전달하는 일에 큰 보람을 느낍니다.
                  
                  프론트엔드는 사용자와 가장 먼저 만나 상호작용하는 영역으로, 
                  사용자의 경험을 개선함으로써 편의성뿐만 아니라 비즈니스 가치까지 높일 수 있다는 점에 매력을 느꼈습니다.

                  실제 서비스의 사용자 경험을 개선하고, 그 결과로 긍정적인 피드백과 서비스 가치 향상을 이끌어내는 과정에서 
                  프론트엔드 개발자로서의 자부심과 보람을 느끼고 있습니다.`}
                </p>
              </div>

              <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    실무에서 가장 중요하게 생각하는 것은 무엇인가요?
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {`제가 실무에서 가장 중요하게 생각하는 가치는 '사용자 경험'과 '커뮤니케이션'입니다.
                  
                  작은 변화라도 사용자 경험을 개선하면 비즈니스 가치가 크게 향상된다는 것을 경험하며,
                  항상 사용자의 입장에서 생각하고 더 나은 경험을 제공하기 위해 노력하고 있습니다.
                  
                  또한, 좋은 결과물은 원활한 커뮤니케이션에서 나온다고 믿습니다.
                  다양한 의견을 존중하고 조율하는 과정들이 저와 팀원들의 성장이 된다고 생각합니다.`}
                </p>
              </div>

              <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600 dark:text-purple-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    가장 기억에 남는 문제 해결 경험은 무엇인가요?
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {`사용자 불만을 칭찬으로 바꾼 경험이 가장 기억에 남습니다.

                  라이프로그 테이블 페이지의 데이터 조회 속도가 5초 이상 걸려 많은 불만이 있었는데,
                  Lazy Loading과 낙관적 업데이트를 통해 1초 이내로 단축시켜 사용자 만족도를 향상시켰던 경험입니다.
                  
                  이 개선을 통해 서비스 운영 과정에서 발생하던 사용자 불만을 긍정적 피드백으로 변경한 것은 물론,
                  계약사의 만족도를 높이는 것에 큰 기여를 한 매우 의미있는 경험이었습니다.`}
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold">기술 스택</h2>
            <div className="flex flex-col space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={index}
                  className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        index === 0
                          ? "bg-blue-100 dark:bg-blue-900"
                          : index === 1
                          ? "bg-green-100 dark:bg-green-900"
                          : index === 2
                          ? "bg-purple-100 dark:bg-purple-900"
                          : "bg-orange-100 dark:bg-orange-900"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index === 0
                            ? "text-blue-600 dark:text-blue-300"
                            : index === 1
                            ? "text-green-600 dark:text-green-300"
                            : index === 2
                            ? "text-purple-600 dark:text-purple-300"
                            : "text-orange-600 dark:text-orange-300"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {index === 0 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        ) : index === 1 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        ) : index === 2 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career Section */}
          <section id="career" className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold">지금까지의 여정</h2>
            <div className="flex flex-col space-y-6">
              <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 dark:text-indigo-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      휴레이포지티브
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2022.02 ~ 현재
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      역할
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {`인하우스 서비스와 백오피스의 프론트엔드 개발을 리딩하였습니다.

                      디자인 시스템 구축과 효과적인 상태 관리와 API 호출 관리 등
                      사용자 경험 개선과 성능 최적화를 통해 비즈니스 가치를 향상시켰습니다.

                      개발자 사이의 소통 뿐만 아니라 비개발자와의 소통에서 지식을 공유하고 이해하며
                      원활한 커뮤니케이션을 통해 함께 일하기 좋은 팀원으로 평가 받았습니다.`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm font-medium text-indigo-800 dark:text-indigo-200">
                      프론트엔드 리드
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm font-medium text-indigo-800 dark:text-indigo-200">
                      디자인 시스템
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm font-medium text-indigo-800 dark:text-indigo-200">
                      성능 최적화
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm font-medium text-indigo-800 dark:text-indigo-200">
                      실시간 시스템
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {`네이버 커넥트재단 - 부스트캠프`}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2021.07 ~ 2021.12
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      성과
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {`웹 개발 프로세스와 기초 지식에 대한 이해를 하였습니다.

                      웹 개발에 필요한 JS 언어 기반의 기초 지식을 학습하고,
                      팀 프로젝트를 통해 실무 경험을 쌓았습니다.

                      다양한 프로젝트 경험을 통해 협업 능력과 문제 해결 능력을 향상시켰습니다.`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                      웹 개발자 양성
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                      팀 프로젝트
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                      협업 경험
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold">주요 프로젝트</h2>
            <div className="space-y-10">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="border rounded-2xl p-8 bg-gray-50 dark:bg-gray-800 shadow-md space-y-4"
                >
                  <h3 className="text-2xl font-bold text-blue-600">
                    {project.title}
                  </h3>
                  <p>
                    <strong>주요 기능 및 특징</strong>
                    <br />
                    {project.features}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(", ").map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p>
                    <strong>기여도</strong>
                    <br />
                    {project.contribution}
                  </p>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg space-y-2">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">
                      트러블 슈팅
                    </p>
                    <p>
                      <strong>문제</strong>
                      <br />
                      {project.troubleshooting.problem}
                    </p>
                    <p>
                      <strong>해결</strong>
                      <br />
                      {project.troubleshooting.solution}
                    </p>
                    <p>
                      <strong>결과</strong>
                      <br />
                      {project.troubleshooting.result}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer
            id="contact"
            className="mt-24 py-12 border-t border-gray-200 dark:border-gray-700 text-sm flex flex-col gap-8 text-gray-500 dark:text-gray-400"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex space-x-4">
                <a
                  href="mailto:dltkdtn56@naver.com"
                  className="hover:text-blue-500"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/LeeKwang-min"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  GitHub
                </a>
                <a
                  href="https://kwangbong.tistory.com/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  Blog
                </a>
                <a
                  href="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-center text-xs">
                © {new Date().getFullYear()} Kwangmin Lee. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
