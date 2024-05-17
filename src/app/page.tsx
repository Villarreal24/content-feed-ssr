import Feed from "../components/feed";
import baseUrl from "@/utils/config";
import { normalizeData } from "@/utils/feed/dataProcessing";

export default async function Home() {
  const getData = async () => {
    const res = await fetch(`${baseUrl}/`, {
      method: "GET",
    });
    const data = await res.json();
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const afterProcessingData = await normalizeData(data);
    return afterProcessingData;
  };

  const data = await getData();

  return (
    <main className="flex justify-center px-24">
      {data ? <Feed data={data} /> : <p>Loading...</p>}
    </main>
  );
}
