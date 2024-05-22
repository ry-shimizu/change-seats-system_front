import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

export default function TopIconButton({
  iconItem,
  item,
  path,
}: {
  iconItem: string;
  item: String;
  path: string;
}) {
  return (
    <Link
      className={`border-2  rounded-xl w-1/4 p-4 m-4 shadow-xl
    duration-300 hover:scale-110 flex flex-col justify-center items-center`}
      href={path}
    >
      {iconItem === "PiChalkboardTeacherLight" && (
        <PiChalkboardTeacherLight size="6rem" color="#75A9FF" />
      )}
      {iconItem === "HiOutlineUserCircle" && <HiOutlineUserCircle size="6rem" color="#00BB00" />}
      {iconItem === "PiChalkboardTeacherFill" && (
        <PiChalkboardTeacherFill size="6rem" color="#FFA500" />
      )}
      <div className="text-sm font-semibold">{item}</div>
    </Link>
  );
}
