'use strict';
$(function() {
	// get token ios
	$("#get-token-ios").click(function() {
		runScript(getTokenIOS);
	});
	// get token android
	$("#get-token-android").click(function() {
		runScript(getTokenAndroid);
	});
	$("#get-userid").click(function() {
		runScript(getUserID);
	});
});