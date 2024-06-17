"use server";

import { deleteOtherClass } from "@/app/lib/api/otherClass/delete-otherclass";
import { registerOtherClass } from "@/app/lib/api/otherClass/register-otherclass";
import { redirect } from "next/navigation";

export async function addFormAction(formData: FormData) {
  const body = {
    siteUserId: 1,
    classId: formData.get("classId"),
  };
  // siteUserIdはセッションから取得
  await registerOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}

export async function deleteFormAction(formData: FormData) {
  const body = {
    siteUserId: 1,
    classId: formData.get("classId"),
  };
  // siteUserIdはセッションから取得
  await deleteOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}
