import moment from "moment";
import { Post } from "./posts.types";

export const sortPosts = (posts: Post[]): Post[] => {
  if (!posts) return [];
  return posts
    .sort((a, b) => a.id - b.id)
    .map((post) => ({
      ...post,
      readingTime: getFormattedReadingTime(calculateReadingTime(post.body)),
      date: moment().subtract(post?.id, "days").format("MMMM DD, YYYY"),
    }));
};

export const calculateReadingTime = (text: string): number | null => {
  if (!text) return null;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

export const generateIcon = (amount: number, icon: string): string => {
  return new Array(amount).fill(icon).join(" ");
};

export const getFormattedReadingTime = (readingTime: number | null): string => {
  if (!readingTime) return "";
  let icons = generateIcon(
    Math.ceil((readingTime + 1) / 8),
    readingTime > 30 ? "🍱" : "☕️"
  );
  return `${icons} ${readingTime} ${readingTime > 1 ? "mins" : "min"} read`;
};
