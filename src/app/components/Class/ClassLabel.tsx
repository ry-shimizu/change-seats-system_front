"use client";
import { useRouter } from "next/navigation";
import { IoIosTimer } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

export default function ClassLabel({
  classId,
  classNum,
  title,
  studentNum,
  lastUpdate,
  isOtherClassAddFlg,
}: {
  classId: number;
  classNum: string;
  title: string;
  studentNum: number;
  lastUpdate: string;
  isOtherClassAddFlg: boolean;
}) {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const path = isOtherClassAddFlg ? "otherclass" : "myclass";
    router.push("/" + path + "/detail/" + classId);
  };

  return (
    <button
      className={`border-2 border-gray-200 bg-gray-100 rounded-md w-11/12 m-4 items-center shadow-xl
flex transition-transform duration-300 ease-in-out transform hover:scale-105 ${
        isOtherClassAddFlg || "p-2"
      }`}
      onClick={handleClick}
    >
      <span className={`${isOtherClassAddFlg ? "p-2" : "p-4 text-2xl font-bold"}`}>{classNum}</span>
      <span className={`${isOtherClassAddFlg ? "p-2" : "text-xl font-semibold p-4"}`}>{title}</span>
      <span className="ml-auto mt-auto text-xs flex w-1/3">
        <span className="flex items-center w-1/3">
          <IoPerson />
          <div className="pl-1">{studentNum}人</div>
        </span>
        <span className="flex items-center w-2/3">
          <IoIosTimer />
          <div className="pl-1">{lastUpdate}</div>
        </span>
      </span>
    </button>
  );
}
