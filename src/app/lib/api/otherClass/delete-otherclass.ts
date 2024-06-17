import { request } from "../request";

export async function deleteOtherClass(formData: string) {
  await request("PUT", "otherClass/delete", formData);
}
