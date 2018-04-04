/*
 * @Author: Socola
 * @Date:   2018-02-15 11:14:38
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-05 05:42:03
 */
/* open tab when install or update*/
'use strict';
var chrome = chrome;
chrome.runtime.onInstalled.addListener((details) => {
	// return null;
	switch (details.reason) {
		case 'install':
			return chrome.tabs.create({ url: 'welcome.html' });
		// case 'update':
		// 	return chrome.tabs.create({ url: 'option.html' });
		default: break;
	}
});