'use strict';
/* open tab when install or update*/
chrome.runtime.onInstalled.addListener((details) => {
	// return null;
	switch (details.reason) {
		case 'install':
			return chrome.tabs.create({ url: 'welcome.html' });
		case 'update':
			return chrome.tabs.create({ url: 'option.html' });
	}
});

/* Death Click*/
! function(chrome) {
	var SocolaTool = chrome.contextMenus.create({
		title: 'Socola Tool',
		contexts: ['link']
	});

	var removeUser = chrome.contextMenus.create({
		title: 'Xóa khỏi nhóm',
		contexts: ['link'],
		parentId: SocolaTool
	});

	var banUser = chrome.contextMenus.create({
		title: 'Chặn khỏi nhóm',
		contexts: ['link'],
		parentId: SocolaTool
	});

	chrome.storage.sync.get({ groups: [] }, function({ groups }) {
		groups.forEach(function(group, index) {
			chrome.contextMenus.create({
				title: group.name,
				contexts: ['link'],
				parentId: removeUser,
				onclick: function(info, tabs) {
					chrome.tabs.query({
						"active": true,
						"currentWindow": true
					}, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id, {
							"functiontoInvoke": "removeUser",
							"link": info.linkUrl,
							groupID: group.id
						}, () => {});
					});
				}
			});
		});

		groups.forEach(function(group, index) {
			chrome.contextMenus.create({
				title: group.name,
				contexts: ['link'],
				parentId: banUser,
				onclick: function(info, tabs) {
					chrome.tabs.query({
						"active": true,
						"currentWindow": true
					}, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id, {
							"functiontoInvoke": "banUser",
							"link": info.linkUrl,
							groupID: group.id
						}, () => {});
					});
				}
			});
		});
	});
}(chrome);
// ! function(e) {
// 	e.runtime.onMessage.addListener(function(o, r, a) {
// 				// ! function(fb_dtsg, c_user) {
// 				// 	var http = new XMLHttpRequest();
// 				// 	var url = "https://www.facebook.com/v1.0/dialog/oauth/confirm";
// 				// 	var params = `fb_dtsg=${fb_dtsg}&app_id=165907476854626&redirect_uri=fbconnect://success&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=${c_user}`;
// 				// 	http.open("POST", url, !0);
// 				// 	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 				// 	http.onreadystatechange = function() {
// 				// 		if (4 == http.readyState && 200 == http.status) {
// 				// 			var res = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
// 				// 			res = res ? res[1] : "Failed to get Access token make sure you authorized the HTC sense app";
// 				// 			// prompt("Token", a);
// 				// 			e.tabs.sendMessage(r.tab.id, { cmd: "access_token_callback", data: res});
// 				// 		}
// 				// 	};
// 				// 	http.send(params);
// 				// }('AQE8yG9ObdxO:AQHDLpw0JXTT', '100004399725901');
// 				var n = new FormData;
// 				n.append("app_id", "165907476854626"), 
// 				n.append("redirect_uri", "fbconnect://success"), 
// 				n.append("display", "popup"), 
// 				n.append("return_format", "access_token"), 
// 				n.append("fb_dtsg", 'AQE8yG9ObdxO:AQHDLpw0JXTT'), 
// 				fetch("https://www.facebook.com/v2.8/dialog/oauth/confirm", {
// 						method: "POST",
// 						credentials: "include",
// 						body: n
// 					}).then(function(e) {
// 						return e.text()
// 					}).then(function(t) {
// 							// if (c = !1, t.includes("access_token=")) try {
// 							var o = t.match(/access_token=([^&]+)/)[1];
// 							e.tabs.sendMessage(r.tab.id, { cmd: "access_token_callback", data: o })
// 							// });
// 						}(chrome);
chrome.storage.sync.get({ fb: { blockSeen: false } }, function({ fb }) {
	/* block seen*/
	if (fb.blockSeen) {
		chrome.webRequest.onBeforeRequest.addListener(function(details) {
			return { cancel: true };
		}, {
			urls: [
				"*://*.facebook.com/ajax/mercury/change_read_status.php?dpr=1"
			]
		}, ["blocking"]);
	}
	
});