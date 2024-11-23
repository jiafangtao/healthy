function check_url(url, callback) {
  const Http = new XMLHttpRequest();
  Http.open('GET', url);
  Http.send();

  Http.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log('Status is good');
      }

      callback && callback(url, this.status);
    }
  }
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.get(['sites'], function(result) {
    console.log('Value currently is ' + result.key);
  });
});

const timeout = 2000;

setInterval(function() {
  check_url('https://httpbin.org/get', function(url, status) {
    console.log('Checking ' + url + ' returns ' + status);
  });
}, timeout);
