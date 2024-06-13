const FlagType = {
  FLAG_OFF: "0",
  FLAG_ON: "1",
} as const;

export type FlagType = (typeof FlagType)[keyof typeof FlagType];
