import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";
import ActionButtons from "@/app/myclass/detail/[id]/ActionButtons";

export type SeatInfo = {
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

export default function MyclassDetail() {
  const startPoint = 1;
  const seatInfos = [
    {
      col: 1,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 11, // col + seatLine
          seatLine: 1,
          stundetId: 1,
          studentName: "秋田",
          sexType: 1,
        },
        {
          seatNumber: 12,
          seatLine: 2,
          stundetId: 2,
          studentName: "池田",
          sexType: 1,
        },
        {
          seatNumber: 13,
          seatLine: 3,
          stundetId: 3,
          studentName: "牛田",
          sexType: 2,
        },
      ],
    },
    {
      col: 2,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 21,
          seatLine: 1,
          stundetId: 3,
          studentName: "牛田",
          sexType: 1,
        },
        {
          seatNumber: 22,
          seatLine: 2,
          stundetId: 5,
          studentName: "清水",
          sexType: 1,
        },
      ],
    },
    {
      col: 3,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 31,
          seatLine: 1,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatNumber: 32,
          seatLine: 2,
          stundetId: 6,
          studentName: "吉村",
          sexType: 2,
        },
      ],
    },
    {
      col: 4,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 41,
          seatLine: 1,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatNumber: 42,
          seatLine: 2,
          stundetId: 6,
          studentName: "吉村",
          sexType: 1,
        },
      ],
    },
    {
      col: 5,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 51,
          seatLine: 1,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatNumber: 52,
          seatLine: 2,
          stundetId: 6,
          studentName: "吉村",
          sexType: 1,
        },
      ],
    },
    {
      col: 6,
      seatTotal: 2,
      seatDetails: [
        {
          seatNumber: 61,
          seatLine: 1,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatNumber: 62,
          seatLine: 2,
          stundetId: 6,
          studentName: "吉村",
          sexType: 2,
        },
      ],
    },
  ];

  return (
    <div className="w-1/2 overflow-y-auto">
      <h2 className="font-serif text-4xl mb-2">My classes Detail</h2>
      <div className="bg-white rounded-xl w-full p-4 ">
        <BlackBoard title="マイクラステスト" className="3-1">
          <Seat seatInfos={seatInfos} />
        </BlackBoard>
        <ActionButtons startPoint={startPoint} seatInfos={seatInfos} />
      </div>
    </div>
  );
}
