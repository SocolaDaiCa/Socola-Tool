'use strict';
$(function() {
    $(".list-group > a").each(function(item) {
       $(this).addClass("list-group-item");
    });
    $("a:not([href])").each(function(item) {
       $(this).attr("href", "#"); 
    });
    chrome.storage.sync.get(null, function(res) {
        app.config = res;
    });
});

var app = new Vue({
    el: "#app",
    data:{
        config: {}
    },
    methods: {
        getLinkFshare: function() {
            tool.runScriptCode(code.getLinkFshare);
        },
        getLinkJavHD: function() {
            tool.runScriptCode(code.getLinkJavHD);
        }
    },
});