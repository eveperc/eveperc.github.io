import Card from "@components/Card"
import type { MarkdownInstance } from "astro";
type Props = {
  post: MarkdownInstance<Record<string, any>>;
}
export default function PostCard({ post }: Props) {
  return (
    <a href={post.url} >
      <Card title={post.frontmatter.title} description={post.frontmatter.description} />
    </a>
  );
}
