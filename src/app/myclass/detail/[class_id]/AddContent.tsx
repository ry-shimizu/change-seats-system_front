"use client";

import Button from "@/app/components/Button";
import { SetStateAction, useState } from "react";

export default function AddContent() {
  const [sexType, setSexType] = useState(1);
  const handleSexType = (e: { target: { value: SetStateAction<string> } }) => {
    setSexType(Number(e.target.value));
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Add</h2>
      <form action="" className="mt-2">
        <div className="mb-2">
          <div className="p-2">
            <h3>■Seat Number</h3>
            <input type="number" name="col" className="border-2 rounded-md" min={1} max={1000} />
            <span className="p-1">番</span>
          </div>
        </div>

        <div className="p-2">
          <h3>■Student Name (first name)</h3>
          <input
            type="text"
            name="studentName"
            placeholder="生徒名"
            maxLength={6}
            size={20}
            className="border-2 rounded-md"
          />
        </div>
        <div className="p-2">
          <h3>■Sex Type</h3>
          <input
            type="radio"
            name="sexType"
            value={1}
            checked={sexType === 1}
            onChange={handleSexType}
          />
          <span className="p-1">男性</span>
          <input
            type="radio"
            name="sexType"
            value={2}
            checked={sexType === 2}
            onChange={handleSexType}
          />
          <span className="p-1">女性</span>
        </div>
      </form>
      <Button color="blue" message="Save" px={2} />
    </>
  );
}
