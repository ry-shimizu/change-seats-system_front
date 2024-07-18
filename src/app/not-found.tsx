import { Metadata } from "next";
import ErrorCommon from "./components/ErrorCommon";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <ErrorCommon
      title="ページが見つかりません"
      message=" お探しのページは削除されたか、名前が変更されたか、一時的に利用できない可能性があります。"
    />
  );
}
