"use server";

import { deleteOtherClass } from "@/app/lib/api/otherClass/deleteOtherClass";
import { registerOtherClass } from "@/app/lib/api/otherClass/registerOtherClass";
import { redirect } from "next/navigation";

export async function addFormAction(formData: FormData) {
  const body = {
    siteUserId: formData.get("siteUserId"),
    classId: formData.get("classId"),
  };
  await registerOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}

export async function deleteFormAction(formData: FormData) {
  const body = {
    siteUserId: formData.get("siteUserId"),
    classId: formData.get("classId"),
  };
  await deleteOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}
