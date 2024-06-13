import { request } from "../../request";

export async function deleteSeat(formData: string) {
  await request("PUT", "myClass/delete/seat", formData);
}
