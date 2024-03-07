"use client";
import Button from "@/app/components/Button";
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

  const [sexType, setSexType] = useState(1);
  const handleSexType = (e: { target: { value: SetStateAction<string> } }) => {
    setSexType(Number(e.target.value));
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
      {/* add ----------------------------------------------------------------- */}
      <Button color="blue" message="Add" px={2} handleClick={() => handleOpenClick(setIsAddOpen)} />

      <Modal
        isOpen={isAddOpen}
        contentLabel="test"
        onRequestClose={() => handleCloseClick(setIsAddOpen)}
        style={customStyles}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Seat Add</h2>
        <form action="" className="mt-2">
          <div className="mb-2">
            <div className="p-2">
              <h3>■Seat Number</h3>
              <input type="number" name="col" className="border-2 rounded-md" min={1} max={1000} />
              <span className="p-1">番</span>
            </div>
          </div>

          <div className="p-2">
            <h3>■Student Name (first name)</h3>
            <input
              type="text"
              name="studentName"
              placeholder="生徒名"
              maxLength={6}
              size={20}
              className="border-2 rounded-md"
            />
          </div>
          <div className="p-2">
            <h3>■Sex Type</h3>
            <input
              type="radio"
              name="sexType"
              value={1}
              checked={sexType === 1}
              onChange={handleSexType}
            />
            <span className="p-1">男性</span>
            <input
              type="radio"
              name="sexType"
              value={2}
              checked={sexType === 2}
              onChange={handleSexType}
            />
            <span className="p-1">女性</span>
          </div>
        </form>
        <Button color="blue" message="Save" px={2} />
      </Modal>

      {/* delete-----------------------------------------------------------------  */}
      <Button color="red" message="Delete" px={2} />
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

      {/* change-----------------------------------------------------------------  */}
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
