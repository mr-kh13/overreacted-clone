import { useRouter } from "next/router";
import { AppContainer } from "@/components/layout/AppContainer";
import { useGetPostsByIdQuery } from "@/store/posts/posts.apis";
import { Title, Meta } from "@/components/Post/Post.styled";

export default function PostDetails() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostsByIdQuery(id as string, {
    skip: !id,
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <AppContainer>
      <Title>{post?.title}</Title>
      <Meta>
        {post?.date} • {post?.readingTime}
      </Meta>
      <p>{post?.body}</p>
    </AppContainer>
  );
}
