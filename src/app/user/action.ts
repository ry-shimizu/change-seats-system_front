"use server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { searchSiteUser } from "../lib/api/siteUser/search-siteuser";
import { SiteUserDetailList } from "../lib/api/siteUser/type";

export async function formAction(state: SiteUserDetailList, formData: FormData) {
  const authority = [] as string[];
  formData.forEach((value, key) => {
    if (key === "authority") {
      authority.push(value as string);
    }
  });
  const userData = await getServerSession(nextAuthOptions);

  const isAdmin = userData?.user.authority === "1";
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
