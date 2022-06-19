const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "dist/pdp-element");

const files = fs
  .readdirSync(directoryPath)
  .filter((name) => name.endsWith(".js"));

console.log('bundling files: ', files.join(', '));

const output = files
  .map((f) => {
    return fs.readFileSync(path.join(directoryPath, f)).toString();
  })
  .join(";");



fs.writeFileSync("dist/pdp-element/pdp-element-bundle.js", output);
