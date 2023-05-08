export type BlogTOCProps = {
  html: string;
};

export default function({ html }: BlogTOCProps) {
  const setHtml = () => {
    return { __html: html };
  }
  return <div id="blog_toc" className="toc" dangerouslySetInnerHTML={setHtml()} />
}

