"use client";
import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import { SetStateAction, useState } from "react";
import Modal from "react-modal";

export default function ActionButtons({ startPoint }: { startPoint: number }) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isChangeOpen, setIsChangepen] = useState(false);

  const handleOpenClick = (setIsOpen: (value: boolean) => void) => {
    setIsOpen(true);
  };

  const handleCloseClick = (setIsOpen: (value: boolean) => void) => {
    setIsOpen(false);
  };

  const [startSeat, setStartSeat] = useState("right");
  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStartSeat(e.target.value);
  };

  const customStyles = {
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "50%",
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
        contentLabel="test"
        onRequestClose={() => handleCloseClick(setIsAddOpen)}
        style={customStyles}
      >
        <BlackBoard></BlackBoard>
        <form action="">
          <div className="mb-2">
            <h3>Add Seat</h3>
            <input
              type="radio"
              name="startPoint"
              value="right"
              checked={startSeat === "right"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">左</span>
            <input
              type="radio"
              name="startPoint"
              value="left"
              checked={startSeat === "left"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">右</span>
            <span className="p-1">から</span>
            <input type="number" name="col" className="border-2 rounded-md" min={1} max={100} />
            <span className="p-1">列目</span>
          </div>
          <div>
            <input
              type="radio"
              name="startPoint"
              value="right"
              checked={startSeat === "right"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">前</span>
            <input
              type="radio"
              name="startPoint"
              value="left"
              checked={startSeat === "left"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">後</span>
            <span className="p-1">から</span>
            <input type="number" name="col" className="border-2 rounded-md" min={1} max={100} />
            <span className="p-1">列目</span>
          </div>
        </form>
        <Button
          color="blue"
          message="Close"
          px={2}
          handleClick={() => handleCloseClick(setIsAddOpen)}
        />
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
        <h2>Delete！</h2>
        <Button
          color="blue"
          message="Close"
          px={2}
          handleClick={() => handleCloseClick(setIsDeleteOpen)}
        />
      </Modal>

      <Button
        color="emerald"
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
        <h2>Change！</h2>
        <Button
          color="blue"
          message="Close"
          px={2}
          handleClick={() => handleCloseClick(setIsChangepen)}
        />
      </Modal>
    </div>
  );
}
