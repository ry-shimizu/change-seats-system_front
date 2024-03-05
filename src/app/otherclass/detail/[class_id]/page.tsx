import Button from "@/app/components/Button";
import BlackBoard from "@/app/components/ClassDetail/BlackBoard";
import Seat from "@/app/components/ClassDetail/Seat";

export default function OtherClassDetail() {
  const seatInfos = [
    {
      col: 1,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 1,
          stundetId: 1,
          studentName: "秋田",
          sexType: 1,
        },
        {
          seatId: 2,
          stundetId: 2,
          studentName: "池田",
          sexType: 1,
        },
        {
          seatId: 3,
          stundetId: 3,
          studentName: "牛田",
          sexType: 2,
        },
      ],
    },
    {
      col: 2,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 3,
          stundetId: 3,
          studentName: "牛田",
          sexType: 1,
        },
        {
          seatId: 4,
          stundetId: 5,
          studentName: "清水",
          sexType: 1,
        },
      ],
    },
    {
      col: 3,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 5,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatId: 6,
          stundetId: 6,
          studentName: "吉村",
          sexType: 2,
        },
      ],
    },
    {
      col: 4,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 5,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatId: 6,
          stundetId: 6,
          studentName: "吉村",
          sexType: 1,
        },
      ],
    },
    {
      col: 5,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 5,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatId: 6,
          stundetId: 6,
          studentName: "吉村",
          sexType: 1,
        },
      ],
    },
    {
      col: 6,
      seatNum: 2,
      seatDetails: [
        {
          seatId: 5,
          stundetId: 5,
          studentName: "中大兄皇子真",
          sexType: 1,
        },
        {
          seatId: 6,
          stundetId: 6,
          studentName: "吉村",
          sexType: 2,
        },
      ],
    },
  ];

  return (
    <div className="w-1/2 overflow-y-auto mt-16">
      <h2 className="font-serif text-4xl mb-2">Other classes Detail</h2>
      <div className="bg-white rounded-xl w-full p-4 ">
        <BlackBoard title="他クラステスト" className="3-1">
          <Seat seatInfos={seatInfos} />
        </BlackBoard>
        <div className="mt-5">
          <Button color="blue" message="Regist" px={6} />
        </div>
      </div>
    </div>
  );
}
