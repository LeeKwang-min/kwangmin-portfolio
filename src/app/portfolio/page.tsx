"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// 프로젝트 타입 정의
interface TroubleshootingItem {
  problem: string;
  solution: string;
  result: string;
}

interface Project {
  title: string;
  features: string;
  techStack: string;
  contribution: string[];
  troubleshooting: TroubleshootingItem[];
  period: string;
  image?: string;
  link?: string;
}

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

const projects: Project[] = [
  {
    title: "Kooks - Custom Hooks 라이브러리 (Side)",
    features:
      "Next.js 기반 프로젝트에서 반복적으로 사용하는 로직을 표준화하여 재사용 하기 위한 Custom Hooks 라이브러리입니다.",
    techStack: "Next.js, React, TypeScript, NPM",
    contribution: [
      "자주 사용하는 로직을 Custom Hook 형태로 정리하여 모듈화 하는 중입니다.",
      "코드를 최적화하고 번들링하여 NPM 패키지로 배포했습니다.",
      "공식 문서 사이트를 제작해 사용 방법을 명확하게 안내하고, 오픈 소스 관리 경험을 쌓았습니다.",
    ],
    troubleshooting: [
      {
        problem:
          "개인 프로젝트와 회사 프로젝트에서 유사한 로직이 반복 작성되는 것을 확인했습니다.",
        solution:
          "Custom Hook을 라이브러리 형태로 정리하여 재사용성을 높이고, 프로젝트 개발 생산성을 향상시키고자 하였습니다.",
        result:
          "완성 된다면 반복 로직 작성 시간을 단축하고, 코드 품질과 일관성을 높일 것으로 기대됩니다.",
      },
    ],
    period: "2024.03 ~ 진행중",
    image: "/assets/kooks_web.png",
    link: "https://kooks-web.vercel.app/",
  },
  {
    title: "인하우스 통합 대시보드/리포트 (Company)",
    features:
      "3개의 인하우스 서비스 데이터를 통합하여, 차트를 활용한 대시보드 및 리포트 형태로 시각화하는 서비스입니다.",
    techStack:
      "Next.js, React, Tanstack Query, Tailwind CSS, Zustand, Shadcn UI, Recharts",
    contribution: [
      "대시보드와 리포트 화면을 구현하고, 사용자가 차트를 자유롭게 정렬할 수 있는 DnD 기능을 개발했습니다.",
      "공통 UI 컴포넌트를 설계해 디자인 시스템을 구축하고, 반복되는 개발 작업을 줄여 협업 생산성을 높였습니다.",
      "각 페이지 특성에 따라 SSR, SSG, ISR, CSR 전략을 적절히 조합하여 초기 로딩 속도를 최적화했습니다.",
    ],
    troubleshooting: [
      {
        problem:
          "다수의 데이터 의존성으로 인해 페이지 렌더링 속도가 느려지는 문제가 발생했습니다.",
        solution:
          "Tanstack Query의 캐싱 전략을 적용하여 서버 부하를 줄이고 성능을 개선했습니다.",
        result:
          "사용자 이탈률을 감소시키고, 시스템 전반의 응답성을 향상시켰습니다.",
      },
      {
        problem:
          "공통 컴포넌트 부재로 인해 UI 일관성과 유지보수성이 떨어지는 문제가 발생했습니다.",
        solution:
          "Shadcn UI를 기반으로 커스텀 디자인 시스템을 구축하여 공통 컴포넌트를 표준화했습니다.",
        result:
          "UI 품질을 향상시키고, 개발 생산성과 협업 효율을 크게 높였습니다.",
      },
    ],
    period: "2025.04 ~ 진행 중",
  },
  {
    title: "라이프로그 통합 관리 백오피스 (Company)",
    features:
      "사용자의 다양한 라이프로그 데이터를 통합 관리하고, 이를 기반으로 코칭 및 미디어 콘텐츠를 생성하는 내부 백오피스입니다.",
    techStack:
      "Next.js, React, Tanstack Query, Tailwind CSS, Recoil, Shadcn UI",
    contribution: [
      "데이터 조작 시 체감 속도를 개선하기 위해 낙관적 업데이트를 적용하여, 수정/삭제 후 즉시 화면에 반영되는 부드러운 UX를 구현했습니다.",
      "데이터가 많은 페이지는 Lazy Loading을 적용해 초기 로딩 시간을 줄였고, 사용자 경험을 자연스럽게 개선했습니다.",
      "Jira 기반 이슈 관리를 도입해 비개발 부서와도 명확한 일정 공유와 효율적인 협업이 가능하도록 했습니다.",
    ],
    troubleshooting: [
      {
        problem:
          "테이블 재조회 시 체감 응답 속도가 느려지는 문제가 발생했습니다.",
        solution:
          "Tanstack Query의 낙관적 업데이트 기능(onMutate, onError, onSettled)을 적용하여 즉각 반영 및 롤백 처리를 구현했습니다.",
        result: "빠른 조작 응답과 안정적인 데이터 정합성을 모두 확보했습니다.",
      },
      {
        problem: "초기 페이지 로딩이 과도하게 오래 걸리는 문제가 발생했습니다.",
        solution:
          "데이터 의존적인 영역에 Lazy Loading을 적용하여 별도 컴포넌트로 로딩하도록 최적화했습니다.",
        result:
          "체감 로딩 시간을 5초에서 1초로 대폭 단축하며 사용자 만족도를 높였습니다.",
      },
    ],
    period: "2024.01 ~ 2024.12",
  },
  {
    title: "검진 대행 서비스 (Company)",
    features:
      "직원용 건강검진 예약과 결과 확인을 지원하는 서비스로, 모바일과 데스크탑 모두 최적화된 경험을 제공합니다.",
    techStack:
      "Next.js, React, Tanstack Query, Tailwind CSS, Recoil, Shadcn UI",
    contribution: [
      "병원 필터 조회 기능을 최적화하여 사용자가 빠르게 검색할 수 있도록 개선했습니다.",
      "추천 검색어 입력 시 서버 부하를 줄이기 위해 Debounce 처리를 적용했습니다.",
      "필터와 정렬 조건을 쿼리 파라미터로 관리하여, 페이지 이동이나 재접속 시에도 일관된 검색 조건이 유지되도록 구현했습니다.",
    ],
    troubleshooting: [
      {
        problem:
          "병원 필터 조회 시 평균 5초 이상 소요되는 문제가 발생했습니다.",
        solution:
          "Tanstack Query 캐싱 전략과 queryKey 분리를 통해 조건별로 캐시를 관리했습니다.",
        result: "API 호출 수를 대폭 줄이고 빠른 필터 조회 속도를 제공했습니다.",
      },
      {
        problem:
          "추천 검색어 입력 시 매 타이핑마다 API 호출이 발생해 서버 부하가 증가하는 문제가 있었습니다.",
        solution:
          "Debounce 기법을 적용하여 일정 시간 이후에만 호출이 발생하도록 최적화했습니다.",
        result:
          "서버 비용 약 30% 절감 및 입력 반응 속도 개선 효과를 얻었습니다.",
      },
      {
        problem:
          "페이지 이동이나 새로고침 시 필터 조건이 초기화되는 문제가 발생했습니다.",
        solution:
          "쿼리 파라미터를 활용하여 필터 및 정렬 상태를 URL에 반영하도록 처리했습니다.",
        result:
          "조건 재설정 없이 검색 조건이 유지되어 사용자 편의성이 크게 향상되었습니다.",
      },
    ],
    period: "2024.12 ~ 2025.04",
  },
  {
    title: "Pullog - 풀업 기록 관리 서비스 (Side)",
    features:
      "개인 운동 기록을 관리하고, 성취 과정을 시각적으로 분석할 수 있도록 만든 풀업(턱걸이) 기록 관리 웹 애플리케이션입니다.",
    techStack: "Next.js, React, Supabase, Tailwind CSS, PWA",
    contribution: [
      "운동 기록 입력, 수정, 삭제 기능을 구현하고 Supabase를 활용해 인증 및 데이터 관리를 처리했습니다.",
      "SEO 최적화를 통해 구글 검색 결과 1페이지 노출을 달성했습니다.",
      "PWA 기능을 적용하여 모바일 홈 화면에서 앱처럼 사용할 수 있도록 최적화했습니다.",
      "반응형 디자인을 적용해 다양한 디바이스에서 일관된 사용자 경험을 제공했습니다.",
    ],
    troubleshooting: [
      {
        problem:
          "인증/인가 및 데이터 관리를 안정적으로 처리할 백엔드 환경이 필요한 상황이었습니다.",
        solution:
          "Supabase를 도입하여 인증, 권한 관리, 데이터베이스 연동을 손쉽게 구축했습니다.",
        result:
          "짧은 개발 기간 안에 백엔드 기능을 안정적으로 구현하고 서비스 런칭에 성공했습니다.",
      },
      {
        problem:
          "검색 엔진 최적화(SEO)가 부족하여 구글 검색시 서비스 노출이 되지 않았습니다.",
        solution:
          "메타 태그 최적화와 웹 표준 준수 등의 SEO 최적화 작업을 진행했습니다.",
        result:
          "구글 검색 결과 1페이지 노출 및 신규 사용자 유입 증가를 달성했습니다.",
      },
    ],
    period: "2024.02 ~ 2024.03",
    image: "/assets/pullog.png",
    link: "https://pullog.vercel.app/",
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
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">주요 프로젝트</h2>
              <a
                href="/resume"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm"
              >
                <span>모든 프로젝트</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-10">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="border rounded-2xl p-8 bg-gray-50 dark:bg-gray-800 shadow-md space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-blue-600">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 hover:underline text-black font-medium rounded-lg transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <span>사이트 방문</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p>
                    <strong>프로젝트 소개</strong>
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
                  <div className="flex justify-center">
                    {project.image && (
                      <div className="w-[70%] overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={project.image}
                          alt={`${project.title} 이미지`}
                          className="w-full h-auto object-cover"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    )}
                  </div>
                  <span className="flex flex-col gap-2">
                    <strong>기여도</strong>
                    <ul className="list-disc list-inside pl-2">
                      {project.contribution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </span>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg space-y-4">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">
                      트러블 슈팅
                    </p>
                    <ul className="space-y-6 list-none">
                      {project.troubleshooting.map((item, index) => (
                        <li
                          key={index}
                          className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                              문제 상황
                            </p>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 pl-5">
                            {item.problem}
                          </p>
                          <div className="flex items-center gap-2 mt-4 mb-2">
                            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                              해결 방법
                            </p>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 pl-5">
                            {item.solution}
                          </p>
                          <div className="flex items-center gap-2 mt-4 mb-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                              개선 결과
                            </p>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 pl-5">
                            {item.result}
                          </p>
                        </li>
                      ))}
                    </ul>
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
