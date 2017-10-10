'use strict';

function addScript(script) {
    var scriptTag = document.createElement("script");
    scriptTag.innerHTML = script;
    document.head.appendChild(scriptTag);
}

function executeScript(file) {
    chrome.tabs.executeScript({ file });
}

function runScript(code) {
    chrome.tabs.executeScript({ code });
}