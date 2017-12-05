'use strict';
var chrome;

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

const groups = [
	{name: 'Socola World', id: '1621601174525404'},
	{name: 'SFIT giao lưu học hỏi', id: '677222392439615'}
];

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

