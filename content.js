console.log("Hello from content.js");

const cheerio = require("cheerio");
console.log("Hello  2 from content.js");

// Read the content of the web page
// Load the HTML content into Cheerio
const $ = cheerio.load(document.body.innerHTML);
console.log("Hello from content.js" + $);
// Example: Extract all paragraph texts

// Example: Extract all paragraphs from the body content
const paragraphs = $("body")
  .find("p")
  .map((i, el) => $(el).text())
  .get();

// // Send the extracted data back to the background script
// chrome.runtime.sendMessage({
//   action: "sendTitle",
//   title: paragraphs.join("\n"),
// });

paragraphs.forEach((paragraph, index) => {
  chrome.runtime.sendMessage({
    action: "sendTitle",
    title: paragraph,
    index: index,
  });
});
