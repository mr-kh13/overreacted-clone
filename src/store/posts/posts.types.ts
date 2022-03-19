export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  date?: string;
  readingTime?: string | null;
}
