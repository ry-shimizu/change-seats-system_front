"use client";
import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import { handleClick } from "@/app/components/modal";
import { ClassDetail } from "@/app/lib/api/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { changeSeatormAction } from "../action";
import XButton from "./x-button";

export default function ChangeSeat({
  seatInfos,
  setIsChangeOpen,
  classId,
}: {
  seatInfos: ClassDetail;
  setIsChangeOpen: (value: boolean) => void;
  classId: number;
}) {
  const [isChangeCondition, setIsChangeCondition] = useState(false);
  const [seatInfoState, setSeatInfoState] = useState<ClassDetail>(seatInfos);

  const handlesetIsChangeCondition = (e: { target: { checked: boolean } }) => {
    e.target.checked && seatChangeTotal.length === 0 && setSeatChangeTotal([""]);
    setIsChangeCondition(e.target.checked);
  };
  const changePullDown = seatInfoState.seatsAddColInfo.flatMap((seatInfo) => {
    return seatInfo.seatsInfo.map((seatDetail) => {
      if (seatDetail.studentName) {
        return (
          <option value={String(seatDetail.seatId)} key={seatDetail.seatId}>
            {seatDetail.studentName}
          </option>
        );
      }
    });
  });

  const hiddenInput = seatInfoState.seatsAddColInfo.flatMap((seatInfo) => {
    return seatInfo.seatsInfo.map((seatDetail) => {
      if (seatDetail.studentName) {
        return (
          <input
            type="hidden"
            name={`studentId${seatDetail.seatId}`}
            value={seatDetail.studentId}
            key={seatDetail.seatId}
          />
        );
      }
    });
  });

  const colPullDown = seatInfoState.seatsAddColInfo.map((seatInfo, index) => {
    return (
      <option value={String(seatInfo.col)} key={index}>
        {String(seatInfo.col)}
      </option>
    );
  });

  const linePullDown = seatInfoState.seatsAddColInfo
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

  const [seatChangeTotal, setSeatChangeTotal] = useState<string[]>([]);

  const handleAddClick = () => {
    setSeatChangeTotal((preValue) => [...preValue, ""]);
  };

  const handleMinusClick = () => {
    const updatedseatTotal = [...seatChangeTotal];
    updatedseatTotal.pop();
    setSeatChangeTotal(updatedseatTotal);
  };

  const changeCondition = seatChangeTotal.map((value, index) => {
    return (
      <div key={index} className="mb-2 flex items-center">
        <select
          name={`changeSeatNum${index}`}
          id={`changeSeatNum${index}`}
          className="appearance-none h-1/2 bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
        >
          <option id="changeSeatNumDefault">選択してください ▽</option>
          {changePullDown}
        </select>
        <div className="flex flex-col p-2">
          <div className="p-1">
            <select
              name={`conditionY${index}`}
              id={`conditionY${index}`}
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option value="3">前</option>
              <option value="4">後ろ</option>
            </select>
            <span className="p-1">から</span>
            <select
              name={`positionYColumn${index}`}
              id={`positionYColumn${index}`}
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>{""}</option>
              {linePullDown}
            </select>
            <span className="p-1">列目まで</span>
          </div>

          <div className="p-1">
            <select
              name={`conditionX${index}`}
              id={`conditionX${index}`}
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option value="1">右　</option>
              <option value="2">左　</option>
            </select>
            <span className="p-1">から</span>
            <select
              name={`positionXColumn${index}`}
              id={`positionXColumn${index}`}
              className="appearance-none bg-white border border-gray-300 hover:border-gray-500 p-1 rounded leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>{""}</option>
              {colPullDown}
            </select>
            <span className="p-1">列目まで</span>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    seatChangeTotal.forEach((_, index) => {
      const positionYColumnElement = document.getElementById(
        `positionYColumn${index}`
      ) as HTMLSelectElement;

      if (positionYColumnElement) {
        positionYColumnElement.selectedIndex = 0;
      }

      const conditionYElement = document.getElementById(`conditionY${index}`) as HTMLSelectElement;

      if (conditionYElement) {
        conditionYElement.selectedIndex = 0;
      }

      const conditionXElement = document.getElementById(`conditionX${index}`) as HTMLSelectElement;

      if (conditionXElement) {
        conditionXElement.selectedIndex = 0;
      }

      const positionXColumnElement = document.getElementById(
        `positionXColumn${index}`
      ) as HTMLSelectElement;
      if (positionXColumnElement) {
        positionXColumnElement.selectedIndex = 0;
      }
      const changeSeatNumDefault = document.getElementById(
        `changeSeatNum${index}`
      ) as HTMLSelectElement;
      if (changeSeatNumDefault) {
        changeSeatNumDefault.selectedIndex = 0;
      }
    });
  }, [seatInfoState]);

  const router = useRouter();
  return (
    <>
      <XButton handleClick={() => handleClick(setIsChangeOpen, false)} />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">席替え</h2>
      <BlackBoard>
        <Seat seatsInfo={seatInfoState} />
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
      <form
        action={async (formData: FormData) => {
          // 同じ人は選べないようにする
          const response = await changeSeatormAction(
            formData,
            classId,
            seatInfos.seatStartPoint,
            changeCondition.length,
            isChangeCondition
          );
          setSeatChangeTotal([""]);
          setSeatInfoState(response);
        }}
        className=" mt-2"
      >
        {hiddenInput}

        {isChangeCondition && (
          <>
            {changeCondition}
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
          </>
        )}
        <div className="mt-5 flex justify-end">
          <Button color="green" message="席替え" paddingXNum={2} justifyEnd />
          <Button
            color="blue"
            message="完了"
            paddingXNum={2}
            justifyEnd
            handleClick={() => {
              handleClick(setIsChangeOpen, false);
              router.refresh();
            }}
          />
        </div>
      </form>
    </>
  );
}
