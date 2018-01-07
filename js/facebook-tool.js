'use strict';
/*Death Click*/
chrome.extension.onMessage.addListener((message, sender, callback) => {
	switch (message.functiontoInvoke) {
		case 'removeUser':
			return tool.removeUser(message.link, message.groupID);
		case 'banUser':
			return tool.banUser(message.link, message.groupID);
	}
});
