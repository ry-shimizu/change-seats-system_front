import { request } from "../request";
import { ClassList } from "../type";

export async function getOtherClassMyList(formData: string) {
  const response = await request("POST", "otherClass/myList", formData);
  return (await response.json()) as ClassList;
}
