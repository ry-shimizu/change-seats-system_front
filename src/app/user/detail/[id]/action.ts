"use server";
import { deleteSiteUser } from "@/app/lib/api/siteUser/delete-siteuser";
import { updateSiteUser } from "@/app/lib/api/siteUser/update-siteuser";
import { redirect } from "next/navigation";

export async function updateFormAction(formData: string) {
  const response = await updateSiteUser(formData);
  if (!response.ok) {
    return (await response.json()) as { errorMessage?: string };
  }
  redirect("/user");
}

export async function deleteFormAction(formData: string) {
  await deleteSiteUser(formData);
  redirect("/user");
}
