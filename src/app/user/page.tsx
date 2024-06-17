import Layout from "../components/Layout";
import { getSiteUserDetailList } from "../lib/api/siteUser/get-siteuser-detailList";
import UserTop from "./user-top";

export default async function User() {
  const siteUserDetailList = await getSiteUserDetailList();

  return (
    <Layout pageTitle="ユーザー一覧" contentWidth="w-1/2">
      <UserTop siteUserDetailList={siteUserDetailList} />
    </Layout>
  );
}
