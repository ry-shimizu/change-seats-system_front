"use client";
import { SetStateAction, useState } from "react";

export default function AuthorityRadio({ value = "admin" }: { value?: string }) {
  const [authority, setAuthority] = useState(value);

  const handleStartSeatChange = (e: { target: { value: SetStateAction<string> } }) => {
    setAuthority(e.target.value);
  };
  return (
    <div className="p-2">
      <h3>■ Authority</h3>
      <input
        id="admin"
        type="radio"
        name="authority"
        value="admin"
        checked={authority === "admin"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="admin" className="p-1">
        Admin
      </label>
      <input
        id="general"
        type="radio"
        name="authority"
        value="general"
        checked={authority === "general"}
        onChange={handleStartSeatChange}
      />
      <label htmlFor="general" className="p-1">
        General
      </label>
    </div>
  );
}
