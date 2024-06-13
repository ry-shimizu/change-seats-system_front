"use client";

import { ClassDetail, SeatInfo } from "@/app/lib/api/type";
import SeatUpdateForm from "@/app/myclass/detail/[id]/seat-updateform";
import { useState } from "react";
import Modal from "react-modal";
import { customStyles, handleClick } from "../modal";

export default function Seat({
  seatsInfo,
  isOtherClassPage,
}: {
  seatsInfo: ClassDetail;
  isOtherClassPage?: boolean;
}) {
  Modal.setAppElement("#app");
  const [isOpen, setIsOpen] = useState(false);
  const [seatInfo, setSeatInfo] = useState(null as unknown as SeatInfo);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => handleClick(setIsOpen, false)}
        style={customStyles}
      >
        <SeatUpdateForm seatInfo={seatInfo} handleClick={() => handleClick(setIsOpen, false)} />
      </Modal>
      {seatsInfo.seatsAddColInfo.map((seatAddColInfo, index) => {
        return (
          <div className="flex items-center m-2 flex-col-reverse" key={index}>
            {seatAddColInfo.seatsInfo.map((seatInfo, index) => {
              return (
                <div
                  className={`${
                    seatInfo.sexType === "1"
                      ? "bg-blue-100/90"
                      : seatInfo.sexType === "2"
                        ? "bg-red-100/90"
                        : "bg-gray-100/90"
                  } aspect-square w-14 h-14 border border-white m-2 p-1 items-center justify-center flex text-xs shadow-xl rounded-md ${
                    isOtherClassPage || "cursor-pointer duration-300 hover:scale-110"
                  }`}
                  key={index}
                  onClick={() => {
                    isOtherClassPage || setSeatInfo(seatInfo);
                    isOtherClassPage || handleClick(setIsOpen, true);
                  }}
                >
                  <span className="flex items-center justify-center w-full h-full">
                    {seatInfo.studentName}
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
