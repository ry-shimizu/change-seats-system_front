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
  // siteUserIdはセッションから取得
  regiseterSeat(
    JSON.stringify({
      seatNumber,
      studentName: formData.get("studentName"),
      sexType: formData.get("sexType") || "3",
      isEmptySeat: emptySeat,
      siteUserId: 1,
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
  // siteUserIdはセッションから取得

  updateSeat(
    JSON.stringify({
      seatId,
      studentId,
      studentName: formData.get("studentName"),
      sexType: formData.get("sexType") || "3",
      isEmptySeat: emptySeat,
      siteUserId: 1,
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
  // siteUserIdはセッションから取得
  deleteMyClass(
    JSON.stringify({
      siteUserId: 1,
      schoolId: 1,
      classId,
    })
  );
  redirect("/myclass");
}

export async function updateMyClassFormAction(formData: FormData, classId: number) {
  // siteUserIdはセッションから取得
  updateMyClassInfo(
    JSON.stringify({
      title: formData.get("title"),
      className: formData.get("className"),
      classYear: formData.get("classYear"),
      siteUserId: 1,
      schoolId: 1,
      classId,
    })
  );
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
  if (isChangeCondition && formDataCount > 0) {
    for (let i = 0; i < formDataCount; i++) {
      const seatId = Number(formData.get(`changeSeatNum${i}`));
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

  // siteUserIdはセッションから取得
  return await changeSeat(
    JSON.stringify({
      changeSeatConditionList,
      enumSeatStartPoint,
      siteUserId: 1,
      schoolId: 1,
      classId,
    })
  );
}
