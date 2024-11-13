interface ISectionProps {
  id: string;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  bgColor: string;
  noCard?: boolean;
}

function Section({
  id,
  title,
  icon,
  children,
  bgColor,
  noCard = false,
}: ISectionProps) {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="flex items-center justify-center gap-3 mb-12">
            {icon && <span className="text-3xl text-gray-700">{icon}</span>}
            <h2 className="text-3xl font-bold text-center uppercase">
              {title}
            </h2>
          </div>
        )}
        {noCard ? (
          children
        ) : (
          <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-gray-100">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
