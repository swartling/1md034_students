/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
    infoArray: []
  },
  created: function () {
    socket.on('initialize', function (data) {
      console.log("initialize");
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      console.log("currentQueue");
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentInfo', function (data) {
      console.log("currentInfo");
      this.infoArray = data.infoArray;
    }.bind(this));
  }
});
