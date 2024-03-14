"use client";
import Button from "@/app/components/Button";
import { SetStateAction, useState } from "react";

export default function UerAdd() {
  const [authority, setAuthority] = useState("right");

  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setAuthority(e.target.value);
  };
  return (
    <div className="w-1/3 overflow-y-auto mt-16">
      <h2 className="font-serif text-4xl mb-2">User Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>■ Login Id</h3>
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="p-2">
            <h3>■ Authority</h3>
            <input
              id="admin"
              type="radio"
              name="authority"
              value="admin"
              checked={authority === "admin"}
              onChange={handleStartSeatChange}
            />
            <label htmlFor="admin" className="p-1">
              Admin
            </label>
            <input
              id="general"
              type="radio"
              name="authority"
              value="general"
              checked={authority === "general"}
              onChange={handleStartSeatChange}
            />
            <label htmlFor="general" className="p-1">
              General
            </label>
          </div>
          <div className="p-2">
            <h3>■ User Name</h3>
            <input
              type="text"
              name="userName"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="p-2">
            <h3>■ Password</h3>
            <input
              type="password"
              name="password"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <Button color="blue" message="Regist" paddingXNum={6} justifyEnd />
        </form>
      </div>
    </div>
  );
}
