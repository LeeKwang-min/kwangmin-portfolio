import Link from "next/link";

const resumeUrl = "https://kwangmin-portfolio.vercel.app/resume";
const portfolioUrl = "https://kwangmin-portfolio.vercel.app";

function PdfHeader() {
  return (
    <div className="w-full border-b-2 border-black p-4 flex flex-col gap-2 justify-center items-center">
      <span className="text-sm">
        해당 문서는 Vercel을 통해 배포되어 있으며 가능하다면 웹 서비스로
        접속하여 확인을 부탁드리겠습니다.
      </span>

      <div className="flex items-center gap-2">
        <span>이력서: </span>
        <Link href={resumeUrl}>{resumeUrl}</Link>
      </div>
      <div className="flex items-center gap-2">
        <span>포트폴리오: </span>
        <Link href={portfolioUrl}>{portfolioUrl}</Link>
      </div>
    </div>
  );
}

export default PdfHeader;
