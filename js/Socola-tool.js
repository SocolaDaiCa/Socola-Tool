"use strict";
class SocolaTool {
  constructor() {}

  addScript(script) {
    var scriptTag = document.createElement("script");
    scriptTag.innerHTML = script;
    document.head.appendChild(scriptTag);
  }

  runScriptFile(file) {
    chrome.tabs.executeScript({ file });
  }

  runScriptCode(code) {
    chrome.tabs.executeScript({ code });
  }

  getGlobalId(scopeID) {
    $.ajaxSetup({ async: false }); /*đồng bộ*/
    $.get(
      "http://api.socolaworld.ga/find-my-fb-id.php",
      { q: scopeID },
      function(res) {
        console.log(res);
      }
    );
    $.ajaxSetup({ async: true }); /*bất đồng bộ*/
    return "100004399725901";
  }

  removeUser(userLink, groupID, ban = 0) {
    let scopeID = userLink.split("?")[0].split("/");
    scopeID = scopeID[scopeID.length - 1];
    let globalID = this.getGlobalId(scopeID);
    let myID = document.cookie.match(/c_user=(\d+)/)[1];
    let dtsg = document.getElementsByName("fb_dtsg")[0].value;
    let removeAPI = `https://www.facebook.com/ajax/groups/members/remove.php?group_id=${
      groupID
    }&uid=${globalID}&is_undo=0&source=profile_browser&dpr=1`;
    var params = `fb_dtsg=${dtsg}&confirm=true&ban_user=${ban}&__user=${myID}`;
    // jQuery.post(removeAPI, params);
  }
  banUser(userLink, groupID) {
    this.removeUser(userLink, groupID, 1);
  }
  noAction() {}

  /**/
}

const tool = new SocolaTool();
tool.noAction();
