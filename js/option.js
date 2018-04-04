/*
 * @Author: Socola
 * @Date:   2018-02-01 19:58:09
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-05 05:29:24
 */
'use strict';
var data = {
	changeTabDefault: true,
	token: {
		status: 'pending',
		class: '',
		value: ''
	}
};
const app = new Vue({
	el: '#app',
	data,
	methods: {
		getToken: function() {
			tool.runScriptCode(code.getTokenIOS);
		},
		getUserID: function() {
			tool.runScriptCode(code.getUserID);
		},
		checkTokenLive: function() {
			if (!this.token.value || this.token.value === "") {
				this.token.class = 'has-danger';
				this.token.status = 'Empty';
				console.log('empty token');
				return;
			}
			// axios.get(`https://graph.facebook.com/me?access_token=${this.token}`).then((res) => {
			// 	this.label1.class = 'label label-success';
			// 	this.label1.text = 'Live';
			// }).catch((error) => {
			// 	console.log(error);
			// 	this.label1.class = 'label label-danger';
			// 	this.label1.text = 'Die';
			// });
		},
	},
	computed: {
		saveConfig: function() {
			// if (this.changeTabDefault) {
			// 	console.log('true');
			// } else {
			this.changeTabDefault;
				console.log('x');
			// }
			// }
		}
	},
	created: function() {
		// this.token.class = 'has-danger';
		// this.send();
		// chrome.storage.sync.get({
		// 	token: '',
		// 	groups: []
		// }, ({ token, groups }) => {
		// 	this.token.value = token;
		// 	this.groups = groups;
		this.checkTokenLive();
		// });
	}
});