const SeatStartPoint = {
  RIGHT: "1",
  LEFT: "2",
  BEFORE: "3",
  AFTER: "4",
} as const;

export type SeatStartPoint = (typeof SeatStartPoint)[keyof typeof SeatStartPoint];
