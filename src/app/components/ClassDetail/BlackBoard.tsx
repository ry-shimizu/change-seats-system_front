import { PropsWithChildren } from "react";

export default function BlackBoard({
  children,
  className,
  title,
}: PropsWithChildren<{ className?: string; title?: string }>) {
  return (
    <>
      <div className="flex justify-center items-start flex-col border border-white bg-emerald-700">
        {title && (
          <h3 className="text-lg my-2 px-2 text-white">
            {className} {title}
          </h3>
        )}
      </div>
      <div className="flex justify-center items-center flex-col border border-white bg-emerald-700">
        <div className="flex">{children}</div>
        <div className="border border-white text-white p-2 m-3 text-center w-1/6 ">教卓</div>
      </div>
    </>
  );
}
