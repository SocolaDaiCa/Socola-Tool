// getToken(fb_dtsg, c_user) {
	// 	var http = new XMLHttpRequest();
	// 	var url = "https://www.facebook.com/v1.0/dialog/oauth/confirm";
	// 	var params = `fb_dtsg=${fb_dtsg}&app_id=165907476854626&redirect_uri=fbconnect://success&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=${c_user}`;
	// 	http.open("POST", url, !0);
	// 	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// 	http.onreadystatechange = function() {
	// 		if (4 == http.readyState && 200 == http.status) {
	// 			var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
	// 			a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app";
	// 			prompt("Token", a);
	// 		}
	// 	};
	// 	http.send(params);
	// }
	// unfriend(uid, norefresh = true){
	//     AsyncRequest().setURI('/ajax/profile/removefriendconfirm.php').setData({ uid,norefresh}).send();
	// }

		// getGlobalId(scopeID) {
		
	// 	let token = 'EAACW5Fg5N2IBAEo4h8wUnMAFe3qwhwg7CEtTt0fkDV430pYL8mr9o9MeTq3oUN589dZC395FGWMLq9zAejklZB5VPihArC5bCL60LBQFzZAqod9AJuoEMshoPP2ZCqhG6rqbglgwoMw11PYrpxsOVfPqjyE0aveYQV7oWYrJ27YzGo5tq2ZAD2YyHLlUjvt0ZD';
	// 	var globalID = scopeID;
	// 	$.ajaxSetup({ "async": false }); /*đồng bộ*/
	// 	$.get("https://graph.facebook.com/", {
	// 		'ids': scopeID,
	// 		'fields': 'id',
	// 		'access_token': token
	// 	}, function(res) {
	// 		globalID = res;
	// 		console.log(res);
	// 	});
	// 	$.ajaxSetup({ "async": true }); /*bất đồng bộ*/
	// 	return globalID;
	// }