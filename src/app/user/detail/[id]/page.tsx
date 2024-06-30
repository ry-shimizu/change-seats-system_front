import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ComfirmModal from "@/app/components/ConfirmModal";
import Layout from "@/app/components/Layout";
import { getSchoolList } from "@/app/lib/api/school/get-schoolList";
import { deleteSiteUser } from "@/app/lib/api/siteUser/delete-siteuser";
import { getSiteUserDetail } from "@/app/lib/api/siteUser/get-siteuser-detail";
import { updateSiteUser } from "@/app/lib/api/siteUser/update-siteuser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AuthorityRadio from "../../authority-radio";

export default async function UserDetail({ params }: { params: { id: number } }) {
  const siteUserDetail = await getSiteUserDetail(params.id);
  const userData = await getServerSession(nextAuthOptions);
  const authority = userData?.user.authority;

  const updateFormAction = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      updateSiteUserId: params.id,
      loginId: formData.get("loginId"),
      authority: formData.get("authority"),
      userName: formData.get("userName"),
      password: formData.get("password"),
      schoolId: formData.get("schoolId") || 0,
    }; // ログイン情報のschoolId
    updateSiteUser(JSON.stringify(rawFormData));
    redirect("/user");
  };

  const deleteFormAction = async () => {
    "use server";
    const rawFormData = {
      id: params.id,
    };
    deleteSiteUser(JSON.stringify(rawFormData));
    redirect("/user");
  };

  const schoolList = await getSchoolList();

  return (
    <Layout pageTitle="ユーザー詳細" contentWidth="w-1/3">
      <div className="bg-white rounded-xl w-full p-4">
        <form action={updateFormAction} name="userUpdate">
          <div className="p-2">
            <h3>■ ログインID</h3>
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              defaultValue={siteUserDetail.loginId}
            />
          </div>
          <AuthorityRadio
            authority={siteUserDetail.authority}
            schoolId={siteUserDetail.schoolId}
            siteUserAuthority={authority}
            schoolList={schoolList}
          />
          <div className="p-2">
            <h3>■ ユーザー名</h3>
            <input
              type="text"
              name="userName"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              defaultValue={siteUserDetail.userName}
            />
          </div>
          <div className="p-2">
            <h3>■ パスワード</h3>
            <input
              type="password"
              name="password"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="flex justify-end mt-5">
            <ComfirmModal
              buttonMessage="更新"
              buttonColor="blue"
              contentMessage="更新しますか？"
              title="更新確認"
              formName="userUpdate"
            />
            <ComfirmModal
              buttonMessage="削除"
              buttonColor="red"
              contentMessage="削除しますか？"
              title="削除確認"
              formName="userDelete"
            />
          </div>
        </form>
        <form action={deleteFormAction} name="userDelete"></form>
      </div>
    </Layout>
  );
}
