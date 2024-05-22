import ClassLabel from "@/app/components/Class/ClassLabel";
import { ClassList } from "@/app/lib/api/type";
import dayjs from "dayjs";
import Link from "next/link";

export default function ClassList({
  classLabelList,
  pageTitle,
  path,
}: {
  classLabelList: ClassList;
  pageTitle: string;
  path: string;
}) {
  const classLabelElement = classLabelList.classList.map((classLabel) => {
    return (
      <ClassLabel
        classId={classLabel.classId}
        className={classLabel.className}
        classYear={classLabel.classYear}
        title={classLabel.title}
        studentNum={classLabel.studentNum}
        lastUpdate={dayjs(classLabel.updatedDt).format("YYYY年MM月DD日")}
        isOtherClassFlg={path === "otherclass" ? true : false}
      />
    );
  });

  return (
    <div className="w-1/2">
      <h2 className="font-mono text-3xl mb-2">{pageTitle}</h2>
      <div className="bg-white rounded-xl w-full h-full items-center flex flex-col p-2">
        {classLabelElement}
      </div>
      <div className="flex justify-end mt-1">
        <Link
          href={`/${path}/add`}
          className="ml-auto mr-3 mt-auto mb-2 text-blue-400 hover:underline"
        >
          +新規登録
        </Link>
      </div>
    </div>
  );
}
