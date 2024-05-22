export type SiteUserDetailList = {
  siteUserDetailList: SiteUserDetail[];
};

export type SiteUserDetail = {
  id: number;
  userName: string;
  authority: Authority;
  loginId: string;
  deleteFlg: DeleteFlg;
};
