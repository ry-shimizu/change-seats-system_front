const Authority = {
  ADMIN: "1",
  GENERAL: "2",
  SCHOOL_ADMIN: "3",
} as const;

export type Authority = (typeof Authority)[keyof typeof Authority];
