// var app = new Vue({
//     el: '#app',
//     data: {
//         name: 'Socola',
//     },
//     methods: {
//         injectScript() {
//             // var domIframeSearchImdb = document.getElementById('iframe-search-imdb');
//             // domIframeSearchImdb.window.eval(x.toString());
//             // frames[0].window.eval(x.toString());
//             console.log('ss');

//         }
//     },
//     created() {
//         console.log('sss');
//         this.injectScript();
//     }
// });
document.getElementById('btn-inject-script').addEventListener('click', function () {
   console.log(frames[0].window.alert('s'));
});
// function search() {
//     var movieName = document.getElementsByName('movie_name')[0].value;
//     console.log(movieName);
//     document.getElementById("iframe-search-imdb").src = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${movieName}&s=all`;
// }

// function x() {
//     alert('msg');
// }
// $(function() {
//     $('#btn-inject-script').click(function() {

//     });
// })

// //  frames[0].window.foo = function(){
// //    console.log ("Look at me, executed inside an iframe!", window);
// // }