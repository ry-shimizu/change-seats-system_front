import { request } from "../../request";

export async function updateSeat(formData: string) {
  await request("PUT", "myClass/update/seat", formData);
}
