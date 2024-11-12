interface IEducationItemProps {
  institution: string;
  course: string;
  period: string;
}

function EducationItem({ institution, course, period }: IEducationItemProps) {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className="text-2xl font-bold text-gray-800">{course}</h3>
          <p className="text-gray-600">{period}</p>
        </div>
        <div className="md:ml-auto flex items-end">
          <p className="text-lg text-gray-700">{institution}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
