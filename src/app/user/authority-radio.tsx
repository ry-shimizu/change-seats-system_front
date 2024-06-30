"use client";
import { useState } from "react";
import { Authority } from "../enum/Authority";
import { SchoolDetailList } from "../lib/api/school/type";

export default function AuthorityRadio({
  siteUserAuthority,
  authority,
  schoolId,
  schoolList,
}: {
  siteUserAuthority?: Authority;
  authority?: string;
  schoolId?: number;
  schoolList?: SchoolDetailList;
}) {
  const [authorityValue, setAuthorityValue] = useState(
    authority || (siteUserAuthority === "1" ? "1" : "2")
  );
  const [schoolIdValue, setSchoolIdValue] = useState(schoolId || 0);

  const handleStartSeatChange = (value: string) => {
    setAuthorityValue(value);
  };

  const optionList = schoolList?.schoolDetailList
    .filter((school) => {
      return school.id !== 0;
    })
    .map((school) => {
      return (
        <option key={school.id} value={school.id}>
          {school.schoolName}
        </option>
      );
    });

  return (
    <>
      <div className="p-2">
        <h3>■ 権限</h3>
        {siteUserAuthority === "1" && (
          <>
            <input
              id="admin"
              type="radio"
              name="authority"
              value="1"
              checked={authorityValue === "1"}
              onChange={(e) => handleStartSeatChange(e.target.value)}
            />
            <label htmlFor="admin" className="p-1">
              Admin
            </label>
          </>
        )}
        <input
          id="general"
          type="radio"
          name="authority"
          value="2"
          checked={authorityValue === "2"}
          onChange={(e) => handleStartSeatChange(e.target.value)}
        />
        <label htmlFor="general" className="p-1">
          General
        </label>
        <input
          id="schoolAdmin"
          type="radio"
          name="authority"
          value="3"
          checked={authorityValue === "3"}
          onChange={(e) => handleStartSeatChange(e.target.value)}
        />
        <label htmlFor="schoolAdmin" className="p-1">
          School Admin
        </label>
      </div>
      {siteUserAuthority === "1" && ["2", "3"].includes(authorityValue) && (
        <div className="p-2">
          <h3>■ 学校</h3>
          <select
            name="schoolId"
            autoComplete="on"
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            onChange={(e) => {
              setSchoolIdValue(Number(e.target.value));
            }}
            value={schoolIdValue}
          >
            {optionList}
          </select>
        </div>
      )}
    </>
  );
}
