"use server";
import { registerSiteUser } from "@/app/lib/api/siteUser/register-siteuser";
import { redirect } from "next/navigation";

export async function formAction(formData: string) {
  const response = await registerSiteUser(formData);
  if (!response.ok) {
    return (await response.json()) as { errorMessage?: string };
  }
  redirect("/user");
}
