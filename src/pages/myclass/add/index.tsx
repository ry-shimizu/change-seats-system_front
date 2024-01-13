import { useState } from "react";

const Add = () => {
  const intialInputElement = (
    <input
      type="number"
      name="seatNumber1"
      className="border-2"
      placeholder="座席数(1列目)"
      min={1}
    />
  );
  const [seatNum, setSeatNum] = useState([intialInputElement]);

  const handleAddClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const inputCount = seatNum.length + 1;
    const addInputElement = (
      <input
        type="number"
        name={`seatNumber${inputCount}`}
        className="border-2"
        placeholder={`座席数(${inputCount}列目)`}
        min={1}
      />
    );
    setSeatNum((preValue) => [...preValue, addInputElement]);
  };

  const handleMinusClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updatedSeatNum = [...seatNum];
    updatedSeatNum.pop();
    setSeatNum(updatedSeatNum);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2 overflow-y-scroll mt-16">
        <h2 className="font-serif text-4xl mb-2">My classes Add</h2>
        <div className="bg-white rounded-xl w-full p-4">
          <form action="">
            <div className="p-2">
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
            <div className="p-2">
              <h3>Seat start point</h3>
              <input type="radio" name="startPoint" value="right" checked />
              <span className="p-1">Left</span>
              <input type="radio" name="startPoint" value="left" />
              <span className="p-1">Right</span>
            </div>
            <div className="p-2">
              <h3>Seat number</h3>
              {seatNum.map((inputElement, index) => (
                <div key={index} className="mb-2">
                  {inputElement}
                </div>
              ))}
              <button
                onClick={handleAddClick}
                className="bg-blue-500 px-2 border-2 ml-2 border-blue-500 rounded-md text-white"
              >
                +
              </button>
              {seatNum.length > 1 && (
                <button
                  onClick={handleMinusClick}
                  className="bg-red-500 px-2 border-2 ml-2 border-red-500 rounded-md text-white"
                >
                  -
                </button>
              )}
            </div>
            <div className="p-2">
              <h3 className="mb-2">Student regist CSV Upload</h3>
              <input type="file" accept="text/csv" />
            </div>
            <div className="justify-end flex px-6">
              <button className="bg-blue-500 py-1 px-3 border-2 ml-2 border-blue-500 rounded-md text-white">
                登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
