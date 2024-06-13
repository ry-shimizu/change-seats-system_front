import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import { getMyClassDetail } from "@/app/lib/api/myClass/getMyClassDetail";
import ActionButtons from "./action-buttons";

export default async function MyclassDetail({ params }: { params: { id: number } }) {
  const seatsInfo = await getMyClassDetail(params.id, 1, 1);
  // schoolIdと一致するクラス詳細ではない場合、404エラー

  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-mono text-3xl mb-2">マイクラス詳細</h2>
      <div className="bg-white rounded-xl w-full p-4 ">
        <BlackBoard title={seatsInfo.title} className={seatsInfo.className}>
          <Seat seatsInfo={seatsInfo} />
        </BlackBoard>
        <ActionButtons seatsInfo={seatsInfo} classId={params.id} />
      </div>
    </div>
  );
}
