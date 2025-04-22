interface ISkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

function SkillCategory({ title, skills, icon }: ISkillCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
