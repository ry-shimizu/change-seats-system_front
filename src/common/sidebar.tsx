import SideBarLink from "@/component/Top/SidebarLink";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <nav className="h-screen w-1/6 bg-gray-100 fixed top-16 left-0 ">
      <ul className="text-gray-600 m-auto">
        <SideBarLink IconItem={FaHome} mt="16" item="Home" path="/" />
        <SideBarLink IconItem={PiChalkboardTeacherLight} mt="3" item="My classes" path="/myclass" />
        <SideBarLink
          IconItem={PiChalkboardTeacherFill}
          mt="3"
          item="Other classes"
          path="/otherclass"
        />
        <SideBarLink IconItem={HiOutlineUserCircle} mt="3" item="User Managements" path="/user" />

        <Link href="/" className="w-full h-full">
          <li className="flex mt-64 p-4 items-center border-t hover:text-blue-400">
            <CiLogout size="1.25rem" />
            <span className="ml-2">Logout</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
