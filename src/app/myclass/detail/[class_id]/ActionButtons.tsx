"use client";
import Button from "@/app/components/Button";
import { useState } from "react";
import Modal from "react-modal";
import AddContent from "./AddContent";
import ChangeContent from "./ChangeContent";
import DeleteContent from "./DeleteContent";

export default function ActionButtons({
  startPoint,
  seatInfos,
}: {
  startPoint: number;
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: { seatNumber: number; stundetId: number; studentName: string; sexType: number }[];
  }[];
}) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isChangeOpen, setIsChangepen] = useState(false);

  const handleOpenClick = (setIsOpen: (value: boolean) => void) => {
    setIsOpen(true);
  };

  const handleCloseClick = (setIsOpen: (value: boolean) => void) => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "30%",
    },
    overlay: {
      backgroundColor: "rgba(128, 128, 128, 0.8)",
    },
  };

  return (
    <div className="mt-5 flex justify-end">
      <Button color="blue" message="Add" px={2} handleClick={() => handleOpenClick(setIsAddOpen)} />
      <Modal
        isOpen={isAddOpen}
        onRequestClose={() => handleCloseClick(setIsAddOpen)}
        style={customStyles}
      >
        <AddContent seatInfos={seatInfos} />
      </Modal>

      <Button
        color="red"
        message="Delete"
        px={2}
        handleClick={() => handleOpenClick(setIsDeleteOpen)}
      />
      <Modal
        isOpen={isDeleteOpen}
        contentLabel="test"
        onRequestClose={() => handleCloseClick(setIsDeleteOpen)}
        style={customStyles}
      >
        <DeleteContent seatInfos={seatInfos} />
      </Modal>

      <Button
        color="green"
        message="Change"
        px={2}
        handleClick={() => handleOpenClick(setIsChangepen)}
      />
      <Modal
        isOpen={isChangeOpen}
        contentLabel="test"
        onRequestClose={() => handleCloseClick(setIsChangepen)}
        style={customStyles}
      >
        <ChangeContent seatInfos={seatInfos} />
      </Modal>
    </div>
  );
}
