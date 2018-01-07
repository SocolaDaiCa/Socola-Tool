'use strict';
const app = new Vue({
	el: '#app',
	data: {
		listCss: [],
		url: '',
		css: {}
	},
	methods: {
		get: function() {
			chrome.storage.sync.get({ listCss: [] }, function(res) {
				app.listCss = res.listCss;
			});
		},
		save: function() {
			let listCss = this.listCss;
			// listCss = [];
			for (var i = listCss.length - 1; i >= 0; i--) {
				if(listCss[i].url === this.css.url){
					listCss[i] = this.css;
				}
			}
			chrome.storage.sync.set({listCss}, function(res) {
				toastr.success('Save success.');
				app.get();
			});
		},
		add: function() {
			var url = this.url.trim();
			this.url = '';
			console.log(url);
			for (var i = this.listCss.length - 1; i >= 0; i--) {
				if(this.listCss[i].url === url){
					toastr.warning('Link đã tồn tại');
					return;
				}
			}
			this.listCss.push({url, value: ''});
			this.save();
		},
		delete: function() {
			var url = this.css.url;
			this.listCss = this.listCss.filter(e => e.url !== url);
			this.save();
		}
	},
	created: function() {
		this.get();
	}
});