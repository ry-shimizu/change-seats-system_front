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
        },
        {
          seatId: 2,
          stundetId: 2,
          studentName: "池田",
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
        },
        {
          seatId: 4,
          stundetId: 5,
          studentName: "清水",
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
        },
        {
          seatId: 6,
          stundetId: 6,
          studentName: "吉村",
        },
      ],
    },
  ];

  const seatElement = seatInfos.map((seatInfo) => {
    return (
      <div className="flex flex-col m-1">
        {seatInfo.seatDetails.map((seatDetail) => {
          return (
            <div className="aspect-square border border-black m-1 p-1 items-center justify-center flex flex-col ">
              {seatDetail.studentName}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="w-1/2 overflow-y-scroll mt-16">
      <h2 className="font-serif text-4xl mb-2">Other classes Detail</h2>
      <div className="bg-white rounded-xl w-full p-4 ">
        <h3 className="text-lg mb-2">3-1 タイトル</h3>
        <div className="flex justify-center items-center flex-col">
          <div className="border border-black p-2 m-3 text-center w-1/6 ">教卓</div>
          <div className="flex">{seatElement}</div>
        </div>
      </div>
    </div>
  );
}
