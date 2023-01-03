import parse from "@tiki.vn/mini-html-parser2";

export const convertHtmlNodes = (string) => {
  parse(string, (err, htmlNodes) => {
    console.log("err: ", err);
    console.log("htmlNodes: ", htmlNodes);
    if (!err) {
      return htmlNodes;
    }
  });
};
