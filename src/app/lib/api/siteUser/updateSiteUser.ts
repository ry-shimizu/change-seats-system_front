import { request } from "../request";

export async function updateSiteUser(formData: string) {
  await request("PUT", "siteUser/update", formData);
}
