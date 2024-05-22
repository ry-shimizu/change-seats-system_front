import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function getSiteUserDetailList() {
  const response = await request("GET", "siteUser/");
  return (await response.json()) as SiteUserDetailList;
}
