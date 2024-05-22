import { request } from "../request";
import { ClassDetail } from "../type";

export async function getOtherClassDetail(siteUserId: number, classId: number) {
  const response = await request(
    "POST",
    "otherClass/detail",
    JSON.stringify({ siteUserId: siteUserId, classId: classId })
  );
  return (await response.json()) as ClassDetail;
}
