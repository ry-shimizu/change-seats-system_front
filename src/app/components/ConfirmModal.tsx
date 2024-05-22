"use client";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { customStyles, handleClick, handleFormSubmit } from "./modal";

export default function ConfirmModal({
  title,
  buttonMessage,
  modalButtonMessage,
  buttonColor,
  contentMessage,
  formName,
}: {
  buttonColor: string;
  title: string;
  buttonMessage: string;
  modalButtonMessage?: JSX.Element;
  contentMessage: string;
  formName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#app");

  return (
    <>
      {modalButtonMessage ? (
        <div
          className="flex px-1 cursor-pointer duration-300 hover:scale-110"
          onClick={() => handleClick(setIsOpen, true)}
        >
          {modalButtonMessage}
        </div>
      ) : (
        <Button
          color={buttonColor}
          message={buttonMessage}
          paddingXNum={2}
          justifyEnd
          handleClick={() => handleClick(setIsOpen, true)}
        />
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => handleClick(setIsOpen, false)}
        style={customStyles}
      >
        <div className="flex flex-col">
          <span className="text-xl">{title}</span>
          <div className="border-t-2 border-b-2 mt-3">
            <div className="py-4 px-1">{contentMessage}</div>
          </div>
          <div className="flex mt-3 items-end justify-end">
            <Button
              color={buttonColor}
              message={buttonMessage}
              paddingXNum={2}
              justifyEnd
              handleClick={() => handleFormSubmit(formName)}
            />
            <Button
              color="gray"
              message="閉じる"
              paddingXNum={2}
              justifyEnd
              handleClick={() => handleClick(setIsOpen, false)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
