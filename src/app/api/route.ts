export async function GET(req: Request) {
  console.log("entra en la funcion del SSR");
  const baseUrl = process.env.BASE_API_URL;

  try {
    const resp = await fetch(`${baseUrl}/content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Prefer: "code=200, dynamic=true",
      },
    });

    const data = await resp.json();
    // console.log("DATA: ", data);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch data", { status: 500 });
  }
}