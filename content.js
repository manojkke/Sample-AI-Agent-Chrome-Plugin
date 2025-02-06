// Read the content of the web page
const pageTitle = document.title; // Get the page title
const pageContent = document.body.innerText; // Get the text content of the body
debugger;
// Send the title back to the background script
chrome.runtime.sendMessage({ action: "sendTitle", title: pageContent });
