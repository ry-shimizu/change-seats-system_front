import ClassList from "@/app/components/Class/ClassList";
import { getMyClassList } from "../lib/api/myClass/get-myclassList";

export default async function MyClass() {
  const myClassList = await getMyClassList();

  return <ClassList classLabelList={myClassList} pageTitle="マイクラス" path="myclass" />;
}
