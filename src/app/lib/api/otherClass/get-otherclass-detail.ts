import { request } from "../request";
import { ClassDetail } from "../type";

export async function getOtherClassDetail(classId: number) {
  const response = await request("POST", "otherClass/detail", JSON.stringify({ classId }));
  return (await response.json()) as ClassDetail;
}
