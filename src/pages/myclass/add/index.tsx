const Add = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2">
        <h2 className="font-serif text-4xl mb-2">My classes Add</h2>
        <div className="bg-white rounded-xl w-full h-full flex flex-col">
          <form action="">
            <div className="p-4">
              <h3>Class name</h3>
              <input
                type="text"
                name="className"
                placeholder="クラス名"
                maxLength={10}
                size={20}
                className="border-2"
              />
            </div>
            <div className="p-4">
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
            <div className="p-4">
              <h3>Seat start point</h3>
              <input type="radio" name="startPoint" value="right" checked />
              <span className="p-1">Right</span>
              <input type="radio" name="startPoint" value="left" />
              <span className="p-1">Left</span>
            </div>
            <div className="p-4">
              <h3>Student regist CSV Upload</h3>
              <input type="file" accept="text/csv" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
