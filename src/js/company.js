Vue.component('my-header', function (resolve) {
    require(['../components/header.vue'], resolve);
})
Vue.component('product-list', function (resolve) {
    require(['../components/product-list.vue'], resolve);
})
Vue.component('my-footer', function(resolve){
    require(['../components/footer.vue'], resolve);
})

companyVm = new Vue({
    el: '#company-div',
    data: function () {
        return {

        }
    }
})