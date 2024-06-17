"use server";

import { registerMyClass } from "@/app/lib/api/myClass/register-myclass";
import { redirect } from "next/navigation";

export const formAction = async (formData: FormData, seatTotal: number) => {
  "use server";
  const params = new FormData();
  const seatNumberList = [];

  for (let i = 1; i <= seatTotal; i++) {
    if (formData.get(`seatTotalber${i}`)) {
      seatNumberList.push({ seatNum: Number(formData.get(`seatTotalber${i}`)) });
    }
  }
  console.log(seatNumberList);
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
          schoolId: 1,
          siteUserId: 1,
          seatNumberList,
        }),
      ],
      { type: "application/json" }
    )
  );
  // schoolIdとsiteUserId
  registerMyClass(params);
  redirect("/myclass");
};
