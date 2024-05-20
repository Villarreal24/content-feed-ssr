/**
 * @jest-environment node
 */
import { normalizeData } from "./dataProcessing";

describe("TEST NormalizeData", () => {
  test("should return normalized data array", () => {
    // EXAMPLE DATA
    const sampleData = {
      contentCards: [
        {
          id: 1,
          imageUri: "https://example.com/image1.jpg",
          textData: {
            title: "Title 1",
            subTitle: "Subtitle 1",
            author: { first: "John", last: "Doe" },
            body: "Content 1",
          },
          comments: [
            { text: "Comment 1", author: "Testing", profilePic: "", likes: 10 },
          ],
          metadata: { priority: 5, publishDate: "2023-01-01T12:00:00Z" },
        },
        {
          id: 2,
          imageUri: "https://example.com/image2.jpg",
          textData: {
            title: "Title 2",
            subTitle: "Subtitle 2",
            author: { first: "Juan", last: "Perez" },
            body: "Content 2",
          },
          comments: [
            {
              text: "Comment 2",
              author: "Testing 2",
              profilePic: "",
              likes: 20,
            },
          ],
          metadata: { priority: 10, publishDate: "2023-01-01T12:00:00Z" },
        },
      ],
    };

    // CALL FUNCTION TO NORMALIZE DATA WITH THE ARRAY EXAMPLE
    const normalizedData = normalizeData(sampleData);

    // VALIDATE THAT FUNCTION RETURN ARRAY
    expect(Array.isArray(normalizedData)).toBe(true);

    // VERIFY EVERY ELEMENT HAS THE EXPECTECT PROPERTIES
    normalizedData.forEach((item: any) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("imageUri");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("subTitle");
      expect(item).toHaveProperty("author");
      expect(item).toHaveProperty("content");
      expect(item).toHaveProperty("comments");
      expect(item).toHaveProperty("priority");
      expect(item).toHaveProperty("publishDate");

      // VERIFY THAT PROPERTY COMMENTS BE AN ARRAY WITH THE EXPECTED ELEMENTS
      item.comments.forEach((comment: any) => {
        expect(comment).toHaveProperty("text");
        expect(comment).toHaveProperty("author");
        expect(comment).toHaveProperty("profilePic");
        expect(comment).toHaveProperty("likes");
      });
    });

    // VVERIFY THAT THE ELEMENTS OF THE ARRAY ARE ORDERED
    const priorities = normalizedData.map((item: any) => item.priority);
    const sortedPriorities = [...priorities].sort((a, b) => b - a);
    expect(priorities).toEqual(sortedPriorities);
  });
});
