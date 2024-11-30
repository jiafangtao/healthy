/**
 * @param {String} HTML representing a single node (which might be an Element,
                   a text node, or a comment).
 * @return {Node}
 */
function htmlToNode(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const nNodes = template.content.childNodes.length;
    if (nNodes !== 1) {
        throw new Error(
            `html parameter must represent a single node; got ${nNodes}. ` +
            'Note that leading or trailing spaces around an element in your ' +
            'HTML, like " <img/> ", get parsed as text nodes neighbouring ' +
            'the element; call .trim() on your input to avoid this.'
        );
    }
    return template.content.firstChild;
}


/**
 * @param {String} HTML representing any number of sibling nodes
 * @return {NodeList} 
 */
function htmlToNodes(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


function buildUI (sitesData) {
    window.sitesData = sitesData;
    if (!sitesData) {
        console.log("No sites data is configured yet.");
        const warning = htmlToNode('<div><div class="warning bar">&#x26A0; No sites added yet. </div><span>Go to <a href="options.html"><strong>option page</strong></a> to add sites.</span></div>');
        document.body.appendChild(warning);
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

function onFormSubmit() {
    console.info("submitting the form");
}

function onButtonMoreClicked() {
    console.info("button 'More' is clicked");
    const form = document.getElementById("newSiteForm");
    
}

window.onload = function() {
    console.log("window.onload ...");
    cleanAll();
    refreshPopup();
}
