import { request } from "../request";
import { SiteUserDetail } from "./type";

export async function getSiteUserDetail(userId: number) {
  const response = await request("GET", `siteUser/detail/${userId}`);
  return (await response.json()) as SiteUserDetail;
}
