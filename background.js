chrome.runtime.onInstalled.addListener(function() {
  console.info('calling in onInstalled');

  chrome.storage.local.get(['sites'], function(result) {
    console.log('Value currently is ' + result.key);
  });
});
