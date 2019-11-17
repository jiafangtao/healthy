
function buildUI (sitesData) {
    window.sitesData = sitesData;
    if (!sitesData) {
        console.log("No sites data is configured yet.");
        span = document.createElement('span');
        span.innerText = "Go to option page to add sites.";
        document.appendChild(span);
        return;
    }

    sitesData.forEach(site => {
        li = document.createElement('li');

        button = document.createElement('button');
        button.className = 'gray light';
    
        link = document.createElement('a');
        link.href = site.url;
        link.target = "_blank";
        link.innerText = site.name;

        li.appendChild(button);
        li.appendChild(link);
        document.getElementById("placeholder").appendChild(li);
    });
}

function refreshPopup() {
    chrome.storage.local.get(['sites'], function(result) {
        if (result) {
            console.log('value is ' + JSON.stringify(result['sites']));
    
            buildUI(result['sites']);
        }
        else {
            console.log("sites data not found");
        }
    });
}

function cleanAll() {
    document.getElementById('placeholder').innerText = "";
}

window.onload = function() {
    console.log("window.onload ...");
    cleanAll();
    refreshPopup();
}
