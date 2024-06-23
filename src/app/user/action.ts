"use server";
import { searchSiteUser } from "../lib/api/siteUser/search-siteuser";
import { SiteUserDetailList } from "../lib/api/siteUser/type";

export async function formAction(state: SiteUserDetailList, formData: FormData) {
  const authority = [] as string[];
  formData.forEach((value, key) => {
    if (key === "authority") {
      authority.push(value as string);
    }
  });
  const isAdmin = true;
  const response = await searchSiteUser(
    JSON.stringify({
      loginId: formData.get("loginId"),
      userName: formData.get("userName"),
      schoolName: formData.get("schoolName"),
      authority,
      isAdmin,
    })
  );
  return response;
}
