"use client";

import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { formAction } from "./action";
import SeatNumberImput from "./seat-number-input";
import SeatStartRadio from "./seat-start-radio";

export function AddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<{
    year: number;
    className: string;
    password: string | null;
    authority: string;
    registerSchoolId: number;
  }>();
  return (
    <form action={formAction}>
      <div className="p-2">
        <h3>■ 年度</h3>
        <input
          type="number"
          id="year"
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          min={2023}
          max={9999}
          {...register("year", {
            required: "年度は必須です。",
            max: { value: 2023, message: "2023年以降を入力してください。" },
            min: { value: 9999, message: "9999年以下を入力してください。" },
          })}
        />
        {errors.year && <div className="text-red-500 text-xs">{errors.year.message}</div>}
      </div>
      <div className="p-2">
        <h3>■ クラス</h3>
        <input
          type="text"
          id="className"
          placeholder="例）3-1"
          maxLength={10}
          size={20}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          {...register("className", {
            required: "クラス名は必須です。",
            maxLength: { value: 10, message: "10文字以内で入力してください。" },
          })}
        />
      </div>
      <div className="p-2">
        <h3>■ タイトル</h3>
        <input
          type="text"
          name="title"
          maxLength={20}
          size={40}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        />
      </div>
      <SeatStartRadio />
      <SeatNumberImput />
      <div className="p-2">
        <h3 className="mb-2">■ 生徒登録用CSVアップロード</h3>
        <input type="file" accept="text/csv" name="file" />
      </div>
      <Button color="blue" message="登録" paddingXNum={6} justifyEnd />
    </form>
  );
}
