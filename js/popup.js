"use strict";
$(function() {
  // get token ios
  $("#get-token-ios").click(function() {
    tool.runScriptCode(code.getTokenIOS);
  });
  // get token android
  $("#get-token-android").click(function() {
    tool.runScriptCode(code.getTokenAndroid);
  });
  $("#get-userid").click(function() {
    tool.runScriptCode(code.getUserID);
  });
});

var app = new Vue({
  el: "#app",
  data: {
    x: 0
  },
  methods: {}
});

chrome.storage.sync.set(
  {
    // dtsg: document.getElementsByName("fb_dtsg")[0].value
    x: 1
  },
  function() {}
);
chrome.storage.sync.get({ x: 1 }, function(item) {
  // console.log(item);
  // app.x = item.x;
});
$(function() {
  $("*").css("background", "black");
});
