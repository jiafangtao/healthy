chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({url: 'https://www.google.com'}, function() {
    console.log('Set url to google.com.');
  });
});
