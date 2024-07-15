"use client";

import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { formAction } from "./action";
import SeatNumberImput from "./seat-number-input";
import SeatStartRadio from "./seat-start-radio";

export function AddForm() {
  const {
    register,
    trigger,
    formState: { errors },
    setError,
  } = useForm<{
    year: number;
    className: string;
    title: string;
    seatStartPoint: string;
    file: File;
    seatTotalber1: number;
  }>();

  return (
    <form
      action={async (formData) => {
        trigger();
        if (!errors) {
          const response = await formAction(formData);
          response &&
            setError("seatTotalber1", { message: response.errorMessage, type: "validate" });
        }
      }}
    >
      <div className="p-2">
        <h3>■ 年度</h3>
        <input
          type="number"
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          min={2023}
          max={9999}
          {...register("year", {
            required: "年度は必須です。",
            min: { value: 2023, message: "2023年以降を入力してください。" },
            max: { value: 9999, message: "9999年以下を入力してください。" },
          })}
          name="year"
        />
        {errors.year && <div className="text-red-500 text-xs">{errors.year.message}</div>}
      </div>
      <div className="p-2">
        <h3>■ クラス</h3>
        <input
          type="text"
          placeholder="例）3-1"
          maxLength={10}
          size={20}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          {...register("className", {
            required: "クラス名は必須です。",
            maxLength: { value: 10, message: "10文字以内で入力してください。" },
          })}
          name="className"
        />
        {errors.className && <div className="text-red-500 text-xs">{errors.className.message}</div>}
      </div>
      <div className="p-2">
        <h3>■ タイトル</h3>
        <input
          type="text"
          maxLength={20}
          size={40}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          {...register("title", {
            required: "タイトルは必須です。",
            maxLength: { value: 20, message: "20文字以内で入力してください。" },
          })}
          name="title"
        />
        {errors.title && <div className="text-red-500 text-xs">{errors.title.message}</div>}
      </div>
      <SeatStartRadio register={register} />
      <SeatNumberImput register={register} error={errors.seatTotalber1} />
      <div className="p-2">
        <h3 className="mb-2">■ 生徒登録用CSVアップロード</h3>
        <input
          type="file"
          accept="text/csv"
          {...register("file", {
            required: "CSVファイルは必須です。",
            validate: (data) => {
              if (data.type !== "text/csv") {
                return "csvファイルを選択してください。";
              }
              if (data.size > 10 * 1024 * 1024) {
                return "ファイルサイズは10MB以下にしてください";
              }
            },
          })}
          name="file"
        />
        {errors.file && <div className="text-red-500 text-xs">{errors.file.message}</div>}
      </div>
      <Button color="blue" message="登録" paddingXNum={6} justifyEnd />
    </form>
  );
}
