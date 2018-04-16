Vue.component('my-header', function(resolve){
    require(['../components/header.vue'], resolve);
})

Vue.component('my-footer', function(resolve){
    require(['../components/footer.vue'], resolve);
})

new Vue({
    el: '#h-index'
})