import ClassLabel from "@/components/Class/ClassLabel";
import Link from "next/link";

const ClassList = ({
  classLabelList,
  pageTitle,
  path,
}: {
  classLabelList: {
    classId: number;
    classNum: string;
    title: string;
    studentNum: number;
    lastUpdate: string;
  }[];
  pageTitle: string;
  path: string;
}) => {
  const classLabelElement = classLabelList.map((classLabel) => {
    return (
      <ClassLabel
        classId={classLabel.classId}
        classNum={classLabel.classNum}
        title={classLabel.title}
        studentNum={classLabel.studentNum}
        lastUpdate={classLabel.lastUpdate}
        isOtherClassAddFlg={false}
      />
    );
  });

  return (
    <div className="w-1/2">
      <h2 className="font-serif text-4xl mb-2">{pageTitle}</h2>
      <div className="bg-white rounded-xl w-full h-full items-center flex flex-col">
        {classLabelElement}
        <Link
          href={`/${path}/add`}
          className="ml-auto mr-3 mt-auto mb-2 text-blue-400 hover:underline"
        >
          +新規登録
        </Link>
      </div>
    </div>
  );
};

export default ClassList;
