'use strict';
const app = new Vue({
	el: '#app',
	data: {
		token: "",
		groups: [],
		label1: {
			class: 'label label-warning',
			text: 'pending'
		}
	},
	methods: {
		getToken: function() {
			tool.runScriptCode(code.getTokenIOS);
			// axios.get('https://mbasic.facebook.com')
			// .then(function({data}) {
			// 	var fb_dtsg, c_user;
			// 	fb_dtsg = data.split('name="fb_dtsg" value="')[1] || '';
			// 	fb_dtsg = fb_dtsg.split('"')[0] || '';
			// 	c_user = data.match(/<input type="hidden" name="target" value="(\d+)"/i)[1] || '';
			// 	console.log(`${fb_dtsg} ${c_user}`);
			// 	var token = tool.getToken(fb_dtsg, c_user);
			// });
		},
		getUserID: function() {
			tool.runScriptCode(code.getUserID);
		},
		updateGroups: function() {
			axios.get(`https://graph.facebook.com/v2.11/me?fields=groups.limit(1000){name,administrator}&access_token=${this.token}`)
				.then((res) => {
					var groups = res.data.groups.data;
					this.groups = groups.filter(group => group.administrator);
					chrome.storage.sync.set({ groups: this.groups });
					toastr.success('Cập nhật danh sách nhóm hoàn tất');
				}).catch(() => toastr.error('Lỗi gì ý'));
		},
		checkTokenLive: function() {
			// if (!navigator.onLine) {
			// 	this.label1.class = 'label label-warning';
			// 	this.label1.text = 'not internet';
			// 	return;
			// }
			if (!this.token || this.token == "") {
				this.label1.class = 'label label-warning';
				this.label1.text = 'Empty';
				return;
			}
			axios.get(`https://graph.facebook.com/me?access_token=${this.token}`).then((res) => {
				this.label1.class = 'label label-success';
				this.label1.text = 'Live';
			}).catch((error) => {
				console.log(error);
				this.label1.class = 'label label-danger';
				this.label1.text = 'Die';
			});
		},
		send: function() {
			chrome.runtime.sendMessage({ cmd: 'get_access_token' });
		}
	},
	created: function() {
		this.send();
		chrome.storage.sync.get({
			token: '',
			groups: []
		}, ({ token, groups }) => {
			this.token = token;
			this.groups = groups;
			this.checkTokenLive();
		});
	},
	computed: {
		saveToken: function() {
			chrome.storage.sync.set({ token: this.token }, () => {
				this.checkTokenLive();
			});
		}
	}
});
// chrome.runtime.onMessage.addListener(function(o, n, r) {
// 	console.log(o);
// });
// chrome.runtime.onMessage.addListener(function(o, n, r) {
// 	// if(o.cmd !== 'access_token_callback') return;
// 	// app.token = o.data.token;
// 	// toastr.success('ahihi');
// 	console.log(o);
// 	console.log(n);
// 	console.log(r);
// })