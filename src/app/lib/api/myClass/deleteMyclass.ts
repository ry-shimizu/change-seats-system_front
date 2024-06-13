import { request } from "../request";

export async function deleteMyClass(formData: string) {
  await request("PUT", "myClass/delete", formData);
}
