import ClassList from "@/components/Class/ClassList";

const MyClass = () => {
  const classLabelList = [
    {
      classNum: "3-1",
      title: "僕の担任クラス",
      studentNum: 38,
      lastUpdate: "2023年12月23日",
    },
    {
      classNum: "3-2",
      title: "僕の副担クラス",
      studentNum: 39,
      lastUpdate: "2023年2月23日",
    },
    {
      classNum: "1-2",
      title: "僕の週末クラス",
      studentNum: 20,
      lastUpdate: "2023年10月23日",
    },
  ];

  return <ClassList classLabelList={classLabelList} pageTitle="My classes" path="myclass" />;
};

export default MyClass;
