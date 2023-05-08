import { readOnlySearchAtom } from '../atoms/atoms';
import type { Article as ArticleType } from '../lib/newt.js';
import { Article } from "../components/Article";
import { useAtom } from 'jotai';

type SearchResultProps = {
  articles: ArticleType[];
};
export function SearchResult({ articles }: SearchResultProps) {
  const [text] = useAtom(readOnlySearchAtom);

  const result = articles.filter((a) => {
    const body = a.body.replace(/(<([^>]+)>)/gi, '');
    if (body.toLowerCase().indexOf(text) !== -1) {
      return a;
    }
  });
  return (
    <div className="main grid justify-center lg:grid-cols-2 xl:grid-cols-3">
      {
        result.map((article, index) => (
          <Article key={index}>
            <Article.Image>
              <img
                className="w-20 h-20"
                src={article.coverImage.src}
                alt={article.coverImage.altText}
              />
            </Article.Image>
            <Article.Body>
              <Article.Title>
                {article.title}
                <div className="badge badge-secondary">NEW</div>
              </Article.Title>
              <Article.Button>
                <a href={`/articles/${article.slug}`}>
                  <button className="btn btn-primary">Read More</button>
                </a>
              </Article.Button>
            </Article.Body>
          </Article>
        ))
      }
    </div>
  )
}
