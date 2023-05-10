import BlogImage,{BlogImageProps} from './Blog.Image';
import BlogUpdatedAt,{BlogUpdatedAtProps} from './Blog.UpdatedAt';
import BlogCategory,{BlogCategoryProps} from './Blog.Category';
import BlogTitle,{BlogTitleProps} from './Blog.Title';
import BlogTOC,{BlogTOCProps} from './Blog.TOC';
import BlogBody,{BlogBodyProps} from './Blog.Body';

type BlogProps = {
  children: React.ReactNode;
}
type BlogComposition = {
  Image: React.FC<BlogImageProps>;
  UpdatedAt: React.FC<BlogUpdatedAtProps>;
  Category: React.FC<BlogCategoryProps>;
  Title: React.FC<BlogTitleProps>
  TOC: React.FC<BlogTOCProps>
  Body: React.FC<BlogBodyProps>
};

const Blog: React.FC<BlogProps> & BlogComposition = ({ children }) => {
  return <div>{children}</div>
}

Blog.Image = BlogImage;
Blog.UpdatedAt = BlogUpdatedAt;
Blog.Category = BlogCategory;
Blog.Title = BlogTitle;
Blog.TOC = BlogTOC;
Blog.Body = BlogBody;

export default Blog;
