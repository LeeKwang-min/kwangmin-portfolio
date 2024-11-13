import { FaCode, FaDesktop, FaServer, FaTools } from "react-icons/fa";
import Section from "../Common/Section";
import SkillCategory from "./SkillCategory";

function Skills() {
  return (
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
}

export default Skills;
