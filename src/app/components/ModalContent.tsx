"use client";
import Button from "@/app/components/Button";
import { UseFormSetError } from "react-hook-form";

export default function ModalContent({
  isUpdate = false,
  setIsDeleteOpen,
  formAcition,
  setError,
}: {
  isUpdate?: boolean;
  setIsDeleteOpen: (value: boolean) => void;
  formAcition: () => Promise<void> | Promise<{ errorMessage?: string | undefined }>;
  setError?: UseFormSetError<{
    loginId: string;
  }>;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xl">{isUpdate ? "更新" : "削除"}確認</span>
      <div className="border-t-2 border-b-2 mt-3">
        <div className="py-4 px-1">{isUpdate ? "更新" : "削除"}しますか？</div>
      </div>
      <form
        action={async () => {
          if (isUpdate) {
            const response = await formAcition();
            if (response && setError) {
              setError("loginId", { message: response.errorMessage, type: "validate" });
              setIsDeleteOpen(false);
            }
          } else {
            formAcition();
          }
        }}
      >
        <div className="flex mt-3 items-end justify-end">
          <Button
            color={isUpdate ? "blue" : "red"}
            message={isUpdate ? "更新" : "削除"}
            paddingXNum={2}
            justifyEnd
          />
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
