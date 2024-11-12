import Image from "next/image";
import TypeWriter from "./TypeWriter";
import BGImg from "@/../public/bg.jpeg";

const phrases = [
  "도메인에 관심을 가지고 이해하는 프론트엔드 개발자",
  "꾸준함을 추구하는 프론트엔드 개발자",
  "꾸준함에서 성장하는 프론트엔드 개발자",
  "사용자 경험을 중시하는 프론트엔드 개발자",
  "끊임 없이 고민하고 개선하는 프론트엔드 개발자",
  "소통하기 편한 프론트엔드 개발자",
];

function Intro() {
  return (
    <section
      id="intro"
      className="relative h-[60dvh] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        aria-hidden="true"
      >
        <Image
          src={BGImg}
          alt="인트로 배경 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">{`" 이광민 "`}</h1>
        <p className="text-xl text-gray-200 h-8">안녕하세요.</p>
        <p className="text-xl text-gray-200 h-12">
          프론트엔드 개발자 이광민입니다.
        </p>
        <TypeWriter phrases={phrases} />
      </div>
    </section>
  );
}

export default Intro;
