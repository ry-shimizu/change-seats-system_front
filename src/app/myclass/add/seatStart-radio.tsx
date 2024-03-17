"use client";
import { SetStateAction, useState } from "react";

export default function SeatStartRadio() {
  const [startSeat, setStartSeat] = useState("right");

  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStartSeat(e.target.value);
  };
  return (
    <div className="p-2">
      <h3>■ Seat start point</h3>
      <input
        id="right"
        type="radio"
        name="startPoint"
        value="right"
        checked={startSeat === "right"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="right" className="p-1">
        Right
      </label>
      <input
        id="left"
        type="radio"
        name="startPoint"
        value="left"
        checked={startSeat === "left"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="left" className="p-1">
        Left
      </label>
    </div>
  );
}
