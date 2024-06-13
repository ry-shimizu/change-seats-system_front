import { redirect } from "next/navigation";

export async function request(
  method: string,
  path: string,
  body?: string | FormData
): Promise<any> {
  const headers: HeadersInit = {
    accept: "application/json",
  };

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
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
