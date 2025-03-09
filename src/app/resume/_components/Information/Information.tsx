import { ChevronRight, Paintbrush, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
// import Image from "next/image";
import { FaEnvelope, FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";
// import LKM from "@/../public/assets/lkm.png";

const informationList = [
  {
    icon: <FaEnvelope color="#B2B2B2" />,
    title: "dltkdtn56@naver.com",
    href: "mailto:dltkdtn56@naver.com",
  },
  {
    icon: <FaBlog color="#B2B2B2" />,
    title: "kwangbong.tistory.com",
    href: "https://kwangbong.tistory.com/",
  },
  {
    icon: <FaGithub color="#B2B2B2" />,
    title: "github.com/LeeKwang-min",
    href: "https://github.com/LeeKwang-min",
  },
  {
    icon: <FaLinkedin color="#B2B2B2" />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/",
  },
  {
    icon: <Settings color="#B2B2B2" size={16} />,
    title:
      "Next.js, TypeScript, React, Next-Auth, Recoil, Tanstack-Query, React-Hook-Form",
    href: "",
  },
  {
    icon: <Paintbrush color="#B2B2B2" size={16} />,
    title: "Tailwind CSS, Shadcn UI, Recharts, Chart.js",
    href: "",
  },
];

function Information() {
  return (
    <section className="mb-4 flex flex-col md:flex-row items-center md:items-start border-b-[1.5px] border-[#E5E5E5] pb-4">
      {/* <div className="w-64 h-64 mb-4 md:mb-0 md:mr-8 relative">
        <Image
          src={LKM}
          alt="Profile"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div> */}
      <div>
        <h1 className="text-5xl font-bold mb-10 text-gray-800">이광민</h1>
        <div className="space-y-4">
          {informationList.map((item) => (
            <p key={item.title} className="flex items-center gap-2">
              {item.icon}
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm text-[#1E1E1E] flex items-center"
              >
                {item.title}{" "}
                {item.href && <ChevronRight size={14} color="#1E1E1E" />}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Information;
