import { request } from "../request";

export async function updateMyClassInfo(formData: string) {
  await request("PUT", "myClass/update", formData);
}
