import Button from "@/app/components/Button";
import SeatNumberImput from "./seatNumber-input";
import SeatStartRadio from "./seatStart-radio";

export default function MyClassAdd() {
  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-serif text-4xl mb-2">My classes Add</h2>
      <div className="bg-white rounded-xl w-full p-4">
        <form action="">
          <div className="p-2">
            <h3>■ Year</h3>
            <input
              type="number"
              name="year"
              placeholder="年度"
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
              min={2023}
              max={9999}
            />
          </div>
          <div className="p-2">
            <h3>■ Class</h3>
            <input
              type="text"
              name="className"
              placeholder="クラス"
              maxLength={10}
              size={20}
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <div className="p-2">
            <h3>■ Title</h3>
            <input
              type="text"
              name="title"
              placeholder="タイトル"
              maxLength={20}
              size={40}
              className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
            />
          </div>
          <SeatStartRadio />
          <SeatNumberImput />
          <div className="p-2">
            <h3 className="mb-2">■ Student regist CSV Upload</h3>
            <input type="file" accept="text/csv" />
          </div>
          <Button color="blue" message="Regist" paddingXNum={6} justifyEnd />
        </form>
      </div>
    </div>
  );
}
