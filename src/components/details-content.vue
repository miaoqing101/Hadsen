<style scoped>
	.details-content-container { padding-top: 40px; }
	.h1 { margin-bottom: 40px; line-height: 40px; font-size: 30px; text-align: center; }
	.details-content-div { padding-bottom: 80px; }
</style>

<template>
    <div class="details-content-container">	
		<p v-text="productName" class="h1"></p>
		<div class="details-content-div">
		
		</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                modal: null,
				productName: ''
            }
        },
		watch: {
			$route (to, from) {
				this.loadProductDetails();
			}
		},
        mounted() {
			this.loadProductDetails();
			$('.goods-cate').hide();
        },
		methods: {
			loadProductDetails () {
				this.modal = this.$route.params.modal;
				$('.details-content-div').load('../src/components/product-page/HDS-'+ this.modal + '.html #content');
						
						
				var currentCate = $('.cate-click:contains("HDS-' + this.modal + '")');
				this.productName = currentCate.length ? currentCate.siblings().eq(0).text() + ' HDS-' + this.modal : '未找到该产品';
			}
		}
    }
</script>