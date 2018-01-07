'use strict';
chrome.storage.sync.get({ listCss: [] }, function(res) {
	var hoshname = window.location.hostname;
	res.listCss.forEach(function(css) {
		if(hoshname.search(css.url) !== -1){
			tool.addCss(css.value);
		}
	});
});
