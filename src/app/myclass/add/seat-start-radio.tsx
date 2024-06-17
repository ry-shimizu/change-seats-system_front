"use client";
import { SetStateAction, useState } from "react";

export default function SeatStartRadio() {
  const [startSeat, setStartSeat] = useState("1");

  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStartSeat(e.target.value);
  };
  return (
    <div className="p-2">
      <h3>■ 座席開始位置</h3>
      <input
        id="right"
        type="radio"
        name="seatStartPoint"
        value="1"
        checked={startSeat === "1"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="right" className="p-1">
        右
      </label>
      <input
        id="left"
        type="radio"
        name="seatStartPoint"
        value="2"
        checked={startSeat === "2"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="left" className="p-1">
        左
      </label>
    </div>
  );
}
