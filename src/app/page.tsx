import TopIconButton from "@/app/components/Top/TopIconButton";

export default async function Top() {
  return (
    <div className="w-1/2 h-1/2">
      <h2 className="font-serif text-4xl">Top Menu</h2>
      <div className="w-full justify-center flex mt-5">
        <TopIconButton iconItem="PiChalkboardTeacherLight" item="My classes" path="/myclass" />
        <TopIconButton iconItem="PiChalkboardTeacherFill" item="Other classes" path="/otherclass" />
        <TopIconButton iconItem="HiOutlineUserCircle" item="User Managements" path="/user" />
      </div>
    </div>
  );
}
