import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function getSiteUserDetailList() {
  const isAdmin = true;
  const schoolId = 0;

  const response = await request(
    "POST",
    "siteUser/",
    JSON.stringify({
      schoolId,
      isAdmin,
    })
  );
  return (await response.json()) as SiteUserDetailList;
}
