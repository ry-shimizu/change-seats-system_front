import { request } from "../request";
import { SiteUserDetailList } from "./type";

export async function searchSiteUser(formData: string) {
  const response = await request("POST", "siteUser/", formData);
  return (await response.json()) as SiteUserDetailList;
}
