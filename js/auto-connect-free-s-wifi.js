'use strict';
var scriptAutoConectFreeSWifi = `
	connectToWifi();
	location.href="https:://facebook.com";
`;
window.onload = function() {
    addScript(scriptAutoConectFreeSWifi);
};