
function getSiteName() {
  return document.getElementById('name').value;
}

function getSiteUrl() {
  return document.getElementById('url').value;
}

function refreshSitesList() {
  chrome.storage.local.get(['sites'], function(result) {
    if (result && result['sites']) {
      result['sites'].forEach(site => {
        li = document.createElement('li');
        li.innerText = site.name + ' ' + site.url;
        document.getElementById('siteList').appendChild(li);  
      });
    }
  });
}

function addSite(name, url, callback) {
  chrome.storage.local.get(['sites'], function(result) {

    var sitesData = result['sites'];
    sitesData = sitesData || [];
    
    console.log(result['sites']);
    sitesData.push({'name': name, 'url': url});

    chrome.storage.local.set({'sites': sitesData}, function() {
      console.log('Save successfully for ' + name + ' ' + url);
      if (callback) {
        callback(name, url);
      }
    });
  });
}

document.getElementById('btnAdd').onclick = function() {
  addSite(getSiteName(), getSiteUrl(), function() {
    refreshSitesList();
  });
};
