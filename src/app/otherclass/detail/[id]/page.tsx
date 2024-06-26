import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import ConfirmModal from "@/app/components/ConfirmModal";
import Layout from "@/app/components/Layout";
import { getOtherClassDetail } from "@/app/lib/api/otherClass/get-otherclass-detail";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import { addFormAction, deleteFormAction } from "./action";

export default async function OtherClassDetail({ params }: { params: { id: number } }) {
  const seatsInfo = await getOtherClassDetail(params.id);

  return (
    <Layout pageTitle="他クラス詳細" contentWidth="w-1/2">
      <div className="bg-white rounded-xl w-full p-4 ">
        <BlackBoard title={seatsInfo.title} className={seatsInfo.className}>
          <Seat seatsInfo={seatsInfo} isOtherClassPage />
        </BlackBoard>

        <div className="mt-5 flex justify-end">
          <div className="flex px-1 cursor-pointer duration-300 hover:scale-110">
            <form action={addFormAction} name="otherClassAdd">
              <input type="hidden" name="classId" value={params.id} />
            </form>
            <form action={deleteFormAction} name="otherClassDlete">
              <input type="hidden" name="classId" value={params.id} />
            </form>
            {seatsInfo.myOtherClass ? (
              <ConfirmModal
                buttonMessage="削除"
                modalButtonMessage={<HiMinusCircle size="2.5rem" color="#ef4444" />}
                buttonColor="red"
                contentMessage="削除しますか？"
                title="削除確認"
                formName="otherClassDlete"
              />
            ) : (
              <ConfirmModal
                buttonMessage="登録"
                modalButtonMessage={<HiPlusCircle size="2.5rem" color="#75A9FF" />}
                buttonColor="blue"
                contentMessage="登録しますか？"
                title="登録確認"
                formName="otherClassAdd"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
