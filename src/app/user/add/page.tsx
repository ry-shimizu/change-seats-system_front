import ComfirmModal from "@/app/components/ConfirmModal";
import Layout from "@/app/components/Layout";
import { getSchoolList } from "@/app/lib/api/school/get-schoolList";
import { registerSiteUser } from "@/app/lib/api/siteUser/register-siteuser";
import { redirect } from "next/navigation";
import AuthorityRadio from "../authority-radio";

export default async function UerAdd() {
  const formAction = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      loginId: formData.get("loginId"),
      authority: formData.get("authority"),
      userName: formData.get("userName"),
      password: formData.get("password"),
      schoolId: formData.get("schoolId") || 0,
    };
    registerSiteUser(JSON.stringify(rawFormData));
    redirect("/user");
  };

  const schoolList = await getSchoolList();
  return (
    <Layout pageTitle="ユーザー登録" contentWidth="w-1/3">
      <div className="bg-white rounded-xl w-full p-4">
        <form action={formAction} name="userAdd">
          <div className="p-2">
            <h3>■ ログインID</h3>
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <AuthorityRadio siteUserAuthority="1" schoolList={schoolList} />
          <div className="p-2">
            <h3>■ ユーザー名</h3>
            <input
              type="text"
              name="userName"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
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
          <ComfirmModal
            buttonMessage="登録"
            buttonColor="blue"
            contentMessage="登録しますか？"
            title="登録確認"
            formName="userAdd"
          />
        </form>
      </div>
    </Layout>
  );
}
