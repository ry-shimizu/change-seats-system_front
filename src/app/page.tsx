"use server";
import TopIconButton from "@/app/components/Top/TopIconButton";

export default async function Top() {
  return (
    <div className="w-1/3 h-1/2">
      <h2 className="font-serif text-4xl mb-2">Top Menu</h2>
      <div className="bg-white rounded-xl w-full h-full items-center justify-center flex flex-col">
        <TopIconButton iconItem="PiChalkboardTeacherLight" item="My classes" path="/myclass" />
        <TopIconButton iconItem="PiChalkboardTeacherFill" item="Other classes" path="/otherclass" />
        <TopIconButton iconItem="HiOutlineUserCircle" item="User Managements" path="/user" />
      </div>
    </div>
  );
}
