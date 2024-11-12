"use client";

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

export default useTypewriter;
