"use client";
import Button from "@/app/components/Button";
import { useState } from "react";

export default function DeleteContent({
  seatInfos,
}: {
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: { seatNumber: number; stundetId: number; studentName: string; sexType: number }[];
  }[];
}) {
  const [displayName, setDisplayName] = useState("　");
  const handleOnChange = (value: string) => {
    const displaySeatInfo = seatInfos
      .map((seatInfo) =>
        seatInfo.seatDetails.find((seatDetail) => String(seatDetail.seatNumber) === value)
      )
      .filter((seatDetail) => seatDetail !== undefined);
    if (displaySeatInfo[0]?.studentName) {
      setDisplayName(displaySeatInfo[0]?.studentName);
    } else {
      setDisplayName("　");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Delete</h2>
      <form action="" className="mt-2">
        <div className="mb-2">
          <div className="p-2">
            <h3>■Seat Number</h3>
            <input
              type="number"
              name="col"
              className="border-2 rounded-md"
              min={1}
              max={1000}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            <span className="p-1">番</span>
          </div>
          <div className="text-sm p-2">生徒名：{displayName} </div>
        </div>
      </form>
      <Button color="red" message="Delete" px={2} />
    </>
  );
}
