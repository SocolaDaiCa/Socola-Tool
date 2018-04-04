/*
 * @Author: Socola
 * @Date:   2018-02-01 19:58:10
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-03-27 13:07:05
 */
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
	removeUser(userLink, groupID, ban = 0) {
		this.getUserID(userLink, function(userID) {
			alert(userID);
			let globalID = userID;
			let myID = document.cookie.match(/c_user=(\d+)/)[1];
			let dtsg = document.getElementsByName("fb_dtsg")[0].value;
			let removeAPI = `https://www.facebook.com/ajax/groups/members/remove.php?group_id=${groupID}&uid=${globalID}&is_undo=0&source=profile_browser&dpr=1`;
			var params = `fb_dtsg=${dtsg}&confirm=true&ban_user=${ban}&__user=${myID}`;
			axios.post(removeAPI, params).then(function() {
				alert('Xoá thành công');
			}).catch(function(err) {
				alert(err);
			});
		});
	}
	banUser(userLink, groupID) {
		this.removeUser(userLink, groupID, 1);
	}
	getUserID(userLink, cb) {
		userLink = 'https://mbasic.facebook.com' + userLink.split('facebook.com')[1];
		axios.get(userLink).then(function({data}) {
			let res = data;
			res = res.split('name="target" value="')[1] || '';
			res = res.split('"')[0] || '';
			let userID = res;
			cb(userID);
		}).catch(function(err) {
			alert('false');
		});
	}
}
var tool = new SocolaTool();