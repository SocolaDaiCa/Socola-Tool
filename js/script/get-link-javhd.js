/*
 * @Author: Socola
 * @Date:   2018-04-09 06:54:41
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-09 06:56:01
 */
(function() {
	'use strict';
	var link = window.location.href;
	if(document.location.host !== "www.javhd.com"
		&& document.location.host !== "javhd.com"){
		alert("Link HD không hợp lệ");
	}
	else{
    	location.href = link.replace("javhd.com", "j2avhd.com");
	}
})();