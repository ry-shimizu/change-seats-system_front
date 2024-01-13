import TopIconButton from "@/components/Top/TopIconButton";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

const Top = () => {
  return (
    <div className="w-1/3 h-1/2">
      <h2 className="font-serif text-4xl mb-2">Top Menu</h2>
      <div className="bg-white rounded-xl w-full h-full items-center justify-center flex flex-col">
        <TopIconButton IconItem={PiChalkboardTeacherLight} item="My classes" path="/myclass" />
        <TopIconButton IconItem={PiChalkboardTeacherFill} item="Other classes" path="/otherclass" />
        <TopIconButton IconItem={HiOutlineUserCircle} item="User Managements" path="/user" />
      </div>
    </div>
  );
};

export default Top;
