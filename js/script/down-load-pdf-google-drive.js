/*
 * @Author: Socola
 * @Date:   2018-04-15 14:58:58
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-15 15:00:44
 */
'use strict';
(function() {
	function unicodeToChar(text) { return text.replace(/\\u[\dA-F]{4}/gi, function(match) { return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)); }); }
	var bodyHTML = document.body.innerHTML;
	var viewerng_link = bodyHTML.slice(bodyHTML.search('https://drive.google.com/viewerng/'), bodyHTML.search('application/pdf') - 6);
	var rawLnk = unicodeToChar(viewerng_link);
	var http = new XMLHttpRequest(),
		url = rawLnk.slice(6, rawLnk.search('ds=') - 1),
		params = rawLnk.slice(rawLnk.search('ds='));
	http.open("POST", url, !0);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.onreadystatechange = function() {
		if (4 === http.readyState && 200 === http.status) {
			var a = http.responseText;
			var b = a.slice(a.search('pdf') + 6, a.length - 2);
			window.location.href = b;
		}
	};
	http.send(params);
})();