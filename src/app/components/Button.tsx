"use client";
export default function Button({
  color,
  message,
  px,
  handleClick,
}: {
  color: string;
  message: string;
  px: number;
  handleClick?: () => void;
}) {
  return (
    <div className={`justify-end flex px-${px}`}>
      <button
        className={`bg-${color}-500 py-1 px-3 border-2 ml-2 border-${color}-500 rounded-md text-white`}
        onClick={() => {
          handleClick && handleClick();
        }}
      >
        {message}
      </button>
    </div>
  );
}
