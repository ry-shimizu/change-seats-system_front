"use client";

import { useState } from "react";

export default function Seat({
  seatInfos,
}: {
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: { seatNumber: number; stundetId: number; studentName: string; sexType: number }[];
  }[];
}) {
  const [hover, setHover] = useState("");
  return (
    <>
      {seatInfos.map((seatInfo, index) => {
        return (
          <div className="flex items-center m-2 flex-col-reverse">
            {seatInfo.seatDetails.map((seatDetail, index) => {
              return (
                <div
                  className={`${
                    seatDetail.sexType === 1 ? "bg-blue-100/90" : "bg-red-100/90"
                  } aspect-square w-12 h-12 border border-white m-2 p-1 items-center justify-center flex flex-col text-xs shadow-xl rounded-md`}
                  onMouseEnter={() => setHover(String(seatDetail.seatNumber))}
                  onMouseLeave={() => setHover("")}
                >
                  {hover === String(seatDetail.seatNumber)
                    ? String(seatDetail.seatNumber)
                    : seatDetail.studentName}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
