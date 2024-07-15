import Layout from "@/app/components/Layout";
import { getOtherClassList } from "@/app/lib/api/otherClass/get-otherclassList";
import AddTop from "./add-top";

export default async function OtherClassAdd() {
  const otherClassList = await getOtherClassList(
    JSON.stringify({ classYear: null, className: null, title: null })
  );

  return (
    <Layout pageTitle="他クラス登録" contentWidth="w-1/2">
      <AddTop otherClassList={otherClassList} />
    </Layout>
  );
}
