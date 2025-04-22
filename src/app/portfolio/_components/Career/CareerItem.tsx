import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PiProjectorScreenChartThin } from "react-icons/pi";

interface ICareerItemProps {
  company: {
    name: string;
    logo: StaticImageData;
    period: string;
    position: string;
    responsibilities: string;
    description: string;
    projects: {
      title: string;
      period: string;
      description: string;
    }[];
  };
}

function CareerItem({ company }: ICareerItemProps) {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-start gap-3 md:gap-20 md:flex-row">
      <div className="flex items-center mb-4 gap-10">
        <div className="w-40 h-40 rounded-full relative border mx-auto">
          <Image
            src={company.logo}
            alt={company.name}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex flex-col border-l pl-5 md:pl-20">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
          <p className="text-gray-400 text-sm">{company.period}</p>
          <p className="text-gray-500 text-sm">{company.description}</p>
        </div>
        <div className="flex flex-col md:items-center gap-2 mb-10 md:flex-row">
          <span className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm w-fit">
            Next.js 개발
          </span>
          <span className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm w-fit">
            프로젝트 리딩
          </span>
          <span className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm w-fit">
            최적화
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="list-disc list-inside text-gray-600">
            {company.projects.map((project, index) => (
              <li
                key={index}
                className={cn(
                  "mb-2 flex flex-col border-b py-2",
                  index === company.projects.length - 1 && "border-b-0"
                )}
              >
                <strong className="flex items-center gap-2">
                  <PiProjectorScreenChartThin />
                  {project.title}
                </strong>
                <p className="text-gray-400 text-sm">{project.period}</p>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerItem;
