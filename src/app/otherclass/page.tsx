import ClassList from "@/app/components/Class/ClassList";
import { getOtherClassMyList } from "../lib/api/otherClass/get-otherclass-myList";

export default async function OtherClass() {
  const otherClassList = await getOtherClassMyList();
  return <ClassList classLabelList={otherClassList} pageTitle="他クラス" path="otherclass" />;
}
