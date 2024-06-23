import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function getSiteUserDetailList() {
  const isAdmin = true;
  const response = await request(
    "POST",
    "siteUser/",
    JSON.stringify({
      isAdmin,
    })
  );
  return (await response.json()) as SiteUserDetailList;
}
