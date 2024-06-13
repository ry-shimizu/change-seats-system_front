import { Authority } from "../../../enum/Authority";
import { FlagType } from "../../../enum/FlagType";

export type SiteUserDetailList = {
  siteUserDetailList: SiteUserDetail[];
};

export type SiteUserDetail = {
  id: number;
  userName: string;
  authority: Authority;
  loginId: string;
  deleteFlg: FlagType;
  schoolName: string;
  schoolId: number;
};
