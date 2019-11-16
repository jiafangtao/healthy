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
  console.info('calling in onInstalled');

  chrome.storage.local.get(['sites'], function(result) {
    console.log('Value currently is ' + result.key);
  });
});


setInterval(function() {
  check_url('http://www.baidu.com', function(url, status) {
    console.log('Checking ' + url + ' returns ' + status);
  });
}, 2000);
