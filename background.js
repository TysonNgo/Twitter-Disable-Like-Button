chrome.webRequest.onBeforeRequest.addListener(
  function() {
    return {
      cancel: true
    };
  },
  {
    urls: [
      "https://api.twitter.com/1.1/favorites/create.json",
      "https://api.twitter.com/1.1/favorites/destroy.json"
    ]
  },
  ["blocking"]
);