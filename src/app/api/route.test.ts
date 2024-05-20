/**
 * @jest-environment node
 */
import fetch from "jest-fetch-mock";
import { GET } from "./route";

describe("TEST API ROUTE: /api/", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Should return data when fetch is successful", async () => {
    const sampleData = [
      {
        id: "10",
        imageUri: "https://picsum.photos/500/500",
        comments: [
          {
            profilePic: "https://picsum.photos/200",
            text: "Testing",
            likes: 5000,
            author: "@test",
          },
        ],
        metadata: {
          priority: 20,
          publishDate: "1948-11-14T16:22:32.0Z",
        },
        textData: {
          body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra justo magna blandit imperdiet egestas, conubia cras ut eu convallis tempus. Et integer fringilla purus vestibulum sed felis eu sollicitudin nibh, varius laoreet duis orci inceptos malesuada nullam aliquet, nostra dig",
          title: "title",
          subTitle: "subtitle test",
          author: {
            first: "John",
            last: "Smith",
          },
        },
      },
    ];
    fetch.mockResponseOnce(JSON.stringify(sampleData));

    try {
      const response = await GET();
      if (response) {
        const body = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", body);
        expect(response.status).toBe(200);
        expect(body).toEqual({ data: "something " });
      } else {
        console.error("Response is undefined");
      }
    } catch (error) {
      console.log("CATCH: ", error);
    }
  });
});
