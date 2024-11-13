import React from "react";

function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
        WORK EXPERIENCE
      </h2>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700">
              휴레이포지티브
            </h3>
            <p className="text-gray-600">2022.02 - 현재</p>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border-l-4 border-gray-200 pl-4">
              <h4 className="text-xl font-semibold text-gray-700">
                프론트엔드 개발자
              </h4>
              <p className="mb-2">최신 기술을 활용한 혁신적인 웹 서비스 개발</p>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                주요 업무
              </h5>
              <ul className="list-disc list-inside mb-2">
                <li>웹 애플리케이션 개발 및 유지보수</li>
                <li>사용자 경험 개선 및 성능 최적화</li>
                <li>대시보드 리뉴얼 프로젝트 주도 (2022.01 - 2022.06)</li>
              </ul>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                프로젝트: 대시보드 리뉴얼
              </h5>
              <ul className="list-disc list-inside mb-2">
                <li>반응형 UI 구현</li>
                <li>데이터 시각화 컴포넌트 개발</li>
                <li>성능 최적화로 로딩 시간 20% 감소</li>
              </ul>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                사용 기술
              </h5>
              <p className="text-sm text-gray-600">
                React, TypeScript, Next.js, Recoil, Tanstack-Query,
                React-Hook-Form, Tailwind CSS
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
                개인 블로그 플랫폼
              </h4>
              <p className="text-gray-600 mb-2">2023.03 - 2023.05</p>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                프로젝트 개요
              </h5>
              <p className="mb-2">Next.js를 활용한 개인 블로그 플랫폼 개발</p>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                주요 기능
              </h5>
              <ul className="list-disc list-inside mb-2">
                <li>SSR을 활용한 SEO 최적화</li>
                <li>마크다운 에디터 구현</li>
                <li>댓글 시스템 개발</li>
                <li>반응형 디자인 적용</li>
              </ul>
              <h5 className="text-lg font-semibold text-gray-600 mb-2">
                사용 기술
              </h5>
              <p className="text-sm text-gray-600">
                Next.js, TypeScript, MongoDB, TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
