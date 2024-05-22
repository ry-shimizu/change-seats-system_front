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
  className: string;
  title: string;
  myOtherClass?: boolean;
  seatsAddColInfo: {
    seatsInfo: {
      seatId?: number;
      seatNumber: number;
      studentName: string;
      sexType: string;
      studentId?: number;
    }[];
  }[];
};
