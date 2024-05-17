import moment from "moment";

export const normalizeData = (data: any) => {
  return data.contentCards
    .map((item: any) => {
      const authorFullName = `${item.textData.author.first} ${item.textData.author.last}`; // Join name
      //   const isContentLong = item.textData.body.length > 150; // Characteres equal to 3 lines
      //   const truncatedContent = isContentLong
      //     ? item.textData.body.substring(0, 150) + "... read more"
      //     : item.textData.body;
      return {
        id: item.id,
        imageUri: item.imageUri,
        title: item.textData.title,
        subTitle: item.textData.subTitle,
        author: authorFullName,
        content: item.textData.body,
        comments: item.comments.map((comment: any) => ({
          text: comment.text,
          author: comment.author,
          profilePic: comment.profilePic,
          likes: comment.likes.toLocaleString(),
        })),
        priority: item.metadata.priority,
        publishDate: moment(item.metadata.publishDate).format(
          "MMMM Do, YYYY, h:mm:ss"
        ),
      };
    })
    .sort((a: any, b: any) => b.priority - a.priority);
};
