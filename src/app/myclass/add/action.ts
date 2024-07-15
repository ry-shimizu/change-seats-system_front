"use server";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { registerMyClass } from "@/app/lib/api/myClass/register-myclass";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function formAction(formData: FormData) {
  "use server";
  const params = new FormData();
  const seatNumberList = [];
  const seatTotal = formData.get("seatTotal") as unknown as number;

  for (let i = 1; i <= seatTotal; i++) {
    if (formData.get(`seatTotalber${i}`)) {
      seatNumberList.push({ seatNum: Number(formData.get(`seatTotalber${i}`)) });
    }
  }
  const userData = await getServerSession(nextAuthOptions);

  params.append("file", formData.get("file") as File);
  params.append(
    "data",
    new Blob(
      [
        JSON.stringify({
          year: formData.get("year"),
          className: formData.get("className"),
          title: formData.get("title"),
          seatStartPoint: formData.get("seatStartPoint"),
          seatNumberList,
          siteUserId: userData?.user.siteUserId,
          schoolId: userData?.user.schoolId,
        }),
      ],
      { type: "application/json" }
    )
  );
  const response = await registerMyClass(params);
  if (!response.ok) {
    return (await response.json()) as { errorMessage?: string };
  }
  redirect("/myclass");
}
