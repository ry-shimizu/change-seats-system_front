import { request } from "../request";

export async function updateSiteUser(formData: string) {
  return await request("PUT", "siteUser/update", formData);
}
