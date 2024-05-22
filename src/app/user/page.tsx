import { getSiteUserDetailList } from "../lib/api/siteUser/getSiteUserDetailList";
import UserTop from "./user-top";

export default async function User() {
  const siteUserDetailList = await getSiteUserDetailList();

  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-mono text-3xl mb-2">ユーザー管理画面</h2>
      <UserTop siteUserDetailList={siteUserDetailList} />
    </div>
  );
}
