import * as cheerio from "cheerio";

export const generateTableOfContent = (body: string) => {
  const $ = cheerio.load(body, { decodeEntities: false });

  let generateHtml = "<ul>";
  $("h3, h4").each((index, elm) => {
    const text = $(elm).html();
    const tag = $(elm)[0].name;

    const refId = `anker${index + 1}`;
    generateHtml =
      generateHtml +
      `<li class="toc_${tag}" key=${index}>` +
      `  <a class="link link-info" href="#${refId}">${text}</a>` +
      "</li>";
  });
  generateHtml = generateHtml + "</ul>";
  return generateHtml;
}

