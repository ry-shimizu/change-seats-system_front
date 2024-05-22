import { request } from "../request";

export async function registerOtherClass(formData: string) {
  await request("POST", "otherClass/register", formData);
}
