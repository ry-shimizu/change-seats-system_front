"use client";
import ErrorCommon from "./components/ErrorCommon";

export default function Error() {
  return (
    <ErrorCommon
      title="エラーが発生しました"
      message="サーバー内で問題が発生しました。
      しばらくしてからもう一度お試しください。<br />それでも問題が解決しない場合は、サポートにお問い合わせください。"
    />
  );
}
