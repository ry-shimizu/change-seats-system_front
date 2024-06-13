"use client";
import Link from "next/link";
import { useFormState } from "react-dom";
import Button from "../components/Button";
import { SiteUserDetailList } from "../lib/api/siteUser/type";
import { formAction } from "./action";
import UserTable from "./user-table";

export default function UserTop({
  siteUserDetailList,
}: {
  siteUserDetailList: SiteUserDetailList;
}) {
  const [tableData, dispatch] = useFormState(formAction, siteUserDetailList);
  const authority = 1;
  return (
    <>
      <div className="bg-white rounded-xl w-full p-4">
        <form action={dispatch}>
          <div className="flex">
            <div className="p-2 mx-2">
              <h3>■ ログインID</h3>
              <input
                type="text"
                name="loginId"
                size={20}
                className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              />
            </div>
            <div className="p-2 mx-2">
              <h3>■ ユーザー名</h3>
              <input
                type="text"
                name="userName"
                size={20}
                className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              />
            </div>
            {authority === 1 && (
              <>
                <div className="p-2 mx-2">
                  <h3>■ 学校名</h3>
                  <input
                    type="text"
                    name="schoolName"
                    size={20}
                    className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex">
            <div className="p-2 mx-2">
              <h3>■ 権限</h3>
              {authority === 1 && (
                <>
                  <input
                    id="admin"
                    type="checkbox"
                    name="authority"
                    value="1"
                    className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
                  />
                  <label htmlFor="admin" className="pl-1 pr-2">
                    Admin
                  </label>
                </>
              )}
              <input
                id="general"
                type="checkbox"
                name="authority"
                value="2"
                className="border-2 rounded-md"
              />
              <label htmlFor="general" className="pl-1 pr-2">
                General
              </label>
              <input
                id="schoolAdmin"
                type="checkbox"
                name="authority"
                value="3"
                className="border-2 rounded-md"
              />
              <label htmlFor="schoolAdmin" className="pl-1 pr-2">
                School Admin
              </label>
            </div>
            <div className="ml-auto mt-auto">
              <Button color="blue" message="Serch" paddingXNum={2} justifyEnd />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-2 justify-end flex">
        <Link href={"user/add"} className="text-blue-400 hover:underline">
          +新規登録
        </Link>
      </div>
      <div className="mt-3">{tableData.siteUserDetailList.length} users found</div>
      <div className="bg-white rounded-xl w-full p-2">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ログインID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ユーザー名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  権限
                </th>
                {authority === 1 && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    学校名
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <UserTable siteUserDetailList={tableData} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
