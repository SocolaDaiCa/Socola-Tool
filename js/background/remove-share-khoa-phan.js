/*
 * @Author: Socola
 * @Date:   2018-02-01 19:58:10
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-12 21:33:03
 */
'use strict';
window.onload = function() {
	let scriptTag = document.createElement("script");
	scriptTag.innerHTML = `
	    if(document.getElementById("videoYoutubeIMG")){
	        $.cookie('dataShare_'+post_id,true,{ expires: 3, path: '/' });
	        location.reload();
	    }
	`;
	document.head.appendChild(scriptTag);
};