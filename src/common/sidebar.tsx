import SideBarLink from "@/components/Top/SidebarLink";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <nav className="h-screen w-1/6 bg-gray-200 fixed top-16 left-0 ">
      <ul className="text-gray-600 m-auto">
        <div className="mt-16">
          <SideBarLink IconItem={FaHome} item="Home" path="/" />
        </div>
        <SideBarLink IconItem={PiChalkboardTeacherLight} item="My classes" path="/myclass" />
        <SideBarLink IconItem={PiChalkboardTeacherFill} item="Other classes" path="/otherclass" />
        <SideBarLink IconItem={HiOutlineUserCircle} item="User Managements" path="/user" />

        <Link href="/" className="w-full h-full">
          <li className="flex mt-64 p-4 items-center border-t-2 border-gray-300 hover:text-blue-400">
            <CiLogout size="1.25rem" />
            <span className="ml-2">Logout</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
