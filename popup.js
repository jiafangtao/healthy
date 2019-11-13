console.log("now in popup.js");

function buildUI (sitesData) {
    divName = document.createElement('div')
    divName.innerText = sitesData.name;
    document.body.appendChild(divName);

    divUrl = document.createElement('div');
    divUrl.innerText = sitesData.url;
    document.body.appendChild(divUrl);

    //document.body.appendChild("<div>" + sitesData['name'] + "</div>");
    //document.body.appendChild("<div>" + sitesData['url'] + "</div>");
}

function refresh() {
    chrome.storage.local.get(['sites'], function(result) {
        if (result) {
            console.log('value is ' + result['sites']);
    
            buildUI(result['sites']);
        }
        else {
            console.log("sites data not found");
        }
    });
}

//refresh();

document.getElementById('btnRefresh').onclick = refresh;
