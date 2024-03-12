"use client";
export default function Button({
  color,
  message,
  paddingXNum,
  handleClick,
  py,
  px,
  justifyEnd = false,
}: {
  color: string;
  message: string;
  paddingXNum: number;
  handleClick?: () => void;
  py?: string;
  px?: string;
  justifyEnd?: boolean;
}) {
  const pxCss = px ? "px-" + px : "px-3";
  const pyCss = py ? "py-" + py : "py-1";
  return (
    <div className={`${justifyEnd && "justify-end"} flex px-${paddingXNum}`}>
      <button
        className={`bg-${color}-500 border-2 ml-2 border-${color}-500 rounded-md text-white ${pxCss} ${pyCss}`}
        onClick={(e) => {
          e.preventDefault();
          handleClick && handleClick();
        }}
      >
        {message}
      </button>
    </div>
  );
}
