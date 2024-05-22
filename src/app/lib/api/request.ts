export async function request(method: string, path: string, body?: string): Promise<any> {
  const response = await fetch(`http://localhost:8080/${path}`, {
    method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("");
  }

  return response;
}
