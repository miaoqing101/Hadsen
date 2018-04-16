
Vue.component('my-header', function (resolve) {
    require(['../components/header.vue'], resolve);
})
Vue.component('product-list', function (resolve) {
    require(['../components/product-list.vue'], resolve);
})
Vue.component('my-footer', function(resolve){
    require(['../components/footer.vue'], resolve);
})

$(function () {

window.app = new Vue({
    data: function () {
        return {
            liveImages: []
        }
    },
    mounted: function () {
        // var images = $('.gallery-area .item img');
        // for(var i = 0; i < images.length; i++){
            
        //     console.log(images.eq(i).width() + ', ' + images.eq(i).height());
        // }
        // debugger

        var gas = $('.gallery-area');

        var groupImgLength = [8, 9, 10, 16];
        for(var j = 0; j < groupImgLength.length; j++){
            for(var i = 0; i < groupImgLength[j]; i++){
                var image = new Image();
                image.src = 'src/images/live/' + (j + 1) + '/small/' + (i + 1) + '.jpg';
                var div = document.createElement('div');
                div.setAttribute('class', 'item');
                div.appendChild(image);
                gas.eq(j).append(div);

                this.receiveImage(image);
            }
        }

        // executeSwiper();
        executeSwiper1();
    },
    methods: {
        receiveImage: function (img) {
            var image = img;
            var _this = this;

            image.onload = function () {
                var w = image.width;
                var h = image.height;

                var borWidth = 192;
                
                if (w / h == 1) {
                    image.width = borWidth;
                    image.height = borWidth;
                    // image.cssText = 'left: 0; top: 0;';
                } else if (w / h > 1) {
                    image.height = borWidth;
                    image.width = w * borWidth / h;
                    image.style.cssText = 'left: ' + ((borWidth - w * borWidth / h) / 2) + 'px';
                } else {
                    image.width = borWidth;
                    image.height = h * borWidth / w;
                    image.style.cssText = 'top: ' + ((borWidth - h * borWidth / w) / 2) + 'px';
                }
                $(image).fadeIn();
                console.log(image.width + ', ' + image.height);
                _this.liveImages.push(image);
            }
        }
    }
}).$mount('#scene-div')

})