import Button from "@/app/components/Button";
import Link from "next/link";
import UserTable from "./user-table";

export default function User() {
  const userInfos = [
    {
      userId: 1,
      userName: "反町 隆",
      authority: "admin",
      loginId: "takashi",
    },
    {
      userId: 2,
      userName: "松嶋 菜々子",
      authority: "admin",
      loginId: "nanako",
    },
    {
      userId: 3,
      userName: "松原 せいや",
      authority: "general",
      loginId: "seiya",
    },
  ];

  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-serif text-4xl mb-2">User Managements</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="flex">
            <div className="p-2">
              <h3>■ Login ID</h3>
              <input
                type="text"
                name="userId"
                maxLength={10}
                size={10}
                className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              />
            </div>
            <div className="p-2">
              <h3>■ Name</h3>
              <input
                type="text"
                name="userName"
                maxLength={20}
                size={20}
                className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              />
            </div>
          </div>
          <div className="p-2">
            <h3>■ authority</h3>
            <input
              id="admin"
              type="checkbox"
              name="authority"
              value="admin"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
            <label htmlFor="admin" className="pl-1 pr-2">
              Admin
            </label>
            <input
              id="general"
              type="checkbox"
              name="authority"
              value="general"
              className="border-2 rounded-md"
            />
            <label htmlFor="general" className="pl-1 pr-2">
              General
            </label>
          </div>
          <Button color="blue" message="Serch" paddingXNum={6} justifyEnd />
        </form>
      </div>
      <div className="mt-2 justify-end flex">
        <Link href={"user/add"} className="text-blue-400 hover:underline">
          +新規登録
        </Link>
      </div>
      <div className="mt-3">3 users found</div>
      <div className="bg-white rounded-xl w-full p-2">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Login ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Authority
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <UserTable userInfos={userInfos} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
