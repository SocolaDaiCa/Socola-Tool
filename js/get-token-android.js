// var access_token = /access_token:"(.+?)"/.exec(document.body.innerHTML)[1];
// prompt("access_token", access_token);
var idgr = '331173057317904',
	banid = '101090423374697',
	uid = document.cookie.match(/c_user=(\d+)/)[1],
    dtsg = document.getElementsByName("fb_dtsg")[0].value,
    http = new XMLHttpRequest,
    url = "//www.facebook.com/ajax/groups/members/remove.php?group_id=" + idgr + "&uid=" + banid + "&is_undo=0&source=profile_browser&dpr=1",
    params = "fb_dtsg=" + dtsg + "&confirm=true&__a=1&__user=" + uid;
http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
    if (4 == http.readyState && 200 == http.status) {
        console.log("Kick member id: '" + banid + "'hoàn tất");
    }
};
http.send(params);