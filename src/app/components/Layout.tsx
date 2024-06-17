import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({
  children,
  pageTitle,
  contentWidth,
}: PropsWithChildren<{ pageTitle: string; contentWidth: string }>) {
  return (
    <div className="bg-gray-100 w-full h-screen" id="app">
      <Header />
      <div className="relative">
        <div className="fixed left-1/4 top-24 w-full overflow-y-auto h-5/6">
          <div className={`${contentWidth} overflow-y-auto`}>
            <h2 className="font-mono text-3xl mb-2">{pageTitle}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
