import parse from "@tiki.vn/mini-html-parser2";

export const convertHtmlNodes = (string) => {
  return new Promise((resolve, reject) => {
    parse(string, (err, htmlNodes) => {
      err ? reject(err) : resolve(htmlNodes);
    });
  });
};
