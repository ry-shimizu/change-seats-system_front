"use client";
import Button from "@/app/components/Button";
import { SetStateAction, useState } from "react";

export default function MyClassAdd() {
  const [seatTotal, setseatTotal] = useState([
    <input
      type="number"
      name="seatTotalber1"
      className="border-2 rounded-md"
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
        className="border-2 rounded-md"
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

  const [startSeat, setStartSeat] = useState("right");

  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStartSeat(e.target.value);
  };

  return (
    <div className="w-1/2 overflow-y-auto mt-16">
      <h2 className="font-serif text-4xl mb-2">My classes Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>■ Year</h3>
            <input
              type="number"
              name="year"
              placeholder="年度"
              className="border-2 rounded-md"
              min={2023}
              max={9999}
            />
          </div>
          <div className="p-2">
            <h3>■ Class</h3>
            <input
              type="text"
              name="className"
              placeholder="クラス"
              maxLength={10}
              size={20}
              className="border-2 rounded-md"
            />
          </div>
          <div className="p-2">
            <h3>■ Title</h3>
            <input
              type="text"
              name="title"
              placeholder="タイトル"
              maxLength={20}
              size={40}
              className="border-2 rounded-md"
            />
          </div>
          <div className="p-2">
            <h3>■ Seat start point</h3>
            <input
              type="radio"
              name="startPoint"
              value="right"
              checked={startSeat === "right"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">Left</span>
            <input
              type="radio"
              name="startPoint"
              value="left"
              checked={startSeat === "left"}
              onChange={handleStartSeatChange}
            />
            <span className="p-1">Right</span>
          </div>
          <div className="p-2">
            <h3>■ Seat number</h3>
            {seatTotal.map((inputElement, index) => (
              <div key={index} className="mb-2">
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
          <div className="p-2">
            <h3 className="mb-2">■ Student regist CSV Upload</h3>
            <input type="file" accept="text/csv" />
          </div>
          <Button color="blue" message="Regist" paddingXNum={6} justifyEnd />
        </form>
      </div>
    </div>
  );
}
