import {
  FaBriefcase,
  FaBullseye,
  FaEnvelope,
  FaGraduationCap,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import Section from "../Common/Section";
import InfoItem from "./InfoItem";

function About() {
  return (
    <Section id="about" title="ABOUT ME" icon={<FaUser />} bgColor="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 pl-20">
          <InfoItem icon={<FaUser />} label="이름" value="이광민" />
          <InfoItem
            icon={<FaGraduationCap />}
            label="학력"
            value="영남대학교 컴퓨터공학과"
          />
        </div>
        <div className="flex flex-col gap-4 pl-20">
          <InfoItem
            icon={<FaEnvelope />}
            label="이메일"
            value="dltkdtn56@naver.com"
          />

          <InfoItem
            icon={<FaHeart />}
            label="목표"
            value="말 걸기 편한 개발자"
          />
        </div>
        <div className="flex flex-col gap-4 pl-20">
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
        </div>
      </div>
    </Section>
  );
}

export default About;
