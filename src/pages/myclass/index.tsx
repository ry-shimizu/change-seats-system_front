import ClassLabel from "@/components/Class/ClassLabel";
import Link from "next/link";

const MyClass = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2">
        <h2 className="font-serif text-4xl mb-2">My classes</h2>
        <div className="bg-white rounded-xl w-full h-full items-center flex flex-col">
          <ClassLabel
            classNum="3-1"
            title="僕の担任クラス"
            studentNum={38}
            lastUpdate="2023年12月23日"
          />
          <ClassLabel
            classNum="3-2"
            title="僕の副担クラス"
            studentNum={39}
            lastUpdate="2023年11月23日"
          />
          <ClassLabel
            classNum="1-2"
            title="週末クラス"
            studentNum={20}
            lastUpdate="2023年10月23日"
          />
          <Link
            href="/myclass/add"
            className="ml-auto mr-3 mt-auto mb-2 text-blue-400 hover:underline"
          >
            +新規登録
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
