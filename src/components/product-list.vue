<style scoped>
    .product-sort { margin-top: -80px; width: 300px; min-height: 823px; position: relative; }
    .product-sort .gradient-div { position: absolute; left: -14px; width: 328px; height: 823px; background: url(/src/images/left-list-gradient.png) no-repeat 0 0; }
    .product-sort .hd { height: 80px; background: #d3d8dd; line-height: 80px; }
    .product-sort .hd p { display: inline-block; margin-left: 20px; padding-left: 37px; font-size: 20px; line-height: 1; color: #666; background: url(/src/images/left-list-icon.png) no-repeat left center; }
    
    .bd .item .title { padding-left: 42px; height: 60px; line-height: 60px; font-size: 18px; }
    .bd .item:hover .title { background: #0084ff; }

    .bd .title a { width: 211px; display: inline-block; }
    .bd .title .arrow { width: 10px; height: 18px; display: inline-block; vertical-align: middle; background: url(/src/images/left-list-arrow.png) no-repeat right center; }
    .bd .item:hover .arrow { background: url(/src/images/left-list-arrow.png) no-repeat left center; }
    .bd .item .title a { color: #666; }
    .bd .item:hover .title a { color: #fff; }
    
    .bd { position: relative; z-index: 999; }
    .bd .subitem { display: none; width: 896px; height: 526px; position: absolute; left: 300px; top: 0; background: rgba(255, 255, 255, .94); border: 2px solid #0084ff; }
    .subitem .inner { padding: 0 40px; }
    .subitem .inner .tit { line-height: 59px; border-bottom: 1px solid #ccc; overflow: hidden; }
    .subitem .inner .tit .name { float: left; font-size: 16px; color: #0084ff; }
    .subitem .inner .tit ul { float: left; color: #666; }
    .subitem .inner .tit ul li { float: left; margin-left: 20px; }
    .subitem .inner .tit ul li:hover { cursor: pointer; text-decoration: underline; }

    .bd .item:hover .subitem { display: block; }
</style>

<template>
    <div class="product-sort fl">
        <div class="gradient-div"></div>
        <div class="hd"><p>产品导航</p></div>
        <div class="bd">
            <div class="item">
                <div class="title one">
                    <a href="#">循环水</a>
                    <div class="arrow"></div>
                </div>
                
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">阻垢分散剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-100</div></li>
                                <li><div class="cate-click">HDS-102</div></li>
                                <li><div class="cate-click">HDS-108</div></li>
                                <li><div class="cate-click">HDS-180</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">阻垢缓蚀剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-208</div></li>
                                <li><div class="cate-click">HDS-210</div></li>
                                <li><div class="cate-click">HDS-212</div></li>
                                <li><div class="cate-click">HDS-220</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">缓蚀剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-301</div></li>
                                <li><div class="cate-click">HDS-310</div></li>
                                <li><div class="cate-click">HDS-311</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">预膜剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-320</div></li>
                                <li><div class="cate-click">HDS-331</div></li>
                                <li><div class="cate-click">HDS-332</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">杀菌剂灭藻剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-400</div></li>
                                <li><div class="cate-click">HDS-401</div></li>
                                <li><div class="cate-click">HDS-410</div></li>
                                <li><div class="cate-click">HDS-422</div></li>
                                <li><div class="cate-click">HDS-450</div></li>
                                <li><div class="cate-click">HDS-460</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">微生物分散剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-580</div></li>
                                <li><div class="cate-click">HDS-590</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">反渗透</a>
                    <div class="arrow"></div>
                </div>
                
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">RO阻垢剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-718</div></li>
                                <li><div class="cate-click">HDS-728</div></li>
                                <li><div class="cate-click">HDS-760</div></li>
                                <li><div class="cate-click">HDS-780</div></li>
                                <li><div class="cate-click">HDS-790</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">RO杀菌剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-710</div></li>
                                <li><div class="cate-click">HDS-712</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">RO清洗剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-770</div></li>
                                <li><div class="cate-click">HDS-771</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">RO絮凝剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-700</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">废水</a>
                    <div class="arrow"></div>
                </div>
                
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">多功能固体药剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-600</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">氨氮去除剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-601</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">脱色剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-602</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">COD去除剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-608</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">助凝剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-615</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">絮凝剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-620</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">污泥脱水剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-660</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">重金属捕捉剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-680</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">造纸化学品</a>
                    <div class="arrow"></div>
                </div>

                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">纸浆杀菌剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-801</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">纸浆防腐剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-802</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">制浆消泡剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-806</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">涂料专用消泡剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-810</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">空调专用化学品</a>
                    <div class="arrow"></div>
                </div>
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">阻垢缓蚀剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-900</div></li>
                            </ul>
                        </div>
                        <div class="tit">
                            <div class="name">杀菌剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-909</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">锅炉火侧</a>
                    <div class="arrow"></div>
                </div>
                <div class="line"></div>
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">结焦抑制剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-1210</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">脱硫专用化学品</a>
                    <div class="arrow"></div>
                </div>
                
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">脱硫增效剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-1010</div></li>
                            </ul>
                        </div>
                        <div class="tit tit1">
                            <div class="name">消泡剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-1012</div></li>
                            </ul>
                        </div>
                        <div class="tit tit1">
                            <div class="name">重金属捕捉剂</div>
                            <ul>
                                <li><div class="cate-click">HDS-1018</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title one">
                    <a href="#">设备</a>
                    <div class="arrow"></div>
                </div>
                
                <div class="subitem">
                    <div class="inner">
                        <div class="tit tit1">
                            <div class="name">反渗透设备</div>
                            <ul>
                                <li><div class="cate-click">反渗透设备</div></li>
                            </ul>
                        </div>
                        <div class="tit tit1">
                            <div class="name">自动化加药系统</div>
                            <ul>
                                <li><div class="cate-click">自动化加药系统</div></li>
                            </ul>
                        </div>
                        <div class="tit tit1">
                            <div class="name">废水处理设备</div>
                            <ul>
                                <li><div class="cate-click">废水处理设备</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        mounted: function () {
            
            var cateTar = $('.cate-click');
            var _this = this;
            
            cateTar.click(function(){
                var cateNum = $(this).text().split('-')[1];
                if(window.location.href.indexOf('details.html') != -1)
                    _this.$router.push({ name: 'details', params: { modal: cateNum }})
                else
                    window.location.href = 'details.html#/details/' + cateNum;
            })

            // cateTar.one('click', function () {
            //     $('.goods-cate').hide();
            // })
            
            //产品导航
            $(".product_sort .bd .item").hover(function(){
                $(this).addClass("layer");
            },function(){
                $(this).removeClass("layer");
            });
        },
        method: function () {

        }
    }
</script>