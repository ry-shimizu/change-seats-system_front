"use client";

import Button from "@/app/components/Button";
import ClassLabel from "@/app/components/Class/ClassLabel";
import { ClassList } from "@/app/lib/api/type";
import dayjs from "dayjs";
import { useFormState } from "react-dom";
import { formAction } from "./action";

export default function AddTop({ otherClassList }: { otherClassList: ClassList }) {
  const [tableData, dispatch] = useFormState(formAction, otherClassList);
  const classLabelElement = tableData.classList.map((classLabel) => {
    return (
      <span key={classLabel.classId}>
        <ClassLabel
          classId={classLabel.classId}
          classYear={classLabel.classYear}
          className={classLabel.className}
          title={classLabel.title}
          studentNum={classLabel.studentNum}
          lastUpdate={dayjs(classLabel.updatedDt).format("YYYY年MM月DD日")}
          isOtherClassFlg={true}
        />
      </span>
    );
  });
  return (
    <>
      <div className="bg-white rounded-xl w-full p-4">
        <form action={dispatch}>
          <div className="flex">
            <div className="p-2">
              <h3>Year</h3>
              <input
                type="number"
                name="classYear"
                placeholder="年度"
                className="border-2 rounded-md"
                min={2023}
                max={9999}
              />
            </div>
            <div className="p-2">
              <h3>Class</h3>
              <input
                type="text"
                name="className"
                placeholder="クラス"
                maxLength={10}
                size={20}
                className="border-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-grow">
            <div className="p-2 flex flex-col">
              <h3>Title</h3>
              <input
                type="text"
                name="title"
                placeholder="タイトル"
                maxLength={20}
                size={40}
                className="border-2 rounded-md"
              />
            </div>
            <div className="ml-auto mt-auto">
              <Button color="blue" message="Serch" paddingXNum={2} justifyEnd />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-3">{tableData.classList.length} classes found</div>
      <div className="bg-white rounded-xl w-full p-2">{classLabelElement}</div>
    </>
  );
}
