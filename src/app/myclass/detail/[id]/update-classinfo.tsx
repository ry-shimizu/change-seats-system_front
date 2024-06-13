import Button from "@/app/components/Button";
import { handleClick } from "@/app/components/modal";
import { ClassDetail } from "@/app/lib/api/type";
import { updateMyClassFormAction } from "../action";
import XButton from "./x-button";

export default function UpdateClassInfo({
  seatInfos: { className, title, classYear },
  setIsUpdateOpen,
  classId,
}: {
  seatInfos: ClassDetail;
  setIsUpdateOpen: (value: boolean) => void;
  classId: number;
}) {
  return (
    <>
      <XButton handleClick={() => handleClick(setIsUpdateOpen, false)} />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">クラス情報更新</h3>
      <form
        action={(formData: FormData) => {
          updateMyClassFormAction(formData, classId);
        }}
      >
        <div className="p-2">
          <h3>■ 年度</h3>
          <input
            type="number"
            name="classYear"
            placeholder="年度"
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            min={2023}
            max={9999}
            defaultValue={classYear}
          />
        </div>
        <div className="p-2">
          <h3>■ クラス</h3>
          <input
            type="text"
            name="className"
            placeholder="クラス"
            maxLength={10}
            size={20}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            defaultValue={className}
          />
        </div>
        <div className="p-2">
          <h3>■ タイトル</h3>
          <input
            type="text"
            name="title"
            placeholder="タイトル"
            maxLength={20}
            size={40}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            defaultValue={title}
          />
        </div>
        <div className="mt-7">
          <Button color="blue" message="更新" paddingXNum={2} justifyEnd />
        </div>
      </form>
    </>
  );
}
