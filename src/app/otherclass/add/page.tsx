import { getOtherClassList } from "@/app/lib/api/otherClass/getOtherClassList";
import AddTop from "./add-top";

export default async function OtherClassAdd() {
  const otherClassList = await getOtherClassList(
    JSON.stringify({ classYear: null, className: null, title: null, siteUserId: 1 })
  );

  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-mono text-3xl mb-2">他クラス登録</h2>
      <AddTop otherClassList={otherClassList} />
    </div>
  );
}
