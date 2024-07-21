import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import Layout from "@/app/components/Layout";
import { getSchoolList } from "@/app/lib/api/school/get-schoolList";
import { getServerSession } from "next-auth";
import AddForm from "./add-form";

export default async function UerAdd() {
  const schoolList = await getSchoolList();
  const userData = await getServerSession(nextAuthOptions);
  const authority = userData?.user.authority;
  return (
    <Layout pageTitle="ユーザー登録" contentWidth="w-1/3">
      <div className="bg-white rounded-xl w-full p-4">
        <AddForm authority={authority} schoolList={schoolList} schoolId={userData?.user.schoolId} />
      </div>
    </Layout>
  );
}
