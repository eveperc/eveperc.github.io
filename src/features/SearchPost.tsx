// src/features/SearchPosts.tsx
import React, { useState, useMemo } from 'react';
import type { MarkdownInstance } from 'astro';
import Card from '../components/Card';

interface SearchPostsProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export const SearchPosts: React.FC<SearchPostsProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter(post => {
      const title = post.frontmatter.title.toLowerCase();
      const description = post.frontmatter.description?.toLowerCase() || '';
      const content = post.rawContent().toLowerCase();

      return (
        title.includes(query) ||
        description.includes(query) ||
        content.includes(query)
      );
    });
  }, [posts, searchQuery]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="form-control w-full mb-8">
        <input
          type="text"
          placeholder="記事を検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {searchQuery && (
        <p className="mb-4 text-base-content/70">
          {filteredPosts.length} 件の記事が見つかりました
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map(post => (
          <a
            href={post.url}
            className="block transition-transform hover:-translate-y-1"
          >
            <Card
              key={post.url}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              pubDate={post.frontmatter.pubDate}
              url={post.url}
              tags={post.frontmatter.tags}
              image={post.frontmatter.image}
            />
          </a>
        ))}
      </div>

      {searchQuery && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-base-content/70">
            検索結果が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPosts;
