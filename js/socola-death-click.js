// function
function getGlobalId(link) {
	// body...
}
function blockUser(info) {
	let userId 
}
// action
chrome.contextMenus.create({
    title: "Block User",
    contexts: ["link"],
    onclick: blockUser,
});