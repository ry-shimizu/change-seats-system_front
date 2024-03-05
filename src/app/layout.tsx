import { Metadata } from "next";
import "../globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Change Seat System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="bg-gray-100">
          <Header />
          <div className="flex flex-col items-center justify-center h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
