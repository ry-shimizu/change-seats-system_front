import { request } from "../request";
import { ClassDetail } from "../type";

export async function getMyClassDetail(classId: number, siteUserId: number, schoolId: number) {
  const response = await request(
    "POST",
    "myClass/detail",
    JSON.stringify({ classId, siteUserId, schoolId })
  );
  const classDetail = (await response.json()) as ClassDetail;

  return classDetail;
}
