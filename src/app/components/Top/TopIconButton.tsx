"use client";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const hundleClick = () => {
    router.push(path);
  };

  return (
    <button
      className="border-2 border-blue-200 bg-blue-100 rounded-xl w-1/2 p-4 m-4 items-center shadow-xl
  flex items-centertransition-transform duration-300 ease-in-out transform  hover:scale-110"
      onClick={hundleClick}
    >
      {iconItem === "PiChalkboardTeacherLight" && <PiChalkboardTeacherLight size="2rem" />}
      {iconItem === "HiOutlineUserCircle" && <HiOutlineUserCircle size="2rem" />}
      {iconItem === "PiChalkboardTeacherFill" && <PiChalkboardTeacherFill size="2rem" />}
      <div className="ml-2">{item}</div>
    </button>
  );
}
