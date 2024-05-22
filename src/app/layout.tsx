import { Metadata } from "next";
import "../globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Change Seat System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body>
        <div className="bg-gray-100 w-full h-screen" id="app">
          <Header />
          <div className="relative">
            <div className="fixed left-1/4 top-32 w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
