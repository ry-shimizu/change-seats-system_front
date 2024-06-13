import { request } from "../request";

export async function registerMyClass(formData: FormData) {
  const response = await request("POST", "myClass/register", formData);
}
