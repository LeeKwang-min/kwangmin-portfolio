import {
  BookMarked,
  ChevronRight,
  Paintbrush,
  Server,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";
// import Image from "next/image";
// import LKM from "@/../public/assets/lkm.jpeg";

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
];

const skillList = [
  {
    icon: <Settings color="#B2B2B2" size={16} />,
    title:
      "Next.js, TypeScript, React, Next-Auth, Recoil, Tanstack-Query, React-Hook-Form",
  },
  {
    icon: <Server color="#B2B2B2" size={16} />,
    title: "Supabase, Node.js, Docker, Vercel",
  },
  {
    icon: <Paintbrush color="#B2B2B2" size={16} />,
    title: "Tailwind CSS, Shadcn UI, Recharts, Chart.js",
  },
  {
    icon: <BookMarked color="#B2B2B2" size={16} />,
    title: "Git, Jira, Confluence, Figma",
  },
];

function Information() {
  return (
    <section className="mb-4 flex flex-col md:flex-row items-end md:items-end pb-20">
      {/* <div className="w-52 h-52 mb-4 md:mb-0 md:mr-8 relative">
        <Image
          src={LKM}
          alt="Profile"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div> */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold pb-2">이광민</h1>
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
        <div className="space-y-4 flex flex-col justify-end">
          {skillList.map((item) => (
            <span key={item.title} className="flex items-center gap-2">
              {item.icon}
              <p className="text-sm text-[#1E1E1E] flex items-center">
                {item.title}
              </p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Information;
