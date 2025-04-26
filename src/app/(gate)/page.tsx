"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function useTypewriter(
  phrases: string[],
  typingSpeed = 120,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (text.length < phrases[phraseIndex].length) {
        timer = setTimeout(() => {
          setText(phrases[phraseIndex].slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isTyping,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return text;
}

function Gate() {
  const phrases = [
    "도메인에 관심을 가지고 이해하는 프론트엔드 개발자.",
    "꾸준함을 추구하는 프론트엔드 개발자.",
    "사용자 경험을 중시하는 프론트엔드 개발자.",
    "끊임 없이 고민하고 개선하는 프론트엔드 개발자.",
    "비즈니스와 사용자에게 가치를 제공하는 개발자.",
    "팀 리더로 적합한 프론트엔드 개발자.",
    "문제 해결 능력이 뛰어난 프론트엔드 개발자.",
    "팀의 신뢰를 가장 많이 받은 개발자.",
    "가장 책임감 있는 프론트엔드 개발자.",
    "팀과 회사에 실질적인 기여를 하는 개발자.",
  ];

  const text = useTypewriter(phrases);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div
        style={{ width: "720px", minWidth: "720px" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          이광민 | 프론트엔드 개발자
        </h1>
        <div className="terminal-container mb-12">
          <div className="terminal-header flex items-center bg-gray-700 rounded-t-lg px-4 py-2">
            <div className="terminal-buttons flex space-x-2">
              <div className="terminal-button bg-red-500 rounded-full w-3 h-3"></div>
              <div className="terminal-button bg-yellow-500 rounded-full w-3 h-3"></div>
              <div className="terminal-button bg-green-500 rounded-full w-3 h-3"></div>
            </div>
            <div className="terminal-title text-xs text-gray-300 ml-4">
              kwangmin@portfolio ~
            </div>
          </div>
          <div
            className="terminal-body bg-gray-800 rounded-b-lg p-6 flex flex-col items-start justify-start border border-gray-700"
            style={{ height: "400px" }}
          >
            <div className="terminal-content w-full space-y-2">
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">안녕하세요.</p>
              </div>
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  사용자 경험을 최우선으로 생각하는 웹 프론트엔드 개발자입니다.
                </p>
              </div>
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  비즈니스와 사용자에게 제공할 수 있는 가치를 중요하게
                  생각합니다.
                </p>
              </div>
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  성능 최적화 및 UX 개선으로 실제 사용자 만족과 비즈니스 성과를
                  창출합니다.
                </p>
              </div>
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  다양한 직군과의 원활한 협업으로 팀의 커뮤니케이션을
                  촉진합니다.
                </p>
              </div>
              <div className="terminal-line flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  지속적으로 성장하며 팀과 회사에 실질적인 기여를 하는
                  개발자입니다.
                </p>
              </div>
            </div>

            <div className="terminal-typing mt-auto w-full pt-4">
              <div className="terminal-prompt flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <p className="text-gray-300 font-mono text-base">
                  <span className="text-blue-400">{text}</span>
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>

            <div className="terminal-links mt-4 w-full border-t border-gray-700 pt-4">
              <div className="flex justify-end space-x-6">
                <a
                  href="https://github.com/LeeKwang-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <span className="mr-2">•</span>
                  <span className="font-mono text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <span className="mr-2">•</span>
                  <span className="font-mono text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ width: "720px" }}
        >
          <Link
            href="/resume"
            className="px-8 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors text-lg font-medium min-w-[200px] text-center"
          >
            이력서 보기
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors text-lg font-medium min-w-[200px] text-center"
          >
            포트폴리오 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gate;
