"use client";

import { BgColor, BorderColor } from "../enum/Color";

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
        className={`${BgColor[color as keyof typeof BgColor]} border-2 ml-2 ${
          BorderColor[color as keyof typeof BorderColor]
        } rounded-md text-white ${pxCss} ${pyCss} hover:scale-110 duration-300`}
        onClick={(e) => {
          if (handleClick) {
            e.preventDefault();
            handleClick();
          }
        }}
        type="submit"
      >
        {message}
      </button>
    </div>
  );
}
