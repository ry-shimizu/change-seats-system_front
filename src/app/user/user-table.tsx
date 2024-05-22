"use client";
import { useRouter } from "next/navigation";
import { SiteUserDetailList } from "../lib/api/siteUser/type";

export default function UserTable({
  siteUserDetailList,
}: {
  siteUserDetailList: SiteUserDetailList;
}) {
  const router = useRouter();
  const userList = siteUserDetailList.siteUserDetailList.map((siteUserDetail, key) => {
    return (
      <tr
        className=" hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          router.push("user/detail/" + siteUserDetail.id);
        }}
        key={key}
      >
        <td className="px-4 py-2 text-left">{siteUserDetail.loginId}</td>
        <td className="px-4 py-2 text-left">{siteUserDetail.userName}</td>
        <td className="px-4 py-2 text-left">
          {siteUserDetail.authority === "1" ? "ADMIN" : "GENERAL"}
        </td>
        <td>&gt;</td>
      </tr>
    );
  });

  return <>{userList}</>;
}
