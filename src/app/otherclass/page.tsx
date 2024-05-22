import ClassList from "@/app/components/Class/ClassList";
import { getOtherClassMyList } from "../lib/api/otherClass/getOtherClassMyList";

export default async function OtherClass() {
  const otherClassList = await getOtherClassMyList(JSON.stringify({ siteUserId: 1 }));
  return <ClassList classLabelList={otherClassList} pageTitle="他クラス" path="otherclass" />;
}
