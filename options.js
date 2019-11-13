
function getSiteName() {
  return document.getElementById('name').value;
}

function getSiteUrl() {
  return document.getElementById('url').value;
}

function addSite(name, url) {
  //
}

document.getElementById('btnAdd').onclick = function() {
  console.log('Name is ' + getSiteName());
  console.log('URL is ' + getSiteUrl());

  addSite(getSiteName(), getSiteUrl());
};
