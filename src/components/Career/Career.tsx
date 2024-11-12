import { FaHistory } from "react-icons/fa";
import Section from "../Common/Section";
import CareerItem from "./CareerItem";
import HurayLogo from "../../../public/huraylogo.png";

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
          "기획, 디자인, 개발 진행, react-hook-form 도입, 이벤트 최적화",
      },
      {
        title: "헬스케어 서비스 어드민",
        period: "2022.10 - 2023.12",
        description: "프로젝트 리딩, 리렌더링 최적화, 공통 차트/모달 개발",
      },
      {
        title: "질병 예측 서비스",
        period: "2022.06 - 2022.10",
        description:
          "API 호출 코드 개선, Sentry 도입, 다국어 처리, 크로스 플랫폼 지원",
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
