"use server";
import { searchSiteUser } from "../lib/api/siteUser/searchSiteUser";
import { SiteUserDetailList } from "../lib/api/siteUser/type";

export async function formAction(state: SiteUserDetailList, formData: FormData) {
  const authority = [] as string[];
  formData.forEach((value, key) => {
    if (key === "authority") {
      authority.push(value as string);
    }
  });
  const authorityQuery = authority
    .map((value) => `authority=${encodeURIComponent(value)}`)
    .join("&");

  const response = await searchSiteUser(
    `siteUser/?loginId=${formData.get("loginId")}&userName=${formData.get(
      "userName"
    )}&${authorityQuery}`
  );

  return response;
}
