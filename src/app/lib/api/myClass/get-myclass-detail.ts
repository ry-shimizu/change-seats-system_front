import { request } from "../request";
import { ClassDetail } from "../type";

export async function getMyClassDetail(classId: number) {
  const response = await request("POST", "myClass/detail", JSON.stringify({ classId }));
  const classDetail = (await response.json()) as ClassDetail;

  return classDetail;
}
