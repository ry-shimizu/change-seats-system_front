import Button from "@/common/Button";

const OtherClassAdd = () => {
  return (
    <div className="w-1/2 overflow-y-scroll mt-16">
      <h2 className="font-serif text-4xl mb-2">Other classes Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>Class</h3>
            <input
              type="text"
              name="className"
              placeholder="クラス"
              maxLength={10}
              size={20}
              className="border-2"
            />
          </div>
          <div className="p-2">
            <h3>Title</h3>
            <input
              type="text"
              name="title"
              placeholder="タイトル"
              maxLength={20}
              size={40}
              className="border-2"
            />
          </div>
          <Button color="blue" message="serch" />
        </form>
      </div>
    </div>
  );
};
export default OtherClassAdd;
