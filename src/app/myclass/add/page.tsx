"use client";
import Button from "@/app/components/Button";
import { useState } from "react";
import { formAction } from "./action";
import SeatNumberImput from "./seatNumber-input";
import SeatStartRadio from "./seatStart-radio";

export default function MyClassAdd() {
  const [seatTotal, setSeatTotal] = useState([
    <input
      type="number"
      name="seatTotalber1"
      className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
      placeholder="座席数(1列目)"
      min={1}
    />,
  ]);

  return (
    <div className="w-1/2">
      <h2 className="font-mono text-3xl mb-2">マイクラス登録</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action={(formData: FormData) => formAction(formData, seatTotal.length)}>
          <div className="p-2">
            <h3>■ 年度</h3>
            <input
              type="number"
              name="year"
              placeholder="年度"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              min={2023}
              max={9999}
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
            />
          </div>
          <SeatStartRadio />
          <SeatNumberImput seatTotal={seatTotal} setSeatTotal={setSeatTotal} />
          <div className="p-2">
            <h3 className="mb-2">■ 生徒登録用CSVアップロード</h3>
            <input type="file" accept="text/csv" name="file" />
          </div>
          <Button color="blue" message="登録" paddingXNum={6} justifyEnd />
        </form>
      </div>
    </div>
  );
}
