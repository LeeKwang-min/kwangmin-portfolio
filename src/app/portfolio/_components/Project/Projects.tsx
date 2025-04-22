import { FaLightbulb } from "react-icons/fa";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import PullogLogo from "@/../public/assets/pulloglogo.png";
import BGImg from "@/../public/assets/bg.jpeg";

const projects = [
  {
    title: "Pullog",
    shortDescription: "턱걸이 기록 서비스",
    image: PullogLogo,
    period: "2024.09",
    subtitle: "Pullup + Log = Pullog",
    description: [
      "기획, 디자인, 프론트, 백엔드 1인 개발",
      "개발자가 된 이유를 기억하기 위해 시작한 프로젝트",
      "PWA 적용 / SEO 최적화",
      "History API 최적화",
      "입력 방식 최적화",
      "API 호출 최적화",
      "꾸준한 운영과 개선 포스팅 진행중",
    ],
    gitUrl: "https://github.com/LeeKwang-min/pullog",
    serviceUrl: "https://pullog.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Kwangmin's Portfolio",
    shortDescription: "포트폴리오 웹사이트",
    image: BGImg,
    period: "2022.11",
    subtitle: "나를 소개하기 위한 포트폴리오 웹 사이트",
    description: [
      "기획, 디자인, 프론트 1인 개발",
      '유저 인터랙션을 중요시하는 "나"를 소개하는 웹사이트',
      "흥미를 끌 수 있는 다양한 애니메이션 적용",
    ],
    gitUrl: "https://github.com/LeeKwang-min/kwangmin-portfolio",
    serviceUrl: "https://kwangmin-portfolio.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      title="PROJECTS"
      icon={<FaLightbulb />}
      bgColor="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
