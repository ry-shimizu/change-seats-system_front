"use client";
import { customStyles, handleClick } from "@/app/components/modal";
import { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import { MdChangeCircle } from "react-icons/md";
import Modal from "react-modal";
import AddContent from "./AddContent";
import ChangeContent from "./ChangeContent";
import DeleteContent from "./DeleteContent";
import { SeatInfo } from "./page";

export default function ActionButtons({ seatInfos }: { startPoint: number; seatInfos: SeatInfo }) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  Modal.setAppElement("#app");

  return (
    <div className="mt-5 flex justify-end">
      <div
        className="flex px-1 cursor-pointer duration-300 hover:scale-110"
        onClick={() => handleClick(setIsAddOpen, true)}
      >
        <HiPlusCircle size="2.5rem" color="#75A9FF" />
      </div>

      <Modal
        isOpen={isAddOpen}
        onRequestClose={() => handleClick(setIsAddOpen, false)}
        style={customStyles}
      >
        <AddContent seatInfos={seatInfos} handleClick={() => handleClick(setIsAddOpen, false)} />
      </Modal>

      <div
        className="flex px-1 cursor-pointer duration-300 hover:scale-110"
        onClick={() => handleClick(setIsDeleteOpen, true)}
      >
        <HiMinusCircle size="2.5rem" color="#ef4444" />
      </div>

      <Modal
        isOpen={isDeleteOpen}
        onRequestClose={() => handleClick(setIsDeleteOpen, false)}
        style={customStyles}
      >
        <DeleteContent
          seatInfos={seatInfos}
          handleClick={() => handleClick(setIsDeleteOpen, false)}
        />
      </Modal>

      <div
        className="flex px-1 cursor-pointer duration-300 hover:scale-110"
        onClick={() => handleClick(setIsChangeOpen, true)}
      >
        <MdChangeCircle size="2.5rem" color="#22c55e" />
      </div>
      <Modal
        isOpen={isChangeOpen}
        onRequestClose={() => handleClick(setIsChangeOpen, false)}
        style={customStyles}
      >
        <ChangeContent
          seatInfos={seatInfos}
          handleClick={() => handleClick(setIsChangeOpen, false)}
        />
      </Modal>
    </div>
  );
}
