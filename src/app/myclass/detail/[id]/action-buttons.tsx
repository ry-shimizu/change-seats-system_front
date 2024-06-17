"use client";

import ConfirmModal from "@/app/components/ConfirmModal";
import { customStyles, handleClick } from "@/app/components/modal";
import { ClassDetail } from "@/app/lib/api/type";
import { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import { MdChangeCircle } from "react-icons/md";
import Modal from "react-modal";
import { deleteMyClassFormAction } from "../action";
import ChangeSeat from "./change-seat";
import UpdateClassInfo from "./update-classinfo";

export default function ActionButtons({
  seatsInfo,
  classId,
}: {
  seatsInfo: ClassDetail;
  classId: number;
}) {
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  Modal.setAppElement("#app");

  return (
    <>
      <form
        action={() => {
          deleteMyClassFormAction(classId);
        }}
        name="deleteMyClass"
      ></form>
      <div className="mt-5 flex justify-end">
        <div
          className="flex px-1 cursor-pointer duration-300 hover:scale-110"
          onClick={() => handleClick(setIsChangeOpen, true)}
        >
          <MdChangeCircle size="2.5rem" color="#22c55e" />
        </div>
        <div
          className="flex px-1 cursor-pointer duration-300 hover:scale-110"
          onClick={() => handleClick(setIsUpdateOpen, true)}
        >
          <HiPlusCircle size="2.5rem" color="#3b82f6" />
        </div>
        <ConfirmModal
          buttonMessage="削除"
          modalButtonMessage={<HiMinusCircle size="2.5rem" color="#ef4444" />}
          buttonColor="red"
          contentMessage="このクラスを削除しますか？"
          title="クラス削除確認"
          formName="deleteMyClass"
        />
      </div>
      <Modal
        isOpen={isChangeOpen}
        onRequestClose={() => handleClick(setIsChangeOpen, false)}
        style={customStyles}
      >
        <ChangeSeat seatInfos={seatsInfo} setIsChangeOpen={setIsChangeOpen} classId={classId} />
      </Modal>

      <Modal
        isOpen={isUpdateOpen}
        onRequestClose={() => handleClick(setIsUpdateOpen, false)}
        style={customStyles}
      >
        <UpdateClassInfo
          seatInfos={seatsInfo}
          setIsUpdateOpen={setIsUpdateOpen}
          classId={classId}
        />
      </Modal>
    </>
  );
}
