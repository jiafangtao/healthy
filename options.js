
function getSiteName() {
  return document.getElementById('name').value;
}

function getSiteUrl() {
  return document.getElementById('url').value;
}

function addSite(name, url) {
  chrome.storage.local.set({'sites': {'name': name, 'url': url}}, function() {
    console.log('Save successfully for ' + name + ' ' + url);
  });
}

document.getElementById('btnAdd').onclick = function() {
  addSite(getSiteName(), getSiteUrl());
};
