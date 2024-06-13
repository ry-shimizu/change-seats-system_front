"use server";

import { deleteMyClass } from "@/app/lib/api/myClass/deleteMyclass";
import { deleteSeat } from "@/app/lib/api/myClass/seat/deleteSeat";
import { regiseterSeat } from "@/app/lib/api/myClass/seat/registerSeat";
import { updateSeat } from "@/app/lib/api/myClass/seat/updateSeat";
import { updateMyClassInfo } from "@/app/lib/api/myClass/updateMyClassInfo";
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
