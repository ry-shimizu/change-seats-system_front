import ClassList from "@/app/components/Class/ClassList";

export default function MyClass() {
  const classLabelList = [
    {
      classId: 1,
      classNum: "3-1",
      title: "僕の担任クラス",
      studentNum: 38,
      lastUpdate: "2023年12月23日",
    },
    {
      classId: 2,
      classNum: "3-5",
      title: "僕の担任クラス",
      studentNum: 5,
      lastUpdate: "2023年04月23日",
    },
    {
      classId: 3,
      classNum: "2-2",
      title: "週末うううう12文字最大",
      studentNum: 38,
      lastUpdate: "2023年10月23日",
    },
  ];

  return <ClassList classLabelList={classLabelList} pageTitle="My classes" path="myclass" />;
}
