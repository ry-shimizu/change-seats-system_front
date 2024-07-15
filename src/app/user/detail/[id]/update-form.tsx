"use client";

import Button from "@/app/components/Button";
import ModalContent from "@/app/components/ModalContent";
import { customStyles, handleClick } from "@/app/components/modal";
import { Authority } from "@/app/enum/Authority";
import { SchoolDetailList } from "@/app/lib/api/school/type";
import { SiteUserDetail } from "@/app/lib/api/siteUser/type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import AuthorityRadio from "../../authority-radio";
import { deleteFormAction, updateFormAction } from "./action";

export default function UpdateForm({
  siteUserDetail,
  authority,
  schoolList,
}: {
  siteUserDetail: SiteUserDetail;
  authority?: Authority;
  schoolList: SchoolDetailList;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<{
    loginId: string;
    userName: string;
    password: string | null;
    authority: string;
    registerSchoolId: number;
    updateSiteUserId?: number;
  }>();

  Modal.setAppElement("#app");
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit(async (data) => {
          setValue("updateSiteUserId", siteUserDetail.id);
          if (data.password === "") {
            setValue("password", null);
          }
          if (!data.registerSchoolId) {
            setValue("registerSchoolId", 0);
          }
          setIsUpdateOpen(true);
        })}
        className="w-4/5"
      >
        <div className="p-2">
          <h3>■ ログインID</h3>
          <input
            type="text"
            id="loginId"
            {...register("loginId", {
              required: "ログインIDは必須です。",
              maxLength: { value: 30, message: "30文字以内で入力してください。" },
              pattern: {
                value: /^[a-zA-Z0-9-]*$/,
                message: "半角英数字-(ハイフン)のみで入力してください。",
              },
            })}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            defaultValue={siteUserDetail.loginId}
          />
          {errors.loginId && <div className="text-red-500 text-xs">{errors.loginId.message}</div>}
        </div>
        <AuthorityRadio
          authority={siteUserDetail.authority}
          schoolId={siteUserDetail.schoolId}
          siteUserAuthority={authority}
          schoolList={schoolList}
          register={register}
        />
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
            defaultValue={siteUserDetail.userName}
          />
          {errors.userName && <div className="text-red-500 text-xs">{errors.userName.message}</div>}
        </div>
        <div className="p-2">
          <h3>■ パスワード</h3>
          <input
            type="password"
            id="password"
            {...register("password", {
              maxLength: { value: 255, message: "10文字以上255文字以内で入力してください。" },
              minLength: { value: 10, message: "10文字以上255文字以内で入力してください。" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9-_]*$/,
                message: "半角英大文字小文字・数字をそれぞれ最低1文字ずつ含む必要があります。",
              },
            })}
            className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
          />
          {errors.password && <div className="text-red-500 text-xs">{errors.password.message}</div>}
        </div>
        <Button color="blue" message="更新" paddingXNum={2} justifyEnd />
      </form>

      <Modal
        isOpen={isUpdateOpen}
        onRequestClose={() => handleClick(setIsUpdateOpen, false)}
        style={customStyles}
      >
        <ModalContent
          setIsDeleteOpen={setIsUpdateOpen}
          formAcition={() => updateFormAction(JSON.stringify(watch()))}
          isUpdate
          setError={setError}
        />
      </Modal>

      <Modal
        isOpen={isDeleteOpen}
        onRequestClose={() => handleClick(setIsDeleteOpen, false)}
        style={customStyles}
      >
        <ModalContent
          setIsDeleteOpen={setIsDeleteOpen}
          formAcition={() => deleteFormAction(JSON.stringify({ id: siteUserDetail.id }))}
        />
      </Modal>

      <div className="mt-auto ml-auto">
        <Button
          color="red"
          message="削除"
          paddingXNum={2}
          justifyEnd
          handleClick={() => handleClick(setIsDeleteOpen, true)}
        />
      </div>
    </div>
  );
}
