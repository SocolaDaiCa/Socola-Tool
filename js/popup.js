/*
 * @Author: Socola
 * @Date:   2018-02-01 19:58:09
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-09 15:00:49
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
		config: {}
	},
	methods: {
		runScripCode: function(name) {
			chrome.tabs.executeScript({ code: this.code[name] });
		},
		getLinkFshare: function() {
			chrome.tabs.executeScript({file: 'js/script/get-link-fshare.js'});
		},
		getTokenIOS: function() {
			chrome.tabs.executeScript({ file: 'js/script/get-token-ios-for-page.js' });
		},
		getTokenAndroid: function() {
			chrome.tabs.executeScript({ file: 'js/script/get-token-android.js' });
		},
		getLinkJavHD: function() {
			chrome.tabs.executeScript({ file: "js/script/get-link-javhd.js" });
		}
	},
});