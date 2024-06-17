"use client";
import Button from "@/app/components/Button";

export default function SeatNumberImput({
  seatTotal,
  setSeatTotal,
}: {
  seatTotal: JSX.Element[];
  setSeatTotal: (value: JSX.Element[] | ((prevState: JSX.Element[]) => JSX.Element[])) => void;
}) {
  const handleAddClick = () => {
    const inputCount = seatTotal.length + 1;
    const addInputElement = (
      <input
        type="number"
        name={`seatTotalber${inputCount}`}
        className="border-2 rounded-md focus:outline-none focus:shadow-outline hover:border-gray-500"
        placeholder={`座席数(${inputCount}列目)`}
        min={1}
      />
    );
    setSeatTotal((preValue) => [...preValue, addInputElement]);
  };

  const handleMinusClick = () => {
    const updatedseatTotal = [...seatTotal];
    updatedseatTotal.pop();
    setSeatTotal(updatedseatTotal);
  };

  return (
    <div className="p-2">
      <h3>■ 座席数</h3>
      {seatTotal.map((inputElement, index) => (
        <div key={index} className="mb-2 focus:outline-none">
          {inputElement}
        </div>
      ))}
      <div className="flex">
        <Button
          color="blue"
          message="+"
          handleClick={handleAddClick}
          paddingXNum={0}
          px={"2"}
          py={"0"}
        />
        {seatTotal.length > 1 && (
          <Button
            color="red"
            message="-"
            handleClick={handleMinusClick}
            paddingXNum={0}
            px={"2"}
            py={"0"}
          />
        )}
      </div>
    </div>
  );
}
