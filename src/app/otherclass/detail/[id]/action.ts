"use server";

import { deleteOtherClass } from "@/app/lib/api/otherClass/delete-otherclass";
import { registerOtherClass } from "@/app/lib/api/otherClass/register-otherclass";
import { redirect } from "next/navigation";

export async function addFormAction(formData: string) {
  await registerOtherClass(formData);
  redirect("/otherclass");
}

export async function deleteFormAction(formData: string) {
  await deleteOtherClass(formData);
  redirect("/otherclass");
}
