import React, { useState, useMemo } from 'react';
import type { Post } from '@/types/Post';
import Breadcrumbs from '@/components/Breadcrumbs/Index';
import { SearchForm } from './Form';
import { SearchResults } from './Results';

interface SearchProps {
  posts: Post[];
  initialQuery?: string;
}

export const SearchPosts: React.FC<SearchProps> = ({ posts, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  const filteredPosts = useMemo(() => {
    if (!query) return posts;

    const searchTerm = query.toLowerCase();
    return posts.filter(post => {
      const title = post.frontmatter.title.toLowerCase();
      const description = post.frontmatter.description?.toLowerCase() || '';
      const content = post.rowContent?.toLowerCase() || '';
      const tags = post.frontmatter.tags?.join(' ').toLowerCase() || '';

      return (
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        content.includes(searchTerm) ||
        tags.includes(searchTerm)
      );
    });
  }, [posts, query]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/', icon: 'home' },
          { label: '検索', icon: 'document' }
        ]}
        variant="default"
        className="mb-8"
      />

      <SearchForm
        query={query}
        onSearch={setQuery}
      />

      <SearchResults
        query={query}
        posts={filteredPosts}
      />
    </div>
  );
};

export default SearchPosts;
