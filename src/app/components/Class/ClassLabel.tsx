import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { IoCalendar, IoPerson } from "react-icons/io5";

export default function ClassLabel({
  classId,
  className,
  classYear,
  title,
  studentNum,
  lastUpdate,
  isOtherClassFlg,
}: {
  classId: number;
  className: string;
  title: string;
  classYear: number;
  studentNum: number;
  lastUpdate: string;
  isOtherClassFlg: boolean;
}) {
  const getPath = (): string => {
    const path = isOtherClassFlg ? "otherclass" : "myclass";
    return "/" + path + "/detail/" + classId;
  };

  return (
    <Link
      className="border-2 border-gray-200 bg-gray-100 rounded-md w-11/12 my-3 m-4 items-center shadow-xl
flex transition-transform duration-300 ease-in-out transform hover:scale-105 p-2"
      href={getPath()}
      key={classId}
    >
      <div className="flex items-center">
        <span className={`${isOtherClassFlg ? "p-2" : "p-4 text-2xl font-bold"}`}>{className}</span>
        <span className={`${isOtherClassFlg ? "p-2" : "text-xl font-semibold p-4"}`}>{title}</span>
      </div>
      <div className="text-xs flex ml-auto mt-auto">
        <span className="flex items-center px-1  justify-start">
          <IoCalendar />
          <div className="pl-1">{classYear}</div>
        </span>
        <span className="flex items-center px-1  justify-start">
          <IoPerson />
          <div className="pl-1">{studentNum}人</div>
        </span>
        <span className="flex items-center justify-start">
          <IoIosTimer />
          <div className="pl-1">{lastUpdate}</div>
        </span>
      </div>
    </Link>
  );
}
