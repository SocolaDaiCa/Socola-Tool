'use strict';
window.onload = function() {
   tool.addScript(`
	    if(document.getElementById("videoYoutubeIMG")){
	        $.cookie('dataShare_'+post_id,true,{ expires: 3, path: '/' });
	        location.reload();
	    }
	`);
};