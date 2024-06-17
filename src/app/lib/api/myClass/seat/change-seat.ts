import { request } from "../../request";
import { ClassDetail } from "../../type";

export async function changeSeat(formData: string) {
  const response = await request("PUT", "myClass/change/seat", formData);
  return (await response.json()) as ClassDetail;
}
