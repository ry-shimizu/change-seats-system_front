"use client";

import Button from "@/app/components/Button";
import { SetStateAction, useState } from "react";

export default function AddContent({
  seatInfos,
}: {
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: { seatNumber: number; stundetId: number; studentName: string; sexType: number }[];
  }[];
}) {
  const [sexType, setSexType] = useState(1);
  const handleSexType = (e: { target: { value: SetStateAction<string> } }) => {
    setSexType(Number(e.target.value));
  };
  const addpullDown = seatInfos.flatMap((seatInfo) => {
    return seatInfo.seatDetails.map((seatDetail) => {
      return <option value={String(seatDetail.seatNumber)}>{String(seatDetail.seatNumber)}</option>;
    });
  });

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Add</h2>
      <form action="" className="mt-2">
        <div className="mb-2">
          <div className="p-2">
            <h3>■Seat Number</h3>
            <select
              id="deleteSeatNum"
              name="deleteSeatNum"
              className="block appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 mt-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>選択してください ▼</option>
              {addpullDown}
            </select>
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
            className="border-2 rounded-md mt-1"
          />
        </div>
        <div className="p-2">
          <h3>■Sex Type</h3>
          <input
            id="man"
            type="radio"
            name="sexType"
            value={1}
            checked={sexType === 1}
            onChange={handleSexType}
          />
          <label htmlFor="man" className="p-1">
            男性
          </label>
          <input
            id="woman"
            type="radio"
            name="sexType"
            value={2}
            checked={sexType === 2}
            onChange={handleSexType}
          />
          <label htmlFor="woman" className="p-1">
            女性
          </label>
        </div>
      </form>
      <Button color="blue" message="Save" px={2} />
    </>
  );
}
