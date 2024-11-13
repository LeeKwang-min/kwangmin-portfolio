import { FaHistory } from "react-icons/fa";
import Section from "../Common/Section";
import CareerItem from "./CareerItem";
import HurayLogo from "@/../../public/huraylogo.png";

const careers = [
  {
    name: "휴레이포지티브",
    logo: HurayLogo,
    period: "2022.02 ~ (재직중)",
    position: "프론트엔드 개발자",
    responsibilities: "웹 애플리케이션 개발 및 유지보수",
    description: "삶에 건강을 더하고, 가치를 더하는 디지털 헬스케어 플랫폼",
    projects: [
      {
        title: "프로토콜 어드민",
        period: "2023.12 - 진행중",
        description:
          "프로젝트 리딩(기획/디자인/개발), 유저 친화적인 API 호출 방식 채택",
      },
      {
        title: "헬스케어 서비스 어드민",
        period: "2022.10 - 2023.12",
        description: "프로젝트 리딩, 공통 모달 개발, Chart.js 모듈화",
      },
      {
        title: "질병 예측 서비스",
        period: "2022.06 - 2022.10",
        description: "Sentry 도입, 다국어 처리, 크로스 플랫폼 지원",
      },
      // 추가 프로젝트...
    ],
  },
];

function Career() {
  return (
    <Section id="career" title="CAREER" icon={<FaHistory />} bgColor="bg-white">
      {careers.map((company, index) => (
        <CareerItem key={index} company={company} />
      ))}
    </Section>
  );
}

export default Career;
