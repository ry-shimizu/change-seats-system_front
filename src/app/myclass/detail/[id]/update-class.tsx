import Button from "@/app/components/Button";
import { handleClick } from "@/app/components/modal";
import { ClassDetail } from "@/app/lib/api/type";
import { useForm } from "react-hook-form";
import { updateMyClassFormAction } from "../action";
import XButton from "./x-button";

export default function UpdateClass({
  seatInfos: { className, title, classYear },
  setIsUpdateOpen,
  classId,
}: {
  seatInfos: ClassDetail;
  setIsUpdateOpen: (value: boolean) => void;
  classId: number;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    classYear: number;
    className: string;
    title: string;
    classId: number;
  }>();

  return (
    <>
      <XButton handleClick={() => handleClick(setIsUpdateOpen, false)} />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">クラス情報更新</h3>
      <form
        onSubmit={handleSubmit(async (data) => {
          data.classId = classId;
          updateMyClassFormAction(JSON.stringify(data));
        })}
      >
        <div className="p-2">
          <h3>■ 年度</h3>
          <input
            type="number"
            id="classYear"
            placeholder="年度"
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            min={2023}
            max={9999}
            defaultValue={classYear}
            {...register("classYear", {
              required: "年度は必須です。",
              min: { value: 2023, message: "2023年以降を入力してください。" },
              max: { value: 9999, message: "9999年以下を入力してください。" },
            })}
          />
          {errors.classYear && (
            <div className="text-red-500 text-xs">{errors.classYear.message}</div>
          )}
        </div>
        <div className="p-2">
          <h3>■ クラス</h3>
          <input
            type="text"
            id="className"
            placeholder="クラス"
            maxLength={10}
            size={20}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            defaultValue={className}
            {...register("className", {
              required: "クラス名は必須です。",
              maxLength: { value: 10, message: "10文字以内で入力してください。" },
            })}
          />
          {errors.className && (
            <div className="text-red-500 text-xs">{errors.className.message}</div>
          )}
        </div>
        <div className="p-2">
          <h3>■ タイトル</h3>
          <input
            type="text"
            id="title"
            placeholder="タイトル"
            maxLength={20}
            size={40}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            defaultValue={title}
            {...register("title", {
              required: "タイトルは必須です。",
              maxLength: { value: 20, message: "20文字以内で入力してください。" },
            })}
          />
          {errors.title && <div className="text-red-500 text-xs">{errors.title.message}</div>}
        </div>
        <div className="mt-7">
          <Button color="blue" message="更新" paddingXNum={2} justifyEnd />
        </div>
      </form>
    </>
  );
}
