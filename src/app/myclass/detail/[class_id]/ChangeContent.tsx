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
  const changePullDown = seatInfos.flatMap((seatInfo) => {
    return seatInfo.seatDetails.map((seatDetail) => {
      return (
        <option value={String(seatDetail.seatNumber)}>
          {String(seatDetail.seatNumber) + ":" + seatDetail.studentName}
        </option>
      );
    });
  });

  const colPullDown = seatInfos.flatMap((seatInfo) => {
    return <option value={String(seatInfo.col)}>{String(seatInfo.col)}</option>;
  });

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
      {isChangeCondition && (
        <form action="" className="mb-10 mt-2">
          <div className="mb-2">
            <select
              name="changeSeatNum"
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>選択してください ▼</option>
              {changePullDown}
            </select>
            <span className="p-1">は</span>
            <select id="position" name="position">
              <option value="before">前</option>
              <option value="after">後ろ</option>
            </select>
            <span className="p-1">から</span>
            <select
              name="colSeatNum"
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>0 ▼</option>
              {colPullDown}
            </select>
            <span className="p-1">列目</span>
          </div>
        </form>
      )}
      <div className="mt-5 flex justify-end">
        <Button color="blue" message="Save" px={2} />
        <Button color="green" message="Change" px={2} />
      </div>
    </>
  );
}
