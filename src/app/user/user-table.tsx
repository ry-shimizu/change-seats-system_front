"use client";
import { useRouter } from "next/navigation";

export default function UserTable({
  userInfos,
}: {
  userInfos: { userId: number; userName: string; loginId: string; authority: string }[];
}) {
  const router = useRouter();

  const userList = userInfos.map((userInfo, index) => {
    return (
      <tr
        className=" hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          router.push("user/detail/" + userInfo.userId);
        }}
      >
        <td>{userInfo.loginId}</td>
        <td>{userInfo.userName}</td>
        <td>{userInfo.authority}</td>
        <td>&gt;</td>
      </tr>
    );
  });

  return <>{userList}</>;
}
