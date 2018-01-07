// Saves options to chrome.storage
'use strict';
// chrome.storage.sync.set({ name: 'jinx' }, function() {
// 	console.log('ahihi');
// });
var url = 'facebook.com';
var css = '*{background: orange;}';
chrome.storage.sync.get({addCss: [] }, function(res) {
	var addCss = new Map();
	res.addCss.forEach(item => addCss[item.key] = item.value);
	addCss.set(url, css);
	res.addCss = [];
	console.log(addCss);
	console.log(addCss.size);
	for (let [key, value] of addCss) {
		res.addCss.push({key, value});
	}
	chrome.storage.sync.set({addCss: res.addCss});
});


/*--------------------------------------*/
// function save_options() {
//     var color = document.getElementById('color').value;
//     var likesColor = document.getElementById('like').checked;
//     chrome.storage.sync.set({
//         favoriteColor: color,
//         likesColor: likesColor
//     }, function() {
//         // Update status to let user know options were saved.
//         var status = document.getElementById('status');
//         status.textContent = 'Options saved.';
//         setTimeout(function() {
//             status.textContent = '';
//         }, 750);
//     });
// }

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//     // Use default value color = 'red' and likesColor = true.
//     chrome.storage.sync.get({
//         favoriteColor: 'red',
//         likesColor: true
//     }, function(items) {
//         document.getElementById('color').value = items.favoriteColor;
//         document.getElementById('like').checked = items.likesColor;
//     });
// }
// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click',
//     save_options);