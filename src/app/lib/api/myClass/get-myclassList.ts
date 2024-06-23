import { request } from "../request";
import { ClassList } from "../type";

export async function getMyClassList() {
  const response = await request("POST", "myClass/");
  return response.json() as ClassList;
}
