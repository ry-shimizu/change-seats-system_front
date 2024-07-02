import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function request(
  method: string,
  path: string,
  noUserbody?: string | FormData
): Promise<any> {
  const headers: HeadersInit = {
    accept: "application/json",
  };
  let body: string | FormData | undefined;
  if (noUserbody && noUserbody instanceof FormData) {
    body = noUserbody;
  } else {
    const userData = await getServerSession(nextAuthOptions);
    const needUserData = {
      siteUserId: userData?.user.siteUserId,
      schoolId: userData?.user.schoolId,
    };
    if (noUserbody) {
      headers["Content-Type"] = "application/json";
      body =
        path === "login"
          ? noUserbody
          : noUserbody.slice(0, -1) + "," + JSON.stringify(needUserData).slice(1);
    } else if (method === "POST") {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(needUserData);
    }
  }

  const response = await fetch(`http://localhost:8080/${path}`, {
    method,
    headers,
    body,
    cache: "no-store",
  });

  if (response.status === 404) {
    redirect("/not-found");
  }

  if (!response.ok) {
    throw new Error("");
  }

  return response;
}
