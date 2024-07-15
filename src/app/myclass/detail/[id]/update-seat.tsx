"use client";

import Button from "@/app/components/Button";
import { SexType } from "@/app/enum/SexType";
import { SeatInfo } from "@/app/lib/api/type";
import { useParams } from "next/navigation";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { addSeatFormAction, deleteSeatFormAction, updateSeatFormAction } from "../action";
import XButton from "./x-button";

export default function UpdateSeat({
  seatInfo: { seatNumber, studentName, sexType, seatId, studentId },
  handleClick,
}: {
  seatInfo: SeatInfo;
  handleClick: () => void;
}) {
  const [displaySexType, setDisplaySexType] = useState(sexType);
  const handleSexType = (e: { target: { value: SetStateAction<string> } }) => {
    setDisplaySexType(e.target.value as SexType);
  };

  const [isEmptySeat, setIsEmptyseat] = useState(false);
  const handleEmptyseat = () => {
    setIsEmptyseat(!isEmptySeat);
  };

  const [isRegister, setIsRegister] = useState(false);
  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  const params = useParams();

  const {
    formState: { errors },
    trigger,
    register,
  } = useForm<{
    studentName: string;
  }>();

  return (
    <div>
      <XButton handleClick={handleClick} />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">座席情報変更</h3>
      <div className="grid grid-cols-4 gap-1">
        <form
          action={(formData: FormData) => {
            if (!isEmptySeat && !formData.get("studentName")) {
              trigger();
              return;
            }
            isRegister
              ? addSeatFormAction(formData, params["id"] as string, seatNumber, isEmptySeat)
              : updateSeatFormAction(
                  formData,
                  params["id"] as string,
                  seatId as number,
                  studentId as number,
                  isEmptySeat
                );
            handleClick();
          }}
          className={`${isRegister || isEmptySeat ? "col-span-4" : "col-span-3"}`}
        >
          <div className="p-2">
            <h3>■生徒名</h3>
            <input
              type="text"
              id="studentName"
              placeholder="生徒名"
              disabled={isEmptySeat}
              maxLength={6}
              size={20}
              className="border-2 rounded-md mt-1 focus:outline-none focus:shadow-outline hover:border-gray-500"
              defaultValue={studentName}
              {...register("studentName", {
                required: "生徒名は必須です。",
                max: { value: 6, message: "生徒名は6文字以下で入力してください。" },
              })}
            />
            {errors.studentName && (
              <div className="text-red-500 text-xs">{errors.studentName.message}</div>
            )}
          </div>
          <div className="p-2">
            <h3>■性別</h3>
            <input
              id="man"
              type="radio"
              name="sexType"
              disabled={isEmptySeat}
              value={"1"}
              checked={displaySexType === "1"}
              onChange={handleSexType}
            />
            <label htmlFor="man" className="p-1">
              男性
            </label>
            <input
              id="woman"
              type="radio"
              name="sexType"
              disabled={isEmptySeat}
              value={"2"}
              checked={displaySexType === "2"}
              onChange={handleSexType}
            />
            <label htmlFor="woman" className="p-1">
              女性
            </label>
          </div>
          <div className="px-2 mt-7">
            <input
              id="isEmptySeat"
              type="checkbox"
              className="border-2 rounded-md"
              name="isEmptySeat"
              onClick={handleEmptyseat}
            />
            <label htmlFor="isEmptySeat" className="pl-1 text-sm">
              空席を設定する
            </label>
          </div>
          <div className="px-2">
            <input
              id="isRegister"
              type="checkbox"
              className="border-2 rounded-md"
              name="isRegister"
              onClick={handleRegister}
            />
            <label htmlFor="isRegister" className="pl-1 text-sm">
              新しい座席を登録する
            </label>
          </div>
          <div className="mt-7">
            <Button
              color="blue"
              message={isRegister ? "登録" : "更新"}
              paddingXNum={2}
              justifyEnd
            />
          </div>
        </form>
        {!isRegister && !isEmptySeat && (
          <form
            action={() => {
              deleteSeatFormAction(
                seatNumber,
                params["id"] as string,
                seatId as number,
                studentId as number
              );
              handleClick();
            }}
            className="mt-auto mr-auto"
          >
            <Button color="red" message="削除" paddingXNum={2} />
          </form>
        )}
      </div>
    </div>
  );
}
