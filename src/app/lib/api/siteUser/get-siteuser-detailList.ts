import { Authority } from "@/app/enum/Authority";
import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function getSiteUserDetailList(authority?: Authority) {
  const isAdmin = authority === "1";
  const response = await request(
    "POST",
    "siteUser/",
    JSON.stringify({
      isAdmin,
    })
  );
  return (await response.json()) as SiteUserDetailList;
}
