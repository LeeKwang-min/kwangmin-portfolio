const othenExperienceList = [
  {
    company: "개인 프로젝트",
    position: "1인 기획 및 백엔드 경험이 목표",
    period: "",
    description: "",
    tasks: [
      "백엔드부터 프론트엔드까지 풀스택 개발 경험",
      "'서비스' 도메인에 대한 경험과 사고",
      "Next.js를 활용한 SEO 최적화 및 성능 향상",
      "PWA를 적용한 서비스 출시",
      "반응형 디자인 적용",
    ],
    projects: [
      {
        title: "Pullog - 풀업 기록 관리 분석 서비스",
        URL: "https://pullog.vercel.app/",
        tasks: [
          "Next.js를 활용한 SEO 최적화/향상",
          "Supabase를 활용하여 인증/인가 부터 데이터 관리의 백엔드 포지션 경험",
          "PWA를 적용하여 웹 앱 출시, 접속에 용이한 서비스 제공",
          "반응형 디자인을 적용하여 데스크톱, 모바일 환경 모두 익숙한 사용자 경험 제공",
          "내가 좋아하는 도메인을 이해하고 기획하여 서비스 출시",
        ],
        stacks: [
          "Next.js, TypeScript, Supabase, Shadcn UI, TailwindCSS, Recharts",
        ],
      },
    ],
  },
];

function OtherExperience() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
        ADDITIONAL EXPERIENCES
      </h2>
      <div className="space-y-8">
        {othenExperienceList.map((item) => (
          <div key={item.company} className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-700">
                {item.company}
              </h3>
              <p className="text-gray-600">{item.period}</p>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  {item.position}
                </h4>
                <p className="mb-2">{item.description}</p>
                {/* <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  주요 내용
                </h5>
                <ul className="mb-2 flex flex-col gap-2 pb-4">
                  {item.tasks.map((task) => (
                    <li key={task}>{`- ${task}`}</li>
                  ))}
                </ul> */}
                {item.projects.map((project) => (
                  <div key={project.title} className="border-b-2 py-6">
                    <h5 className="text-lg font-semibold text-gray-600">
                      {project.title}
                    </h5>
                    <span className="text-sm text-blue-500">
                      {project.URL && (
                        <a
                          href={project.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.URL}
                        </a>
                      )}
                    </span>
                    <ul className="list-disc list-inside my-2 leading-8">
                      {project.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <h5 className="text-lg font-semibold text-gray-600 mb-2">
                      기술 스택
                    </h5>
                    <p className="text-sm text-gray-600">
                      {project.stacks?.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherExperience;
