var fs = require("fs");

// Write files, will overwrite existing filenames.
fs.writeFileSync("my first file.txt", 
"This is an important message.","utf8");

fs.writeFileSync("my second file.txt",
"This is another important message.", "utf8");

// Read files, must load as utf8 to make sense.
var readtext = fs.readFileSync("newtxt.txt", "utf8");

fs.appendFileSync("newtxt.txt", "READ ME.", "utf8");

console.log(readtext);