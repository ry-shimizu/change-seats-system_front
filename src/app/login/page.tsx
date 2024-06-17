import Button from "../components/Button";
import Label from "../components/Label";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-mono text-3xl mb-3 mt-20">ログイン</h2>
      <form action="">
        <div className="border-2 rounded-xl shadow-xl py-10 px-20 flex flex-col justify-center items-center">
          <div className="justify-start">
            <Label name="ログインID" />
            <input
              type="text"
              name="loginId"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="justify-start mt-5">
            <Label name="パスワード" />
            <input
              type="password"
              name="password"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="justify-start mt-10">
            <Button color="blue" message="ログイン" paddingXNum={2} />
          </div>
        </div>
      </form>
    </div>
  );
}
