"use client";
import Button from "@/app/components/Button";
import { deleteMyClassFormAction } from "../action";

export default function DeleteClass({
  setIsDeleteOpen,
  classId,
}: {
  setIsDeleteOpen: (value: boolean) => void;
  classId: number;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xl">クラス削除確認</span>
      <div className="border-t-2 border-b-2 mt-3">
        <div className="py-4 px-1">このクラスを削除しますか？</div>
      </div>
      <form
        action={() => {
          deleteMyClassFormAction(classId);
        }}
      >
        <div className="flex mt-3 items-end justify-end">
          <Button color="red" message="削除" paddingXNum={2} justifyEnd />
          <Button
            color="gray"
            message="閉じる"
            paddingXNum={2}
            justifyEnd
            handleClick={() => {
              setIsDeleteOpen(false);
            }}
          />
        </div>
      </form>
    </div>
  );
}
