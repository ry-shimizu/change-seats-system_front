import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import Layout from "@/app/components/Layout";
import { getOtherClassDetail } from "@/app/lib/api/otherClass/get-otherclass-detail";
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
            {seatsInfo.myOtherClass ? (
              <form
                action={async () => {
                  "use server";
                  await deleteFormAction(JSON.stringify({ classId: params.id }));
                }}
                className="mt-auto ml-auto"
              >
                <Button color="red" message="削除" paddingXNum={2} justifyEnd />
              </form>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await addFormAction(JSON.stringify({ classId: params.id }));
                }}
                className="mt-auto ml-auto"
              >
                <Button color="blue" message="登録" paddingXNum={2} justifyEnd />
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
