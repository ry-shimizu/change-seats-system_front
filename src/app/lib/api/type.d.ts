import { SeatStartPoint } from "@/app/enum/SeatStartPoint";
import { SexType } from "@/app/enum/SexType";

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
  seatStartPoint: SeatStartPoint;
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
  sexType: SexType;
  studentId?: number;
};
