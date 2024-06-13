import { request } from "../request";
import { SchoolDetailList } from "./type";

export async function getSchoolList() {
  const response = await request("GET", "school/");
  return (await response.json()) as SchoolDetailList;
}
