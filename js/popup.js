/*
 * @Author: Socola
 * @Date:   2018-02-01 19:58:09
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-05 05:49:25
 */
'use strict';
// $(function() {
// 	$(".list-group > a").each(function(item) {
// 		$(this).addClass("list-group-item");
// 	});
// 	$("a:not([href])").each(function(item) {
// 		$(this).attr("href", "#");
// 	});
// 	chrome.storage.sync.get(null, function(res) {
// 		app.config = res;
// 	});
// });

var app = new Vue({
	el: "#app",
	data: {
		code: {
			getLinkFshare: `
	if (location.host == "www.fshare.vn") {
		location.href = 'https://getlinkfshare.com' + location.pathname;
	} else {
		alert('Đây không phải link Fshare');
	}`,
			getTokenIOS: `
	var uid = document.cookie.match(/c_user=(\\d+)/)[1];
	dtsg = document.getElementsByName("fb_dtsg")[0].value;
	http = new XMLHttpRequest();
	url = "//www.facebook.com/v1.0/dialog/oauth/confirm";
	params = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
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
`,
			getTokenAndroid: `
	var access_token = /access_token:"(.+?)"/.exec(document.body.innerHTML)[1];
	prompt("access_token", access_token);
`,
			getUserID: `
	// var userID = /data-referrerid="(.+?)"/.exec(document.body.innerHTML)[1];
	var userID = /data-profileid="(.+?)"/.exec(document.body.innerHTML)[1];
	// var userID = document.head.innerHTML;
	// userID = userID.split('"entity_id":"')[1] || '';
	// userID = userID.split('"')[0] || '';
	prompt("UserID", userID || 'Lỗi rồi');
`,
			getLinkFshare: `
	var link = window.location.href;
	if(document.location.host != "www.fshare.vn")
		alert("Link Fshare không hợp lệ");
	else
		location.href = link.replace("fshare.vn", "getlinkfshare.com");
`,
			getLinkJavHD: `
	var link = window.location.href;
	var hos
	if(document.location.host != "www.javhd.com" && document.location.host != "javhd.com")
		alert("Link HD không hợp lệ");
	else
    	location.href = link.replace("javhd.com", "j2avhd.com");
`
		},
		config: {}
	},
	methods: {
		runScripCode: function(name) {
			chrome.tabs.executeScript({ code: this.code[name] });
		},
		getLinkFshare: function() {
			this.runScripCode('getLinkFshare');
			window.close();
		},
		getTokenIOS: function() {
			let code = this.code.getTokenIOS;
			chrome.tabs.executeScript({ code });
		},
		getLinkFshare: function() {
			let code = this.code.getLinkFshare;
			chrome.tabs.executeScript({ code });
		},
		getLinkJavHD: function() {
			let code = this.code.getLinkJavHD;
			chrome.tabs.executeScript({ code });
		}
	},
});