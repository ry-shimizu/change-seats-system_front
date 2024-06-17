import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Change Seat System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
