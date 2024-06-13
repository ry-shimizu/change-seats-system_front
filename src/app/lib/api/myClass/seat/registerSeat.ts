import { request } from "../../request";

export async function regiseterSeat(formData: string) {
  await request("POST", "myClass/register/seat", formData);
}
