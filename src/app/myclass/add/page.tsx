"use client";
import Button from "@/app/components/Button";
import Layout from "@/app/components/Layout";
import { useState } from "react";
import { formAction } from "./action";
import SeatNumberImput from "./seat-number-input";
import SeatStartRadio from "./seat-start-radio";

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
    <Layout pageTitle="マイクラス登録" contentWidth="w-1/2">
      <div className="bg-white rounded-xl w-full p-4">
        <form action={(formData: FormData) => formAction(formData, seatTotal.length)}>
          <div className="p-2">
            <h3>■ 年度</h3>
            <input
              type="number"
              name="year"
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
              placeholder="例）3-1"
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
    </Layout>
  );
}
