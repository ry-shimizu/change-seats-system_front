import { request } from "../request";

export async function registerSiteUser(formData: string) {
  return await request("POST", "siteUser/register", formData);
}
