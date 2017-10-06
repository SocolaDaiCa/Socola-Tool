'use strict';
var scriptAutoConectFreeSWifi = `
	connectToWifi();
	location.href="https:://facebook.com";
`;
window.onload = function() {
    var scriptTag = document.createElement("script");
    scriptTag.innerHTML = scriptAutoConectFreeSWifi;
    document.head.appendChild(scriptTag);
};