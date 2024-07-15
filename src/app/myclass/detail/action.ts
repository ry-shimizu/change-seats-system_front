"use server";

import { SeatStartPoint } from "@/app/enum/SeatStartPoint";
import { deleteMyClass } from "@/app/lib/api/myClass/delete-myclass";
import { changeSeat } from "@/app/lib/api/myClass/seat/change-seat";
import { deleteSeat } from "@/app/lib/api/myClass/seat/delete-seat";
import { regiseterSeat } from "@/app/lib/api/myClass/seat/register-seat";
import { updateSeat } from "@/app/lib/api/myClass/seat/update-seat";
import { updateMyClassInfo } from "@/app/lib/api/myClass/update-myclassinfo";
import { redirect } from "next/navigation";

export async function addSeatFormAction(
  formData: FormData,
  classId: string,
  seatNumber: number,
  emptySeat: boolean
) {
  regiseterSeat(
    JSON.stringify({
      seatNumber,
      studentName: formData.get("studentName"),
      sexType: formData.get("sexType") || "3",
      isEmptySeat: emptySeat,
      classId: Number(classId),
    })
  );

  redirect(`/myclass/detail/${classId}`);
}

export async function updateSeatFormAction(
  formData: FormData,
  classId: string,
  seatId: number,
  studentId: number,
  emptySeat: boolean
) {
  updateSeat(
    JSON.stringify({
      seatId,
      studentId,
      studentName: formData.get("studentName"),
      sexType: formData.get("sexType") || "3",
      isEmptySeat: emptySeat,
      classId: Number(classId),
    })
  );
  redirect(`/myclass/detail/${classId}`);
}

export async function deleteSeatFormAction(
  seatNumber: number,
  classId: string,
  seatId: number,
  studentId: number
) {
  deleteSeat(
    JSON.stringify({
      seatNumber,
      seatId,
      studentId,
      classId: Number(classId),
    })
  );
  redirect(`/myclass/detail/${classId}`);
}

export async function deleteMyClassFormAction(classId: number) {
  deleteMyClass(
    JSON.stringify({
      classId,
    })
  );
  redirect("/myclass");
}

export async function updateMyClassFormAction(formData: string) {
  updateMyClassInfo(formData);
  redirect("/myclass");
}

export async function changeSeatormAction(
  formData: FormData,
  classId: number,
  enumSeatStartPoint: SeatStartPoint,
  formDataCount: number,
  isChangeCondition: boolean
) {
  const changeSeatConditionList = [];
  const seatIds = new Set();
  if (isChangeCondition && formDataCount > 0) {
    for (let i = 0; i < formDataCount; i++) {
      const seatId = Number(formData.get(`changeSeatNum${i}`));
      if (seatIds.has(seatId)) {
        return "エラー：生徒が重複しています。" as string;
      }

      seatIds.add(seatId);

      const changeCondition = {
        seatId,
        studentId: Number(formData.get(`studentId${seatId}`)),
        conditionX: formData.get(`conditionX${i}`),
        positionXColumn: formData.get(`positionXColumn${i}`)
          ? Number(formData.get(`positionXColumn${i}`))
          : null,
        conditionY: formData.get(`conditionY${i}`),
        positionYColumn: formData.get(`positionYColumn${i}`)
          ? Number(formData.get(`positionYColumn${i}`))
          : null,
      };
      changeSeatConditionList.push(changeCondition);
    }
  }

  return await changeSeat(
    JSON.stringify({
      changeSeatConditionList,
      enumSeatStartPoint,
      classId,
    })
  );
}
