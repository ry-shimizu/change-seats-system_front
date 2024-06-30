import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import Layout from "../components/Layout";
import { getSiteUserDetailList } from "../lib/api/siteUser/get-siteuser-detailList";
import UserTop from "./user-top";

export default async function User() {
  const userData = await getServerSession(nextAuthOptions);
  const siteUserDetailList = await getSiteUserDetailList(userData?.user.authority);

  return (
    <Layout pageTitle="ユーザー一覧" contentWidth="w-1/2">
      <UserTop siteUserDetailList={siteUserDetailList} authority={userData?.user.authority} />
    </Layout>
  );
}
