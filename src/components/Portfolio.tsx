"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaBlog,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
  FaHeart,
  FaLink,
  FaCode,
  FaLightbulb,
  FaHistory,
  FaHome,
  FaBars,
  FaArrowUp,
  FaDesktop,
  FaServer,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

interface IHeaderProps {
  scrollTo: (_: string) => void;
}

const Header = ({ scrollTo }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Intro", icon: <FaHome />, href: "intro" },
    { name: "About", icon: <FaUser />, href: "about" },
    { name: "Skills", icon: <FaCode />, href: "skills" },
    { name: "Links", icon: <FaLink />, href: "links" },
    { name: "Projects", icon: <FaLightbulb />, href: "projects" },
    { name: "Career", icon: <FaBriefcase />, href: "career" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="md:hidden">{`LKM's`}</span>
            <span className="hidden md:inline">{`Kwangmin's 포트폴리오`}</span>
          </h1>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollTo(item.href);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100 transition-colors duration-300 flex items-center"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

interface ISectionProps {
  id: string;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  bgColor: string;
  noCard?: boolean;
}

const Section = ({
  id,
  title,
  icon,
  children,
  bgColor,
  noCard = false,
}: ISectionProps) => (
  <section id={id} className={`py-20 ${bgColor}`}>
    <div className="container mx-auto px-6">
      {title && (
        <div className="flex items-center justify-center gap-3 mb-12">
          {icon && <span className="text-3xl text-gray-700">{icon}</span>}
          <h2 className="text-3xl font-bold text-center uppercase">{title}</h2>
        </div>
      )}
      {noCard ? (
        children
      ) : (
        <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-gray-100">
          {children}
        </div>
      )}
    </div>
  </section>
);

const Intro = () => (
  <Section id="intro" bgColor="bg-gray-50" noCard={true}>
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Kwangmin</h1>
      <h2 className="text-3xl mb-6 text-gray-600">프론트엔드 개발자</h2>
      <p className="text-xl text-gray-600">
        {`"꾸준함을 추구하는 프론트엔드 개발자"`}
      </p>
    </div>
  </Section>
);

interface IInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: IInfoItemProps) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="text-xl text-gray-600">{icon}</div>
    <div>
      <p className="font-medium text-gray-900">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const About = () => (
  <Section id="about" title="ABOUT ME" icon={<FaUser />} bgColor="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <InfoItem icon={<FaUser />} label="이름" value="이광민" />
        <InfoItem
          icon={<FaEnvelope />}
          label="이메일"
          value="dltkdtn56@naver.com"
        />
        <InfoItem
          icon={<FaGraduationCap />}
          label="학력"
          value="영남대학교 컴퓨터공학과 학사"
        />
      </div>
      <div>
        <InfoItem
          icon={<FaBriefcase />}
          label="경력"
          value="3년차 웹 프론트엔드 개발자"
        />
        <InfoItem
          icon={<FaBullseye />}
          label="관심 분야"
          value="사용자 경험 최적화, 성능 개선"
        />
        <InfoItem icon={<FaHeart />} label="목표" value="꾸준함" />
      </div>
    </div>
  </Section>
);

interface ISkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const SkillCategory = ({ title, skills, icon }: ISkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <Section id="skills" title="SKILLS" icon={<FaCode />} bgColor="bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SkillCategory
        title="언어"
        skills={["TypeScript", "JavaScript"]}
        icon={<FaCode />}
      />
      <SkillCategory
        title="프론트엔드"
        skills={[
          "Next.js",
          "React",
          "Recoil",
          "Tanstack-Query",
          "React-Hook-Form",
          "Tailwind CSS",
          "Sass",
          "HTML",
          "CSS",
        ]}
        icon={<FaDesktop />}
      />
      <SkillCategory
        title="백엔드"
        skills={["Node.js", "Supabase"]}
        icon={<FaServer />}
      />
      <SkillCategory
        title="DevOps"
        skills={["Vercel", "Git"]}
        icon={<FaTools />}
      />
    </div>
  </Section>
);

interface ILinkCardProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const LinkCard = ({ icon, title, url }: ILinkCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 hover:bg-gray-50"
  >
    <div className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
      {icon}
    </div>
    <span className="ml-3 text-lg font-medium text-gray-800">{title}</span>
  </a>
);

const Links = () => (
  <Section id="links" title="LINKS" icon={<FaLink />} bgColor="bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <LinkCard
        icon={<FaGithub size={24} />}
        title="GitHub"
        url="https://github.com/LeeKwang-min"
      />
      <LinkCard
        icon={<FaBlog size={24} />}
        title="Blog"
        url="https://kwangbong.tistory.com/"
      />
      <LinkCard
        icon={<FaLinkedin size={24} />}
        title="LinkedIn"
        url="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/"
      />
      <LinkCard
        icon={<FaInstagram size={24} />}
        title="Instagram"
        url="https://www.instagram.com/lee_kwangbong/"
      />
    </div>
  </Section>
);

interface IProjectCardProps {
  project: {
    title: string;
    shortDescription: string;
    image: string;
    period: string;
    subtitle: string;
    description: string[];
    url: string;
    technologies: string[];
  };
  initialFlipped?: boolean;
}

const ProjectCard = ({
  project,
  initialFlipped = false,
}: IProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(initialFlipped);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-96"
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
      }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {!isFlipped ? (
        <div
          className="h-full bg-cover bg-center flex items-center justify-center p-6 text-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-white text-lg">{project.shortDescription}</p>
          </div>
        </div>
      ) : (
        <div
          className="h-full p-6 flex flex-col justify-between bg-gray-50"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{project.period}</p>
            <h4 className="font-semibold mb-3 text-gray-700">
              {project.subtitle}
            </h4>
            <ul className="list-disc list-inside text-sm mb-4 text-gray-600">
              {project.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm mb-2">
              <strong>URL:</strong>{" "}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.url}
              </a>
            </p>
            <p className="text-sm">
              <strong>기술:</strong> {project.technologies.join(", ")}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "프로젝트 1",
      shortDescription: "간단한 설명",
      image: "/placeholder.svg?height=300&width=400",
      period: "2022.01 - 2022.06",
      subtitle: "혁신적인 웹 애플리케이션",
      description: [
        "사용자 경험 최적화",
        "성능 개선 20% 달성",
        "새로운 기능 구현",
      ],
      url: "https://project1.com",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "프로젝트 2",
      shortDescription: "두 번째 프로젝트",
      image: "/placeholder.svg?height=300&width=400",
      period: "2022.07 - 2022.12",
      subtitle: "데이터 시각화 대시보드",
      description: [
        "실시간 데이터 처리",
        "인터랙티브 차트 구현",
        "반응형 디자인 적용",
      ],
      url: "https://project2.com",
      technologies: ["Vue.js", "D3.js", "Firebase"],
    },
  ];

  return (
    <Section
      id="projects"
      title="PROJECTS"
      icon={<FaLightbulb />}
      bgColor="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            initialFlipped={index === 1}
          />
        ))}
      </div>
    </Section>
  );
};

interface ICareerItemProps {
  company: {
    name: string;
    logo: string;
    period: string;
    position: string;
    responsibilities: string;
    description: string;
    projects: {
      title: string;
      period: string;
      description: string;
    }[];
  };
}

const CareerItem = ({ company }: ICareerItemProps) => (
  <div className="mb-12 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
      <div className="flex items-center mb-4 md:mb-0 md:mr-6">
        <Image
          src={company.logo}
          alt={company.name}
          objectFit="cover"
          fill
          className="w-20 h-20 mr-6 rounded-full"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
          <p className="text-gray-600">{company.period}</p>
        </div>
      </div>
      <div className="md:ml-auto">
        <p className="mb-2">
          <strong>직책:</strong> {company.position}
        </p>
        <p>
          <strong>주요 업무:</strong> {company.responsibilities}
        </p>
      </div>
    </div>
    <p className="mb-6 text-gray-700">{company.description}</p>
    <div className="flex flex-col md:flex-row">
      <h4 className="font-semibold mb-3 md:mb-0 md:mr-4 text-gray-800">
        프로젝트
      </h4>
      <ul className="list-disc list-inside text-gray-600 md:ml-4">
        {company.projects.map((project, index) => (
          <li key={index} className="mb-2">
            <strong>{project.title}</strong> ({project.period}) -{" "}
            {project.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Career = () => {
  const careers = [
    {
      name: "테크 이노베이션",
      logo: "/placeholder.svg?height=100&width=100",
      period: "2020.07 - 현재",
      position: "프론트엔드 개발자",
      responsibilities: "웹 애플리케이션 개발 및 유지보수",
      description: "최신 기술을 활용한 혁신적인 웹 서비스 개발",
      projects: [
        {
          title: "대시보드 리뉴얼",
          period: "2022.01 - 2022.06",
          description: "사용자 경험 개선 및 성능 최적화",
        },
        // 추가 프로젝트...
      ],
    },
    // 추가 경력...
  ];

  return (
    <Section id="career" title="CAREER" icon={<FaHistory />} bgColor="bg-white">
      {careers.map((company, index) => (
        <CareerItem key={index} company={company} />
      ))}
    </Section>
  );
};

interface IEducationItemProps {
  institution: string;
  course: string;
  period: string;
}

const EducationItem = ({
  institution,
  course,
  period,
}: IEducationItemProps) => (
  <div className="mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col md:flex-row items-start md:items-center">
      <div className="mb-4 md:mb-0 md:mr-6">
        <h3 className="text-2xl font-bold text-gray-800">{course}</h3>
        <p className="text-gray-600">{period}</p>
      </div>
      <div className="md:ml-auto flex items-end">
        <p className="text-lg text-gray-700">{institution}</p>
      </div>
    </div>
  </div>
);

const Education = () => {
  const educations = [
    {
      institution: "네이버 커넥트재단",
      course: "부스트캠프 웹·모바일 6기",
      period: "2021.07 - 2021.12",
    },
  ];

  return (
    <Section
      id="education"
      title="EDUCATION"
      icon={<FaGraduationCap />}
      bgColor="bg-gray-50"
    >
      {educations.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </Section>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex items-center">
          <FaUser className="mr-2" />
          <p>LEE KWANGMIN</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" />
          <p>dltkdtn56@naver.com</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

function Portfolio() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header scrollTo={scrollTo} />
      <main className="pt-16">
        <Intro />
        <About />
        <Skills />
        <Links />
        <Projects />
        <Career />
        <Education />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Portfolio;
