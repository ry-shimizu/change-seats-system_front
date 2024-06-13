"use client";
import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import { handleClick } from "@/app/components/modal";
import { ClassDetail } from "@/app/lib/api/type";
import { useState } from "react";
import XButton from "./x-button";

export default function ChangeSeat({
  seatInfos,
  setIsChangeOpen,
}: {
  seatInfos: ClassDetail;
  setIsChangeOpen: (value: boolean) => void;
}) {
  const [isChangeCondition, setIsChangeCondition] = useState(false);
  const handlesetIsChangeCondition = (e: { target: { checked: boolean } }) => {
    setIsChangeCondition(e.target.checked);
  };
  const changePullDown = seatInfos.seatsAddColInfo.flatMap((seatInfo, seatInfoIndex) => {
    return seatInfo.seatsInfo.map((seatDetail, seatDetailIndex) => {
      return (
        <option value={String(seatDetail.seatNumber)} key={`${seatInfoIndex}-${seatDetailIndex}`}>
          {String(seatDetail.seatNumber) + ":" + seatDetail.studentName}
        </option>
      );
    });
  });

  const colPullDown = seatInfos.seatsAddColInfo.map((seatInfo, index) => {
    return (
      <option value={String(seatInfo.col)} key={index}>
        {String(seatInfo.col)}
      </option>
    );
  });

  const linePullDown = seatInfos.seatsAddColInfo
    .flatMap((seatInfo) => {
      return seatInfo.seatsInfo.map((seatInfo) => {
        return String(seatInfo.seatNumber % 10);
      });
    })
    .reduce((acc: string[], duplicateSeatLine) => {
      if (!acc.includes(duplicateSeatLine)) {
        acc.push(duplicateSeatLine);
      }
      return acc;
    }, [])
    .map((seatLine, seatLineIndex) => {
      return (
        <option value={seatLine} key={seatLineIndex}>
          {seatLine}
        </option>
      );
    });

  const changeCondition = (
    <div className="mb-2 flex items-center">
      <select
        name="changeSeatNum"
        className="appearance-none h-1/2 bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
      >
        <option>選択してください ▼</option>
        {changePullDown}
      </select>

      <div className="flex flex-col p-2">
        <div className="p-1">
          <select
            name="positionY"
            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
          >
            <option value="before">前</option>
            <option value="after">後ろ</option>
          </select>
          <span className="p-1">から</span>
          <select
            name="colSeatNum"
            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
          >
            <option>&nbsp;&nbsp;&nbsp;</option>
            {linePullDown}
          </select>
          <span className="p-1">列目まで</span>
        </div>

        <div className="p-1">
          <select
            name="positionX"
            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
          >
            <option value="right">右　</option>
            <option value="left">左　</option>
          </select>
          <span className="p-1">から</span>
          <select
            name="colSeatNum"
            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
          >
            <option>&nbsp;&nbsp;&nbsp;</option>
            {colPullDown}
          </select>
          <span className="p-1">列目まで</span>
        </div>
      </div>
    </div>
  );

  const [seatChangeTotal, setSeatChangeTotal] = useState([changeCondition]);

  const handleAddClick = () => {
    const addInputElement = changeCondition;
    setSeatChangeTotal((preValue) => [...preValue, addInputElement]);
  };

  const handleMinusClick = () => {
    const updatedseatTotal = [...seatChangeTotal];
    updatedseatTotal.pop();
    setSeatChangeTotal(updatedseatTotal);
  };

  return (
    <>
      <XButton handleClick={() => handleClick(setIsChangeOpen, false)} />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">席替え</h2>
      <BlackBoard>
        <Seat seatsInfo={seatInfos} />
      </BlackBoard>
      <input
        id="isChangeConditions"
        type="checkbox"
        className="border-2 rounded-md"
        checked={isChangeCondition}
        onChange={handlesetIsChangeCondition}
      />
      <label htmlFor="isChangeConditions" className="pl-1 text-sm">
        席替え条件有り
      </label>
      {isChangeCondition && (
        <form action="" className="mb-10 mt-2">
          {seatChangeTotal}
          <div className="flex">
            <Button
              color="blue"
              message="+"
              handleClick={handleAddClick}
              paddingXNum={0}
              px={"2"}
              py={"0"}
            />
            {seatChangeTotal.length > 1 && (
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
        </form>
      )}
      <div className="mt-5 flex justify-end">
        <Button color="blue" message="更新" paddingXNum={2} justifyEnd />
        <Button color="green" message="席替え" paddingXNum={2} justifyEnd />
      </div>
    </>
  );
}
