import React from "react";

function Work() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
        ADDITIONAL EXPERIENCES
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-700">교육</h3>
          <p>
            네이버 커넥트재단 부스트캠프 웹・모바일 6기 수료 (2021.07 - 2021.12)
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>웹 풀스택 개발 과정 이수</li>
            <li>팀 프로젝트 경험을 통한 협업 능력 향상</li>
            <li>최신 웹 기술 스택 학습 및 실제 프로젝트 적용</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-700">블로그</h3>
          <p>기술 블로그 운영: 주 1회 새로운 기술 및 개발 경험 공유</p>
          <ul className="list-disc list-inside mt-2">
            <li>최신 프론트엔드 기술 트렌드 분석 및 공유</li>
            <li>개인 프로젝트 개발 과정 및 학습 내용 기록</li>
            <li>독자와의 소통을 통한 지식 공유 및 피드백 수렴</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-700">학력</h3>
          <p>OO대학교 컴퓨터공학과 졸업 (2016.03 - 2020.02)</p>
          <ul className="list-disc list-inside mt-2">
            <li>자료구조, 알고리즘, 운영체제 등 CS 기초 학습</li>
            <li>졸업 프로젝트: IoT 기반 스마트홈 시스템 개발</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
