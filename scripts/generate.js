const webfontsGenerator = require("webfonts-generator");
const fs = require("fs");

const types = fs.readdirSync("icons/SVG");
const files = types.reduce((acc, type) => {
  const typeFiles = fs.readdirSync(`icons/SVG/${type}`);
  return acc.concat(typeFiles.map((file) => `icons/SVG/${type}/${file}`));
}, []);

webfontsGenerator(
  {
    files,
    dest: "fonts/",
    templateOptions: {
      classPrefix: "hn-",
      baseSelector: ".hn",
    },
  },
  function (error) {
    if (error) {
      console.log("Fail!", error);
    } else {
      console.log("Done!");
    }
  },
);
