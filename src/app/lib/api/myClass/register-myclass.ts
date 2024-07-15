import { request } from "../request";

export async function registerMyClass(formData: FormData) {
  return await request("POST", "myClass/register", formData);
}
