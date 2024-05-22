"use client";

import Button from "@/app/components/Button";
import { SetStateAction, useState } from "react";
import XButton from "./XButton";
import { SeatInfo } from "./page";

export default function AddContent({
  seatInfos,
  handleClick,
}: {
  seatInfos: SeatInfo;
  handleClick: () => void;
}) {
  const [sexType, setSexType] = useState(1);
  const handleSexType = (e: { target: { value: SetStateAction<string> } }) => {
    setSexType(Number(e.target.value));
  };

  const [emptySeat, setEmptyseat] = useState(false);
  const handleEmptyseat = () => {
    setEmptyseat(!emptySeat);
  };

  const addpullDown = seatInfos.flatMap((seatInfo, seatInfoIndex) => {
    return seatInfo.seatDetails.map((seatDetail, seatDetailIndex) => {
      return (
        <option value={String(seatDetail.seatNumber)} key={`${seatInfoIndex}-${seatDetailIndex}`}>
          {String(seatDetail.seatNumber)}
        </option>
      );
    });
  });

  return (
    <>
      <XButton handleClick={handleClick} />
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
            disabled={emptySeat}
            maxLength={6}
            size={20}
            className="border-2 rounded-md mt-1 focus:outline-none focus:shadow-outline hover:border-gray-500"
          />
        </div>
        <div className="p-2">
          <h3>■Sex Type</h3>
          <input
            id="man"
            type="radio"
            name="sexType"
            disabled={emptySeat}
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
            disabled={emptySeat}
            value={2}
            checked={sexType === 2}
            onChange={handleSexType}
          />
          <label htmlFor="woman" className="p-1">
            女性
          </label>
        </div>
        <div className="px-2">
          <input
            id="isEmptySeatCondition"
            type="checkbox"
            className="border-2 rounded-md"
            onClick={handleEmptyseat}
          />
          <label htmlFor="isEmptySeatCondition" className="pl-1 text-sm">
            空席を設定する
          </label>
        </div>
      </form>
      <Button color="blue" message="Save" paddingXNum={2} justifyEnd />
    </>
  );
}
