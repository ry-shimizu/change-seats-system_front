import Link from "next/link";
import { IconType } from "react-icons";

export default function SideBarLink({
  IconItem,
  item,
  path,
}: {
  IconItem: IconType;
  item: string;
  path: string;
}) {
  return (
    <Link href={path} className="w-full h-full">
      <li className={`flex mt-3 p-4 items-center hover:bg-blue-100 hover:text-blue-400 rounded-xl`}>
        <IconItem size="1.25rem" />
        <span className="ml-2">{item}</span>
      </li>
    </Link>
  );
}
