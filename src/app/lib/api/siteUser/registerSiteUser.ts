import { request } from "../request";

export async function registerSiteUser(formData: string) {
  await request("POST", "siteUser/register", formData);
}
