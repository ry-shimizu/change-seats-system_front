import { request } from "../request";
import { ClassList } from "../type";

export async function getMyClassList(siteUserId: number) {
  const response = await request("POST", "myClass/", JSON.stringify({ siteUserId }));
  return response.json() as ClassList;
}
