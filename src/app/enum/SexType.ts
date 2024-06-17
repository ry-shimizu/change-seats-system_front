const SexType = {
  MAN: "1",
  WOMAN: "2",
  OTHER: "3",
} as const;

export type SexType = (typeof SexType)[keyof typeof SexType];
