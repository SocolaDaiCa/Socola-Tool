/*
 * @Author: Socola
 * @Date:   2018-04-09 13:46:22
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-09 15:00:41
 */
(function() {
	'use strict';
	var userID = /data-profileid="(.+?)"/.exec(document.body.innerHTML)[1];
	prompt("UserID", userID || 'Lỗi rồi');
})();