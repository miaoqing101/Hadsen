
// import myHeader from '../components/header.vue';
// import detailsContent from '../components/details-content.vue';
// import productList from '../components/product-list.vue';

Vue.component('my-header', function (resolve) {
    require(['../components/header.vue'], resolve);
})
Vue.component('product-list', function (resolve) {
    require(['../components/product-list.vue'], resolve);
})
Vue.component('my-footer', function (resolve) {
    require(['../components/footer.vue'], resolve);
})

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'details',
            path: '/details/:modal',
            component: function(resolve) { require(['../components/details-content.vue'], resolve); } // resolve => require(['../components/details-content.vue', resolve])
        }
    ]
})

detailsVm = new Vue({
    // el: '#details-div',
    router: router,
    data: {
        
    },
    created() {
        // $('.goods-cate').show();
        // var cateTar = $('.cate-click');
        
        // cateTar.click(function(){
        //     alert(123);
        //     var cateNum = $(this).text().split('-')[1];
        //     console.log(cateNum);
        //     console.log(this.$router);
        //     this.$router.push({ name: 'details', params: { modal: cateNum }})
        // })

        if(window.location.href.indexOf('/details/') == -1) {
            $('.goods-cate').show();
        }
    },
    mounted() {

    }
}).$mount('#details-div');

