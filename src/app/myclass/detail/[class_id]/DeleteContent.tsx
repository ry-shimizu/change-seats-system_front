"use client";
import Button from "@/app/components/Button";

export default function DeleteContent({
  seatInfos,
}: {
  seatInfos: {
    col: number;
    seatTotal: number;
    seatDetails: {
      seatNumber: number;
      stundetId: number;
      studentName: string;
      sexType: number;
      seatLine: number;
    }[];
  }[];
}) {
  const deletePullDown = seatInfos.flatMap((seatInfo) => {
    return seatInfo.seatDetails.map((seatDetail) => {
      return (
        <option value={String(seatDetail.seatNumber)}>
          {String(seatDetail.seatNumber) + ":" + seatDetail.studentName}
        </option>
      );
    });
  });

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Delete</h2>
      <form action="" className="mt-2">
        <div className="mb-2">
          <div className="p-2">
            <h3>■Slect a Seat Number</h3>
            <select
              id="deleteSeatNum"
              name="deleteSeatNum"
              className="block appearance-none w-1/2 bg-white border border-gray-300 hover:border-gray-500 mt-1 p-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline overflow-y-auto"
            >
              <option>選択してください ▼</option>
              {deletePullDown}
            </select>
          </div>
        </div>
      </form>
      <Button color="red" message="Delete" paddingXNum={2} justifyEnd />
    </>
  );
}
