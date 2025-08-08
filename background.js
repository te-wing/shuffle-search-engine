const engines = [
  "https://www.google.com/search?q=",
  "https://www.bing.com/search?q=",
  "https://duckduckgo.com/?q=",
  "https://search.yahoo.co.jp/search?p=",
  "https://www.baidu.com/s?wd=",
];

chrome.omnibox.onInputEntered.addListener((text) => {
  const randomEngine = engines[Math.floor(Math.random() * engines.length)];
  const url = randomEngine + encodeURIComponent(text);

  chrome.tabs.create({ url });
});