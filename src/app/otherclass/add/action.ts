"use server";

import { getOtherClassList } from "@/app/lib/api/otherClass/get-otherclassList";
import { ClassList } from "@/app/lib/api/type";

export async function formAction(state: ClassList, formData: FormData) {
  const body = {
    classYear: formData.get("classYear"),
    className: formData.get("className"),
    title: formData.get("title"),
  };
  // schoolIdを指定しない場合は、admin、指定する場合はそれ以外

  const response = await getOtherClassList(JSON.stringify(body));

  return response;
}
