import { request } from "../request";

export async function deleteSiteUser(formData: string) {
  await request("PUT", "siteUser/delete", formData);
}
