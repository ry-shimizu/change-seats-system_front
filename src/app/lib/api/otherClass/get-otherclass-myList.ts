import { request } from "../request";
import { ClassList } from "../type";

export async function getOtherClassMyList() {
  const response = await request("POST", "otherClass/myList");
  return (await response.json()) as ClassList;
}
