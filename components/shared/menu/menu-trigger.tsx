import { handleCommaPoint } from "@/util/price";
import Link from "next/link";

export interface MenuTriggerProps {
  type: "point" | "normal" | "lang" | "external";
  title: string;
  point?: number;
  link: string | null;
}

const MenuTrigger = ({ title, type, point, link }: MenuTriggerProps) => {
  if (type === "point") {
    return (
      <Link
        href={link ?? ""}
        className="flex items-center justify-between p-4 heading-5"
      >
        <span>{title}</span>
        <span className="text-primary">{handleCommaPoint(point || 0)}</span>
      </Link>
    );
  }

  if (type === "lang") {
    return (
      <p className="flex items-center justify-between p-4 heading-5">
        <span>{title}</span>
        <span className="text-primary">한국어</span>
      </p>
    );
  }
  return (
    <Link href={link ?? ""} target={type === "external" ? "_blank" : "_self"}>
      <p className="p-4 heading-5">{title}</p>
    </Link>
  );
};
export default MenuTrigger;
