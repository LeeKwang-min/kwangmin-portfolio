"use client";

import { useState } from "react";

interface ILinkCardProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

function LinkCard({ icon, title, url }: ILinkCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "flex items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 hover:bg-gray-50" +
        (isHover ? " transform scale-105" : "")
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
        {icon}
      </div>
      <span className="ml-3 text-lg font-medium text-gray-800">{title}</span>
    </a>
  );
}

export default LinkCard;
