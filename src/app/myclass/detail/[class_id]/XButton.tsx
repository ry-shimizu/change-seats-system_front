"use client";
export default function XButton({ handleClick }: { handleClick: () => void }) {
  return (
    <div
      className="font-bold cursor-pointer ml-auto text-end text-xs"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      ✖️
    </div>
  );
}
