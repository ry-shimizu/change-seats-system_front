import { request } from "../request";
import { ClassDetail } from "../type";

export async function getOtherClassDetail(siteUserId: number, classId: number, schoolId: number) {
  const response = await request(
    "POST",
    "otherClass/detail",
    JSON.stringify({ siteUserId, classId, schoolId })
  );
  return (await response.json()) as ClassDetail;
}
