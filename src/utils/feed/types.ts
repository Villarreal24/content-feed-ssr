export interface FeedObject {
  id: number;
  imageUri: string;
  title: string;
  subTitle: string;
  author: string;
  content: string;
  comments: [];
  priority: number;
  publishDate: string;
}

export interface Comments {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}
