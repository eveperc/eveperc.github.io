import type { Post } from "@/types/Post";
import Card from "@components/Card.astro";

interface SearchResultsProps {
  query: string;
  posts: Post[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query, posts }) => {
  if (!posts.length && query) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-base-content/70">
          検索結果が見つかりませんでした
        </p>
      </div>
    );
  }

  return (
    <div>
      {query && (
        <p className="text-base-content/70 mb-4">
          {posts.length} 件の記事が見つかりました
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.url}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            pubDate={post.frontmatter.pubDate}
            url={post.url}
            tags={post.frontmatter.tags}
            image={post.frontmatter.image}
          />
        ))}
      </div>
    </div>
  );
};
