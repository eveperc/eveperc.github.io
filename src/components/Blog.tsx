import parse, { HTMLReactParserOptions, domToReact, Element } from 'html-react-parser';
import * as cheerio from "cheerio";

export const generateTableOfContent = (body: string) => {
  const $ = cheerio.load(body, { decodeEntities: false });
  let generateHtml = "";
  generateHtml = generateHtml + "<ul>";
  $("h2, h3").each((index, elm) => {
    const text = $(elm).html();
    const tag = $(elm)[0].name;

    const refId = `anker${index}`;
    generateHtml =
      generateHtml +
      `<li class="toc_${tag}" key=${index}>` +
      `  <a class="link link-info" href="#${refId}">${text}</a>` +
      "</li>";
  });
  generateHtml = generateHtml + "</ul>";
  return generateHtml;
}

type Props = {
  body: string
}
export const Blog: React.FC<Props> = ({ body }) => {
  const htmlParser = (html: string) => {
    let h2 = 0;
    const options: HTMLReactParserOptions = {
      replace: domNode => {
        if (domNode instanceof Element && domNode.attribs) {
          if (!domNode) {
            return;
          }
          if (domNode.name === 'h2') {
            h2 += 1;
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
  const html = htmlParser(body)
  return (
    <div className="text-left">
      {html}
    </div>
  )
}
