import { FaGraduationCap } from "react-icons/fa";
import Section from "../Common/Section";
import EducationItem from "./EducationItem";

const educations = [
  {
    institution: "네이버 커넥트재단",
    course: "부스트캠프 웹·모바일 6기 수료",
    period: "2021.07 - 2021.12",
  },
];

function Education() {
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
}

export default Education;
