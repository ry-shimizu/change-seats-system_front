import TopIconButton from "@/app/components/Top/TopIconButton";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import Layout from "../components/Layout";

export default async function Top() {
  const userData = await getServerSession(nextAuthOptions);

  return (
    <Layout pageTitle="トップメニュー" contentWidth="w-1/2">
      <div className="w-full justify-center flex mt-5">
        <TopIconButton iconItem="PiChalkboardTeacherLight" item="My classes" path="/myclass" />
        <TopIconButton iconItem="PiChalkboardTeacherFill" item="Other classes" path="/otherclass" />
        {userData?.user.authority !== "2" && (
          <TopIconButton iconItem="HiOutlineUserCircle" item="User Managements" path="/user" />
        )}
      </div>
    </Layout>
  );
}
