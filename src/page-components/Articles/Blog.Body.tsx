import parse, { HTMLReactParserOptions, domToReact, Element } from 'html-react-parser';
import DaisyUIColors from '@layouts/Colors';
export type BlogBodyProps = {
  content: string;
};

const htmlParser = (html: string) => {
  let anker = 0;
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (domNode instanceof Element && domNode.attribs) {
        if (!domNode) {
          return;
        }
        if (domNode.name === 'h3') {
          anker++;
          return (
            <h3 id={`anker${anker}`} className="body__title">
              {domToReact(domNode.children, options)}
            </h3>
          );
        }
        if (domNode.name === 'h4') {
          anker++;
          return (
            <h4 id={`anker${anker}`} className="body__sub-title">
              {domToReact(domNode.children, options)}
            </h4>
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
    <div className={`html-left p-2`}>
      {html}
    </div>
  );
}
