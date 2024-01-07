import { IoIosTimer } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const ClassLabel = ({
  classNum,
  title,
  studentNum,
  lastUpdate,
}: {
  classNum: string;
  title: string;
  studentNum: number;
  lastUpdate: string;
}) => {
  return (
    <div
      className="border-2 border-gray-200 bg-gray-100 rounded-md w-11/12 p-2 m-4 items-center shadow-xl
flex items-centertransition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <span className="text-2xl font-bold p-4">{classNum}</span>
      <span className="text-xl font-semibold p-4">{title}</span>
      <span className="ml-auto mt-auto text-xs flex">
        <span className="pr-3 flex items-center">
          <IoPerson />
          <div className="pl-1">{studentNum}人</div>
        </span>
        <span className="flex items-center">
          <IoIosTimer />
          <div className="pl-1">{lastUpdate}</div>
        </span>
      </span>
    </div>
  );
};

export default ClassLabel;
