"use server";

import { deleteOtherClass } from "@/app/lib/api/otherClass/delete-otherclass";
import { registerOtherClass } from "@/app/lib/api/otherClass/register-otherclass";
import { redirect } from "next/navigation";

export async function addFormAction(formData: FormData) {
  const body = {
    classId: formData.get("classId"),
  };
  await registerOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}

export async function deleteFormAction(formData: FormData) {
  const body = {
    classId: formData.get("classId"),
  };
  await deleteOtherClass(JSON.stringify(body));
  redirect("/otherclass");
}
