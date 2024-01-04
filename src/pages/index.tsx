import TopIconButton from "@/component/Top/TopIconButton";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

const Top = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TopIconButton IconItem={PiChalkboardTeacherLight} item="My classes" path="/myclass" />
      <TopIconButton IconItem={PiChalkboardTeacherFill} item="Other classes" path="/otherclass" />
      <TopIconButton IconItem={HiOutlineUserCircle} item="User Managements" path="/user" />
    </div>
  );
};

export default Top;
