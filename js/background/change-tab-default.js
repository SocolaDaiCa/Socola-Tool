/*
 * @Author: Socola
 * @Date:   2018-02-15 11:02:39
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-03-08 07:27:53
 */
'use strict';
(function (chrome) {
	chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.create({url: '/html/change-tab-default.html'});
	});
})(chrome);