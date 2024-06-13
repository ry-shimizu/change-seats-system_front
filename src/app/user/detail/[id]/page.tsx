import ComfirmModal from "@/app/components/ConfirmModal";
import { getSchoolList } from "@/app/lib/api/school/getSchoolList";
import { deleteSiteUser } from "@/app/lib/api/siteUser/deleteSiteUser";
import { getSiteUserDetail } from "@/app/lib/api/siteUser/getSiteUserDetail";
import { updateSiteUser } from "@/app/lib/api/siteUser/updateSiteUser";
import { redirect } from "next/navigation";
import AuthorityRadio from "../../authority-radio";

export default async function UserDetail({ params }: { params: { id: number } }) {
  const siteUserDetail = await getSiteUserDetail(params.id);
  const updateFormAction = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      updateSiteUserId: params.id,
      loginSiteUserId: 1,
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
    <div className="w-1/3 overflow-y-auto">
      <h2 className="font-mono text-3xl mb-2">ユーザー詳細画面</h2>
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
            siteUserAuthority="1"
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
    </div>
  );
}
