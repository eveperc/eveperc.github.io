import parse, { HTMLReactParserOptions, domToReact, Element } from 'html-react-parser';

export type BlogBodyProps = {
  content: string;
};

const htmlParser = (html: string) => {
  let h2 = 0;
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (domNode instanceof Element && domNode.attribs) {
        if (!domNode) {
          return;
        }
        if (domNode.name === 'h2') {
          h2++;
          return (
            <h2 id={`anker${h2}`}>
              {domToReact(domNode.children, options)}
            </h2>
          );
        }
      }
    }
  }
  return parse(html, options)
}
export default function({ content }: BlogBodyProps) {
  const html = htmlParser(content)

  return (
    <div className="html-left">
      {html}
    </div>
  );
}
