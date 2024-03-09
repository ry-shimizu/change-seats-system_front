"use clinet";
import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import { useState } from "react";

export default function ChangeContent({
  seatInfos,
}: {
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: { seatNumber: number; stundetId: number; studentName: string; sexType: number }[];
  }[];
}) {
  const [isChangeCondition, setIsChangeCondition] = useState(false);
  const handlesetIsChangeCondition = (e: { target: { checked: boolean } }) => {
    setIsChangeCondition(e.target.checked);
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Change</h2>
      <BlackBoard>
        <Seat seatInfos={seatInfos} />
      </BlackBoard>
      <input
        id="isChangeConditions"
        type="checkbox"
        className="border-2 rounded-md"
        checked={isChangeCondition}
        onChange={handlesetIsChangeCondition}
      />
      <label htmlFor="isChangeConditions" className="pl-1 text-sm">
        席替え条件有り
      </label>
      {isChangeCondition && <div></div>}
      <div className="mt-5 flex justify-end">
        <Button color="blue" message="Save" px={2} />
        <Button color="green" message="Change" px={2} />
      </div>
    </>
  );
}
