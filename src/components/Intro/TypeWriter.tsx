"use client";

import useTypewriter from "@/hooks/useTypewriter";

interface ITypeWriterProps {
  phrases: string[];
}

function TypeWriter({ phrases }: ITypeWriterProps) {
  const text = useTypewriter(phrases);

  return (
    <p className="text-xl text-gray-200 h-8">
      &ldquo;<span>{text}</span>&ldquo;
    </p>
  );
}

export default TypeWriter;
