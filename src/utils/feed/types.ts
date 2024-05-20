export interface FeedObject {
  id: number;
  imageUri: string;
  title: string;
  subTitle: string;
  author: string;
  content: string;
  comments: Comments[];
  priority: number;
  publishDate: string;
}

export type FeedObjectArray = FeedObject[];

export interface FeedProps {
  data: FeedObjectArray;
}

export interface Comments {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}
