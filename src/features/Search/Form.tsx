import React from 'react';

interface SearchFormProps {
  query: string;
  onSearch: (value: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ query, onSearch }) => {
  return (
    <div className="form-control w-full mb-8">
      <input
        type="text"
        placeholder="記事を検索..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  );
};
