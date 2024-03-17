import Button from "@/app/components/Button";
import AuthorityRadio from "../../authority-radio";

export default function UerDetail() {
  const userInfo = {
    userId: 1,
    userName: "反町 隆",
    authority: "general",
    loginId: "takashi",
  };
  return (
    <div className="w-1/3 overflow-y-auto">
      <h2 className="font-serif text-4xl mb-2">User Detail</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>■ Login Id</h3>
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              value={userInfo.loginId}
            />
          </div>
          <AuthorityRadio value={userInfo.authority} />
          <div className="p-2">
            <h3>■ User Name</h3>
            <input
              type="text"
              name="userName"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              value={userInfo.userName}
            />
          </div>
          <div className="p-2">
            <h3>■ Password</h3>
            <input
              type="password"
              name="password"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button color="blue" message="Update" paddingXNum={2} />
            <Button color="red" message="Delete" paddingXNum={2} />
          </div>
        </form>
      </div>
    </div>
  );
}
