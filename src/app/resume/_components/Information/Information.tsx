import React from "react";
import Image from "next/image";
import { FaEnvelope, FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";
import LKM from "@/../public/assets/lkm.png";

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
          <p className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:dltkdtn56@naver.com" className="hover:underline">
              {`dltkdtn56@naver.com`}
            </a>
          </p>
          <p className="flex items-center">
            <FaBlog className="mr-2" />
            <a
              href="https://kwangbong.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {`kwangbong.tistory.com`}
            </a>
          </p>
          <p className="flex items-center">
            <FaGithub className="mr-2" />
            <a
              href="https://github.com/LeeKwang-min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {`github.com/LeeKwang-min`}
            </a>
          </p>
          <p className="flex items-center">
            <FaLinkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Information;
