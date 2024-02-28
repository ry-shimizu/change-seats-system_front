import Button from "@/app/common/Button";
import ClassLabel from "@/app/components/Class/ClassLabel";

export default function OtherClassAdd() {
  const classLabelList = [
    {
      classId: 7,
      classNum: "3-1",
      title: "僕の担任クラス",
      studentNum: 38,
      lastUpdate: "2023年12月23日",
    },
    {
      classId: 8,
      classNum: "3-5",
      title: "僕の担任クラス",
      studentNum: 5,
      lastUpdate: "2023年04月23日",
    },
    {
      classId: 9,
      classNum: "2-2",
      title: "週末うううう12文字最大",
      studentNum: 38,
      lastUpdate: "2023年10月23日",
    },
    {
      classId: 10,
      classNum: "2-2",
      title: "週末うううう12文字最大",
      studentNum: 38,
      lastUpdate: "2023年10月23日",
    },
    {
      classId: 11,
      classNum: "2-2",
      title: "週末うううう12文字最大",
      studentNum: 38,
      lastUpdate: "2023年10月23日",
    },
  ];

  const classLabelElement = classLabelList.map((classLabel) => {
    return (
      <ClassLabel
        classId={classLabel.classId}
        classNum={classLabel.classNum}
        title={classLabel.title}
        studentNum={classLabel.studentNum}
        lastUpdate={classLabel.lastUpdate}
        isOtherClassAddFlg={true}
      />
    );
  });

  return (
    <div className="w-1/2 overflow-y-auto mt-16">
      <h2 className="font-serif text-4xl mb-2">Other classes Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="flex">
            <div className="p-2">
              <h3>Year</h3>
              <input
                type="number"
                name="year"
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
          <div className="p-2">
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
          <Button color="blue" message="serch" />
        </form>
      </div>
      <div className="mt-3">5 classes found</div>
      <div className="bg-white rounded-xl w-full p-2">{classLabelElement}</div>
    </div>
  );
}
