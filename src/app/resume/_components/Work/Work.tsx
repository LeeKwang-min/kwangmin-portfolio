import React from "react";

const workList = [
  {
    title: "교육",
    description:
      "네이버 커넥트재단 부스트캠프 웹・모바일 6기 수료 (2021.07 - 2021.12)",
    tasks: [
      "웹 풀스택 개발 과정 이수",
      "팀 프로젝트 경험을 통한 협업 능력 향상",
      "최신 웹 기술 스택 학습 및 실제 프로젝트 적용",
      "피드백을 통한 개선 및 성능 향상",
    ],
  },
  {
    title: "블로그",
    description: "새로운 기술 및 개발 경험 공유",
    tasks: [
      "개인 프로젝트 개발 과정 및 학습 내용 기록",
      "개인 프로젝트 패치 노트 작성",
    ],
  },
];

function Work() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
        ADDITIONAL EXPERIENCES
      </h2>
      <div className="space-y-4">
        {workList.map((item) => (
          <div key={item.title}>
            <h3 className="text-2xl font-semibold text-gray-700">
              {item.title}
            </h3>
            <p>{item.description}</p>
            <ul className="list-disc list-inside mt-2">
              {item.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
