"use client";
import { signOut } from "next-auth/react";

import { CiLogout } from "react-icons/ci";

export default function Logout() {
  return (
    <div className="w-full h-full cursor-pointer" onClick={() => signOut()}>
      <li className="flex mt-64 p-4 items-center border-t-2 border-gray-300 hover:text-blue-400">
        <CiLogout size="1.25rem" />
        <span className="ml-2">Logout</span>
      </li>
    </div>
  );
}
