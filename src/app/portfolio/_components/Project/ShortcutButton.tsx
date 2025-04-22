import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ShortcutButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function ShortcutButton({ icon, label, href }: ShortcutButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="rounded-md px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
    >
      <Link href={href} className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{label}</span>
      </Link>
    </Button>
  );
}

export default ShortcutButton;
