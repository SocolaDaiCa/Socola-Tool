/*
 * @Author: Socola
 * @Date:   2018-04-09 06:45:24
 * @Last Modified by:   Socola
 * @Last Modified time: 2018-04-09 06:45:45
 */
var access_token = /access_token:"(.+?)"/.exec(document.body.innerHTML)[1];
prompt("access_token", access_token);