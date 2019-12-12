require('./bootstrap');

window.Vue = require('vue');

let Myheader = require('./components/Header.vue').default;
let MyFooter = require('./components/Footer.vue');

const app = new Vue({
    el : '#app',
    components : {Myheader, MyFooter}
});