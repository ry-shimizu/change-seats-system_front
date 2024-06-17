import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import Layout from "@/app/components/Layout";
import { getMyClassDetail } from "@/app/lib/api/myClass/get-myclass-detail";
import ActionButtons from "./action-buttons";

export default async function MyclassDetail({ params }: { params: { id: number } }) {
  const seatsInfo = await getMyClassDetail(params.id, 1, 1);
  // schoolIdと一致するクラス詳細ではない場合、404エラー

  return (
    <Layout pageTitle="マイクラス詳細" contentWidth="w-1/2">
      <div className="bg-white rounded-xl w-full p-4 ">
        <BlackBoard title={seatsInfo.title} className={seatsInfo.className}>
          <Seat seatsInfo={seatsInfo} />
        </BlackBoard>
        <ActionButtons seatsInfo={seatsInfo} classId={params.id} />
      </div>
    </Layout>
  );
}
