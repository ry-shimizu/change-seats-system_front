import { request } from "../request";
import { ClassList } from "../type";

export async function getOtherClassList(formData?: string) {
  const response = await request("POST", "otherClass/search", formData && formData);
  return (await response.json()) as ClassList;
}
