import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function searchSiteUser(path: string) {
  const response = await request("GET", path);
  return (await response.json()) as SiteUserDetailList;
}
