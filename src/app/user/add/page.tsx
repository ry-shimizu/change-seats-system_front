import Button from "@/app/components/Button";
import AuthorityRadio from "../authority-radio";

export default function UerAdd() {
  return (
    <div className="w-1/3 overflow-y-auto">
      <h2 className="font-serif text-4xl mb-2">User Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>■ Login Id</h3>
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <AuthorityRadio />
          <div className="p-2">
            <h3>■ User Name</h3>
            <input
              type="text"
              name="userName"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
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
          <Button color="blue" message="Regist" paddingXNum={6} justifyEnd />
        </form>
      </div>
    </div>
  );
}
