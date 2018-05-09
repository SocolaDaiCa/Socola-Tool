/*
 * @Author: Socola
 * @Date:   2018-02-15 11:31:29
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-05-03 22:15:41
 */
'use strict';
const app = new Vue({
	el: '#app',
	data: {
		image: '',
		kipalog: {},
		viblo: [],
	},
	methods: {
		loadImage: function() {
			var url = 'http://socolaworld.devv/api/test/random-image';
			axios.get(url).then(({data}) => this.image = data);
		},
		deleteImage: function() {
			var image = this.image;
			var url = 'http://socolaworld.devv/api/test/delete-image';
			$.get(url, { image }, () => this.loadImage());
		},
		keyup: function(event) {
			switch (event.key) {
				case 'Delete':
					return this.deleteImage();
				default:
					this.loadImage();
					console.log(event);
			}
		},
		getNewFeedKipalog: function() {
			// let endPoint = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fkipalog.com%2Fposts%2Frss%3Fapi_key%3Dsj64nlzx347bgv4b9qghopoxbcwmv6';
			let endPoint = 'http://github.devv/XML-Converter/tests/convert.php?u=https://kipalog.com/posts/rss?api_key=sj64nlzx347bgv4b9qghopoxbcwmv6';
			axios.get(endPoint)
				.then((res) => this.kipalog = res.data.channel.item)//,res.data.item
				.catch((err) => console.log(err));
		}
	},
	computed: {
		imagShow: function() {
			return this.image + 'v?=' + this.i;
		}
	},
	created: function() {
		this.loadImage();
		window.addEventListener('keyup', this.keyup);
		this.getNewFeedKipalog();
	}
});