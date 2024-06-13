export type ClassList = {
  classList: {
    classId: number;
    classYear: number;
    className: string;
    title: string;
    studentNum: number;
    updatedDt: stirng;
  }[];
};

export type ClassDetail = {
  classYear: number;
  className: string;
  title: string;
  myOtherClass?: boolean;
  seatsAddColInfo: {
    col: number;
    seatsInfo: SeatInfo[];
  }[];
};

export type SeatInfo = {
  seatId?: number;
  seatNumber: number;
  studentName: string;
  sexType: string;
  studentId?: number;
};
