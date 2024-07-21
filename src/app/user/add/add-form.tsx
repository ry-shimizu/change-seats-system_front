"use client";

import Button from "@/app/components/Button";
import { Authority } from "@/app/enum/Authority";
import { SchoolDetailList } from "@/app/lib/api/school/type";
import { useForm } from "react-hook-form";
import AuthorityRadio from "../authority-radio";
import { formAction } from "./action";

export default function AddForm({
  authority,
  schoolList,
  schoolId,
}: {
  authority?: Authority;
  schoolList: SchoolDetailList;
  schoolId?: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<{
    loginId: string;
    userName: string;
    password: string | null;
    authority: string;
    registerSchoolId: number;
  }>();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (!data.registerSchoolId && authority === "1") {
          setValue("registerSchoolId", 0);
        } else {
          if (schoolId) {
            setValue("registerSchoolId", schoolId);
          }
        }
        const response = await formAction(JSON.stringify(data));
        if (response) {
          if (response.errorMessage) {
            setError("loginId", { message: response.errorMessage, type: "validate" });
          }
        }
      })}
    >
      <div className="p-2">
        <h3>■ ログインID</h3>
        <input
          type="text"
          id="loginId"
          {...register("loginId", {
            required: "ログインIDは必須です。",
            maxLength: { value: 50, message: "30文字以内で入力してください。" },
            pattern: {
              value: /^[a-zA-Z0-9-]*$/,
              message: "半角英数字-(ハイフン)のみで入力してください。",
            },
          })}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        />
        {errors.loginId && <div className="text-red-500 text-xs">{errors.loginId.message}</div>}
      </div>
      <AuthorityRadio siteUserAuthority={authority} schoolList={schoolList} register={register} />
      <div className="p-2">
        <h3>■ ユーザー名</h3>
        <input
          type="text"
          id="userName"
          {...register("userName", {
            required: "ユーザー名は必須です。",
            maxLength: { value: 40, message: "40文字以内で入力してください。" },
          })}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        />
        {errors.userName && <div className="text-red-500 text-xs">{errors.userName.message}</div>}
      </div>
      <div className="p-2">
        <h3>■ パスワード</h3>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "パスワードは必須です。",
            maxLength: { value: 255, message: "10文字以上255文字以内で入力してください。" },
            minLength: { value: 10, message: "10文字以上255文字以内で入力してください。" },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9-_]*$/,
              message: "半角英大文字小文字・数字をそれぞれ最低1文字ずつ含む必要があります。",
            },
          })}
          className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        />
        <div className="text-xs text-gray-300">・10文字以上</div>
        <div className="text-xs text-gray-300 mb-2">
          ・半角英大文字小文字、数字をそれぞれ最低1文字ずつ
        </div>
        {errors.password && <div className="text-red-500 text-xs">{errors.password.message}</div>}
      </div>
      <Button color="blue" message="登録" paddingXNum={2} justifyEnd />
    </form>
  );
}
