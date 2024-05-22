"use client";
import Button from "@/app/components/Button";
import XButton from "./XButton";
import { SeatInfo } from "./page";

export default function DeleteContent({
  seatInfos,
  handleClick,
}: {
  seatInfos: SeatInfo;
  handleClick: () => void;
}) {
  const deletePullDown = seatInfos.flatMap((seatInfo, seatInfoIndex) => {
    return seatInfo.seatDetails.map((seatDetail, seatDetailIndex) => {
      return (
        <option value={String(seatDetail.seatNumber)} key={`${seatInfoIndex}-${seatDetailIndex}`}>
          {String(seatDetail.seatNumber) + ":" + seatDetail.studentName}
        </option>
      );
    });
  });

  return (
    <>
      <XButton handleClick={handleClick} />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Delete</h2>
      <form action="" className="mt-2">
        <div className="mb-2">
          <div className="p-2">
            <h3>■Slect a Seat Number</h3>
            <select
              id="deleteSeatNum"
              name="deleteSeatNum"
              className="block appearance-none w-1/2 bg-white border border-gray-300 hover:border-gray-500 mt-1 p-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>選択してください　　▼</option>
              {deletePullDown}
            </select>
          </div>
          <div className="px-2">
            <input id="isEmptySeatCondition" type="checkbox" className="border-2 rounded-md" />
            <label htmlFor="isEmptySeatCondition" className="pl-1 text-sm">
              空席を設定する
            </label>
          </div>
        </div>
      </form>
      <Button color="red" message="Delete" paddingXNum={2} justifyEnd />
    </>
  );
}
