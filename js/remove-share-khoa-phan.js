'use strict';
var scriptRemoveShareKhoaPham = `
    if(document.getElementById("videoYoutubeIMG")){
		$.cookie('dataShare_'+post_id,true,{ expires: 3, path: '/' });
    	location.reload();
    }
`;
window.onload = function() {
    addScript(scriptRemoveShareKhoaPham);
};