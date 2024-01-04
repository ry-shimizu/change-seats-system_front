import Link from "next/link";
import { IconType } from "react-icons";

const SideBarLink = ({
  IconItem,
  item,
  mt,
  path,
}: {
  IconItem: IconType;
  item: string;
  mt: string;
  path: string;
}) => {
  return (
    <Link href={path} className="w-full h-full">
      <li
        className={`flex mt-${mt} p-4 items-center hover:bg-blue-100 hover:text-blue-400 rounded-xl`}
      >
        <IconItem size="1.25rem" />
        <span className="ml-2">{item}</span>
      </li>
    </Link>
  );
};

export default SideBarLink;
