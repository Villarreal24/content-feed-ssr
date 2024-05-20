import { Feed } from "../components/feed/feed";
import FeedSkeleton from "@/components/feed/feedSkeleton";
import baseUrl from "@/utils/config";
import { normalizeData } from "@/utils/feed/dataProcessing";

export default async function Home() {
  const getData = async () => {
    try {
      // CALL THE API ENDPOINT TO GET THE DATA OF THE FEED CONTENT
      const res = await fetch(`${baseUrl}/`, {
        method: "GET",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      // CALL THE FUNCTION WITH THE RESPONSE OF THE API TO NORMALIZE THE DATA AND IMPROVE IT
      const afterProcessingData = await normalizeData(data);
      return afterProcessingData;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await getData();

  return (
    <main className="flex justify-center px-0 md:px-24">
      {data && data.length >= 1 ? <Feed data={data} /> : <FeedSkeleton />}
    </main>
  );
}
