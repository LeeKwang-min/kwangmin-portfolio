interface IInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoItem({ icon, label, value }: IInfoItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-2xl text-gray-600">{icon}</div>
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}

export default InfoItem;
