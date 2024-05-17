import moment from "moment";

export const normalizeData = (data: any) => {
  return data.contentCards
    .map((item: any) => {
      const authorFullName = `${item.textData.author.first} ${item.textData.author.last}`;
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
