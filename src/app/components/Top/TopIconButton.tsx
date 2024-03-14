"use client";
import { useRouter } from "next/navigation";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

export default function TopIconButton({
  iconItem,
  item,
  path,
  color,
}: {
  iconItem: string;
  item: String;
  path: string;
  color: string;
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };

  return (
    <button
      className={`border-2 border-${color}-200 bg-${color}-100 rounded-xl w-1/4 p-4 m-4 shadow-xl
    duration-300 hover:scale-110 flex flex-col justify-center items-center`}
      onClick={handleClick}
    >
      {iconItem === "PiChalkboardTeacherLight" && <PiChalkboardTeacherLight size="6rem" />}
      {iconItem === "HiOutlineUserCircle" && <HiOutlineUserCircle size="6rem" />}
      {iconItem === "PiChalkboardTeacherFill" && <PiChalkboardTeacherFill size="6rem" />}
      <div className="text-sm font-semibold">{item}</div>
    </button>
  );
}
