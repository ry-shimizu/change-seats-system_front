"use client";
import Button from "@/app/components/Button";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export default function SeatNumberImput({
  register,
  error,
}: {
  register: UseFormRegister<{
    year: number;
    className: string;
    title: string;
    seatStartPoint: string;
    file: File;
    seatTotalber1: number;
  }>;
  error?: FieldError;
}) {
  const [seatTotal, setSeatTotal] = useState([
    <input
      {...register("seatTotalber1", {
        required: "座席数(1列目)は必須です。",
        min: { value: 1, message: "1以上を入力してください。" },
        max: { value: 9, message: "8以下を入力してください。" },
      })}
      type="number"
      name="seatTotalber1"
      className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
      placeholder="座席数(1列目)"
      min={1}
    />,
  ]);

  const handleAddClick = () => {
    const inputCount = seatTotal.length + 1;
    const addInputElement = (
      <input
        {...register("seatTotalber1", {
          min: { value: 1, message: "1以上を入力してください。" },
          max: { value: 9, message: "8以下を入力してください。" },
        })}
        type="number"
        name={`seatTotalber${inputCount}`}
        className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        placeholder={`座席数(${inputCount}列目)`}
        min={1}
      />
    );
    setSeatTotal((preValue) => [...preValue, addInputElement]);
  };

  const handleMinusClick = () => {
    const updatedseatTotal = [...seatTotal];
    updatedseatTotal.pop();
    setSeatTotal(updatedseatTotal);
  };

  return (
    <div className="p-2">
      <h3>■ 座席数</h3>
      {seatTotal.map((inputElement, index) => (
        <div key={index} className="mb-2 focus:outline-none">
          {inputElement}
        </div>
      ))}
      <div className="flex">
        <Button
          color="blue"
          message="+"
          handleClick={handleAddClick}
          paddingXNum={0}
          px={"2"}
          py={"0"}
        />
        {seatTotal.length > 1 && (
          <Button
            color="red"
            message="-"
            handleClick={handleMinusClick}
            paddingXNum={0}
            px={"2"}
            py={"0"}
          />
        )}
      </div>
      {error && <div className="text-red-500 text-xs mt-2">{error.message}</div>}
      <input type="hidden" name="seatTotal" value={seatTotal.length} />
    </div>
  );
}
