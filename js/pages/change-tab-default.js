/*
 * @Author: Socola
 * @Date:   2018-02-15 11:31:29
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-03-08 07:28:53
 */
'use strict';
const app = new Vue({
	el: '#app',
	data: {
		// image: 'F:/sa'+'ve/1353.jpg',
		image: '',
		i: 0
	},
	methods: {
		loadImage: function() {
			var url = 'http://images.devv/random-image.php';
			$.get(url, (res) => {this.i++, this.image = res});
		},
		deleteImage: function() {
			var image = this.image;
			var url = 'http://images.devv/delete-image.php';
			$.get(url, {image}, () => this.loadImage());
		},
		keyup: function(event) {
			switch(event.key){
				case 'Delete': return this.deleteImage();
				default:
				this.loadImage();
				console.log(event);
			}
		}
	},
	computed:{
		imagShow: function() {
			return this.image + 'v?=' + this.i;
		}
	},
	created: function() {
		this.loadImage();
		window.addEventListener('keyup', this.keyup);
	}
});