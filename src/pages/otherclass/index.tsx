import ClassList from "@/components/Class/ClassList";

const OtherClass = () => {
  const classLabelList = [
    {
      classNum: "3-1",
      title: "他人Aの担任クラス",
      studentNum: 38,
      lastUpdate: "2023年12月23日",
    },
    {
      classNum: "3-2",
      title: "他人",
      studentNum: 38,
      lastUpdate: "2023年12月23日",
    },
    {
      classNum: "1-2",
      title: "他人Bの週末クラス",
      studentNum: 20,
      lastUpdate: "2023年10月23日",
    },
  ];

  return <ClassList classLabelList={classLabelList} pageTitle="Other classes" path="otherclass" />;
};

export default OtherClass;
