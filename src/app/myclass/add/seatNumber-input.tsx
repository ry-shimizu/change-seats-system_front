"use client";
import Button from "@/app/components/Button";
import { useState } from "react";

export default function SeatNumberImput() {
  const [seatTotal, setseatTotal] = useState([
    <input
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
        type="number"
        name={`seatTotalber${inputCount}`}
        className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        placeholder={`座席数(${inputCount}列目)`}
        min={1}
      />
    );
    setseatTotal((preValue) => [...preValue, addInputElement]);
  };

  const handleMinusClick = () => {
    const updatedseatTotal = [...seatTotal];
    updatedseatTotal.pop();
    setseatTotal(updatedseatTotal);
  };
  return (
    <div className="p-2">
      <h3>■ Seat number</h3>
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
    </div>
  );
}
