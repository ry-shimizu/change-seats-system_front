import Link from "next/link";

export default function ErrorCommon({ title, message }: { title: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6">
      <h1 className="text-5xl font-bold mb-4 animate-bounce">{title}</h1>
      <p className="text-xl mb-6 text-center" dangerouslySetInnerHTML={{ __html: message }}></p>
      <Link
        href="/top"
        className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
      >
        トップページに戻る
      </Link>
    </div>
  );
}
