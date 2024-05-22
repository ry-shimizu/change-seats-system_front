"use client";
import { useState } from "react";

export default function AuthorityRadio({ value = "1" }: { value?: string }) {
  const [authority, setAuthority] = useState(value);

  const handleStartSeatChange = (value: string) => {
    setAuthority(value);
  };

  return (
    <div className="p-2">
      <h3>■ 権限</h3>
      <input
        id="admin"
        type="radio"
        name="authority"
        value="1"
        checked={authority === "1"}
        onChange={(e) => handleStartSeatChange(e.target.value)}
      />
      <label htmlFor="admin" className="p-1">
        Admin
      </label>
      <input
        id="general"
        type="radio"
        name="authority"
        value="2"
        checked={authority === "2"}
        onChange={(e) => handleStartSeatChange(e.target.value)}
      />
      <label htmlFor="general" className="p-1">
        General
      </label>
    </div>
  );
}
