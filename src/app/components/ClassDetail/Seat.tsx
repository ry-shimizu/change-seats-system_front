"use client";

import { ClassDetail } from "@/app/lib/api/type";
import { useState } from "react";

export default function Seat({ seatsInfo }: { seatsInfo: ClassDetail }) {
  const [hover, setHover] = useState("");
  return (
    <>
      {seatsInfo.seatsAddColInfo.map((seatAddColInfo, index) => {
        return (
          <div className="flex items-center m-2 flex-col-reverse" key={index}>
            {seatAddColInfo.seatsInfo.map((seatInfo, index) => {
              return (
                <div
                  className={`${
                    seatInfo.sexType === "1" ? "bg-blue-100/90" : "bg-red-100/90"
                  } aspect-square w-14 h-14 border border-white m-2 p-1 items-center justify-center flex text-xs shadow-xl rounded-md`}
                  onMouseEnter={() => setHover(String(seatInfo.seatNumber))}
                  onMouseLeave={() => setHover("")}
                  key={index}
                >
                  <span className="flex items-center justify-center w-full h-full">
                    {hover === String(seatInfo.seatNumber)
                      ? String(seatInfo.seatNumber)
                      : seatInfo.studentName}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
