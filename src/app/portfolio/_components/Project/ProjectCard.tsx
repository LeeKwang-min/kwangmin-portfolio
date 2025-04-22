"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ShortcutButton from "./ShortcutButton";
import { GitBranch, Wrench } from "lucide-react";

interface IProjectCardProps {
  project: {
    title: string;
    shortDescription: string;
    image: StaticImageData;
    period: string;
    subtitle: string;
    description: string[];
    gitUrl: string;
    serviceUrl: string;
    technologies: string[];
  };
  initialFlipped?: boolean;
}

function ProjectCard({ project, initialFlipped = false }: IProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(initialFlipped);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-96"
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
      }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {!isFlipped ? (
        <div className="h-full bg-cover bg-center flex items-center justify-center p-6 text-center relative">
          <Image
            src={project.image}
            alt="프로젝트 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="bg-black bg-opacity-50 p-6 rounded-lg z-30">
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-white text-lg">{project.shortDescription}</p>
          </div>
        </div>
      ) : (
        <div
          className="h-full p-6 flex flex-col justify-between bg-gray-50"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{project.period}</p>
            <h4 className="font-semibold mb-3 text-gray-700">
              {project.subtitle}
            </h4>
            <ul className="list-disc list-inside text-sm mb-4 text-gray-600">
              {project.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm mb-4">
              <strong>기술:</strong> {project.technologies.join(", ")}
            </p>
            <div className="flex items-center gap-4">
              <ShortcutButton
                icon={<Wrench className="h-5 w-5" />}
                label="Service"
                href={project.serviceUrl}
              />
              <ShortcutButton
                icon={<GitBranch className="h-5 w-5" />}
                label="Git"
                href={project.gitUrl}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectCard;
