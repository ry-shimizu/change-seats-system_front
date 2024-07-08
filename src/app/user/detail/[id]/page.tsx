import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import Layout from "@/app/components/Layout";
import { getSchoolList } from "@/app/lib/api/school/get-schoolList";
import { getSiteUserDetail } from "@/app/lib/api/siteUser/get-siteuser-detail";
import { getServerSession } from "next-auth";
import UpdateForm from "./update-form";

export default async function UserDetail({ params }: { params: { id: number } }) {
  const siteUserDetail = await getSiteUserDetail(params.id);
  const userData = await getServerSession(nextAuthOptions);
  const authority = userData?.user.authority;

  const schoolList = await getSchoolList();

  return (
    <Layout pageTitle="ユーザー詳細" contentWidth="w-1/3">
      <div className="bg-white rounded-xl w-full p-4">
        <UpdateForm siteUserDetail={siteUserDetail} authority={authority} schoolList={schoolList} />
      </div>
    </Layout>
  );
}
