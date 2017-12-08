"use strict";
/*Death Click*/
chrome.extension.onMessage.addListener((message, sender, callback) => {
  // tool.addScript(`alert('Đừng tự xóa bản thân chứ =))');`);
  // if(!message.functiontoInvoke){
  // 	return;
  // }
  switch (message.functiontoInvoke) {
    case "removeUser":
      return tool.removeUser(message.link, message.groupID);
    case "banUser":
      return tool.banUser(message.link, message.groupID);
  }
});
chrome.runtime.onMessage.addListener(function(o, r, a) {
  alert(JSON.stringify(o) + "ss");
});
/*Lưu lại một số dữ liệu*/
