/*
 * @Author: Socola
 * @Date:   2018-04-09 06:50:59
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-09 06:52:18
 */
(function() {
	'use strict';
	var link = window.location.href;
	if (document.location.host !== "www.fshare.vn"){
		alert("Link Fshare không hợp lệ");
	}
	else{
		location.href = link.replace("fshare.vn", "getlinkfshare.com");
	}
})();