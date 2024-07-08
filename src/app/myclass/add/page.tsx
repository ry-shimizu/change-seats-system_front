import Layout from "@/app/components/Layout";
import { AddForm } from "./add-form";

export default function MyClassAdd() {
  return (
    <Layout pageTitle="マイクラス登録" contentWidth="w-1/2">
      <div className="bg-white rounded-xl w-full p-4">
        <AddForm />
      </div>
    </Layout>
  );
}
