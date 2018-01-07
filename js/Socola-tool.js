'use strict';
class SocolaTool {
	constructor() {}
	addScript(script) {
		let scriptTag = document.createElement("script");
		scriptTag.innerHTML = script;
		document.head.appendChild(scriptTag);
	}

	addCss(css) {
		let cssTag = document.createElement("style");
		cssTag.type = "text/css";
		cssTag.innerHTML = css;
		document.head.appendChild(cssTag);
	}

	runScriptFile(file) {
		chrome.tabs.executeScript({ file });
	}

	runScriptCode(code) {
		chrome.tabs.executeScript({ code });
	}

	getGlobalId(scopeID) {
		let token = 'EAACW5Fg5N2IBAEo4h8wUnMAFe3qwhwg7CEtTt0fkDV430pYL8mr9o9MeTq3oUN589dZC395FGWMLq9zAejklZB5VPihArC5bCL60LBQFzZAqod9AJuoEMshoPP2ZCqhG6rqbglgwoMw11PYrpxsOVfPqjyE0aveYQV7oWYrJ27YzGo5tq2ZAD2YyHLlUjvt0ZD';
		var globalID = scopeID;
		$.ajaxSetup({ "async": false }); /*đồng bộ*/
		$.get("https://graph.facebook.com/", {
			'ids': scopeID,
			'fields': 'id',
			'access_token': token
		}, function(res) {
			globalID = res;
			console.log(res);
		});
		$.ajaxSetup({ "async": true }); /*bất đồng bộ*/
		return globalID;
	}

	removeUser(userLink, groupID, ban = 0) {
		let scopeID = (userLink.split("?")[0]).split("/");
		scopeID = scopeID[scopeID.length - 1];
		let globalID = this.getGlobalId(scopeID);
		let myID = document.cookie.match(/c_user=(\d+)/)[1];
		let dtsg = document.getElementsByName("fb_dtsg")[0].value;
		let removeAPI = `https://www.facebook.com/ajax/groups/members/remove.php?group_id=${groupID}&uid=${globalID}&is_undo=0&source=profile_browser&dpr=1`;
		var params = `fb_dtsg=${dtsg}&confirm=true&ban_user=${ban}&__user=${myID}`;
		jQuery.post(removeAPI, params);
	}
	banUser(userLink, groupID) {
		this.removeUser(userLink, groupID, 1);
	}
	// unfriend(uid, norefresh = true){
	//     AsyncRequest().setURI('/ajax/profile/removefriendconfirm.php').setData({ uid,norefresh}).send();
	// }
	getToken(fb_dtsg, c_user) {
		var http = new XMLHttpRequest();
		var url = "https://www.facebook.com/v1.0/dialog/oauth/confirm";
		var params = `fb_dtsg=${fb_dtsg}&app_id=165907476854626&redirect_uri=fbconnect://success&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=${c_user}`;
		http.open("POST", url, !0);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.onreadystatechange = function() {
			if (4 == http.readyState && 200 == http.status) {
				var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
				a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app";
				prompt("Token", a);
			}
		};
		http.send(params);
	}
}
var tool = new SocolaTool();