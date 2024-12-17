import React from "react";
import Image from "next/image";
import { FaEnvelope, FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";
import LKM from "@/../public/assets/lkm.png";

const informationList = [
  {
    icon: <FaEnvelope />,
    title: "dltkdtn56@naver.com",
    href: "mailto:dltkdtn56@naver.com",
  },
  {
    icon: <FaBlog />,
    title: "kwangbong.tistory.com",
    href: "https://kwangbong.tistory.com/",
  },
  {
    icon: <FaGithub />,
    title: "github.com/LeeKwang-min",
    href: "https://github.com/LeeKwang-min",
  },
  {
    icon: <FaLinkedin />,
    title: "링크드인",
    href: "https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/",
  },
];

function Information() {
  return (
    <section className="mb-12 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-64 h-64 mb-4 md:mb-0 md:mr-8 relative">
        <Image
          src={LKM}
          alt="Profile"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-10 text-gray-800">이광민</h1>
        <div className="space-y-4">
          {informationList.map((item) => (
            <p key={item.title} className="flex items-center gap-2">
              {item.icon}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Information;
