import { request } from "../request";

export async function registerMyClass(formData: FormData) {
  await request("POST", "myClass/register", formData);
}
