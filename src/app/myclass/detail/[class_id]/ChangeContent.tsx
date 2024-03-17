"use clinet";
import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import { useState } from "react";
import XButton from "./XButton";
import { SeatInfo } from "./page";

export default function ChangeContent({
  seatInfos,
  handleClick,
}: {
  seatInfos: SeatInfo;
  handleClick: () => void;
}) {
  const [isChangeCondition, setIsChangeCondition] = useState(false);
  const handlesetIsChangeCondition = (e: { target: { checked: boolean } }) => {
    setIsChangeCondition(e.target.checked);
  };
  const changePullDown = seatInfos.flatMap((seatInfo) => {
    return seatInfo.seatDetails.map((seatDetail) => {
      return (
        <option value={String(seatDetail.seatNumber)}>
          {String(seatDetail.seatNumber) + ":" + seatDetail.studentName}
        </option>
      );
    });
  });

  const colPullDown = seatInfos.map((seatInfo) => {
    return <option value={String(seatInfo.col)}>{String(seatInfo.col)}</option>;
  });

  const linePullDown = seatInfos
    .flatMap((seatInfo) => {
      return seatInfo.seatDetails.map((seatDetail) => {
        return String(seatDetail.seatLine);
      });
    })
    .reduce((acc: string[], duplicateSeatLine) => {
      if (!acc.includes(duplicateSeatLine)) {
        acc.push(duplicateSeatLine);
      }
      return acc;
    }, [])
    .map((seatLine) => {
      return <option value={seatLine}>{seatLine}</option>;
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
          <span className="p-1">列目</span>
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
          <span className="p-1">列目</span>
        </div>
      </div>
    </div>
  );

  const [seatChangeTotal, setSeatChangeTotal] = useState([changeCondition]);

  const handleAddClick = () => {
    const inputCount = seatChangeTotal.length + 1;
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
      <XButton handleClick={handleClick} />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Change</h2>
      <BlackBoard>
        <Seat seatInfos={seatInfos} />
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
        <Button color="blue" message="Save" paddingXNum={2} justifyEnd />
        <Button color="green" message="Change" paddingXNum={2} justifyEnd />
      </div>
    </>
  );
}
