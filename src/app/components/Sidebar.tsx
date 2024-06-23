"use client";
import SideBarLink from "@/app/components/SidebarLink";
import { FaHome } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiChalkboardTeacherFill, PiChalkboardTeacherLight } from "react-icons/pi";
import { Authority } from "../enum/Authority";
import Logout from "./Logout";

export default function Sidebar({ authority }: { authority?: Authority }) {
  return (
    <nav className="h-screen w-1/6 bg-gray-200 fixed top-16 left-0">
      <ul className="text-gray-600 m-auto">
        <div className="mt-16">
          <SideBarLink IconItem={FaHome} item="Home" path="/top" />
        </div>
        <SideBarLink IconItem={PiChalkboardTeacherLight} item="My classes" path="/myclass" />
        <SideBarLink IconItem={PiChalkboardTeacherFill} item="Other classes" path="/otherclass" />
        {authority && authority !== "2" && (
          <SideBarLink IconItem={HiOutlineUserCircle} item="User Managements" path="/user" />
        )}
        <Logout />
      </ul>
    </nav>
  );
}
