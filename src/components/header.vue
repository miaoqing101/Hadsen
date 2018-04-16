<style scoped>
	.header-placeholder { height: 100px; }
	.header { position: fixed; top: 0; left: 0; width: 100%; height: 110px; line-height: 110px; font-size: 0; z-index: 9999; box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px; background: #fff; }
	.h-container { width: 1200px; margin: 0 auto; }
	.h-container .left { float: left; }
	.h-container .left > a { vertical-align: middle; font-size: 0; line-height: 64px; display: inline-block; height: 64px; }
	.h-container .left > a > img { vertical-align: middle; }
	.h-container .left > a > span { margin-left: 1rem; font-size: 30px; color: #999; vertical-align: middle; }
	.h-container .right { float: right; }
	.nav-ul > li { float: left; margin-left: 20px; }
	.nav-ul > li a { color: #333; font-size: 20px; }
	.nav-ul > li.active a { color: #0084ff; }

</style>

<template>
	<div>
		<div class="header-placeholder"></div>
		<div class="header">
			<div class="h-container">
				<div class="left">
					<a href="index.html">
						<img src="/src/images/logo.png" alt="HDS" />
						<span>北京哈德逊源水处理技术有限公司</span>
					</a>
				</div>
				<div class="right">
					<ul class="nav-ul">
						<li><a href="index.html">首页</a></li>
						<li><a href="company.html">公司简介</a></li>
						<li><a href="applications.html">应用领域</a></li>
						<li><a href="scene.html">现场图片</a></li>		
						<li><a href="details.html">产品说明</a></li>
						<li><a href="contact.html">联系我们</a></li>
					</ul>
				</div>
				<div class="pull-right visible-xs">
					<!--<p>visible-xs</p>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted () {
			var href = window.location.href;
			if(href.indexOf('index.html') != -1) $('.nav-ul li').eq(0).addClass('active');
			else if(href.indexOf('company.html') != -1) $('.nav-ul li').eq(1).addClass('active');
			else if(href.indexOf('applications.html') != -1) $('.nav-ul li').eq(2).addClass('active');
			else if(href.indexOf('scene.html') != -1) $('.nav-ul li').eq(3).addClass('active');
			else if(href.indexOf('details.html') != -1) $('.nav-ul li').eq(4).addClass('active');
			else if(href.indexOf('contact.html') != -1) $('.nav-ul li').eq(5).addClass('active');
			else $('.nav-ul li').eq(0).addClass('active');
		}
	}
</script>


<!--


	<header class="site-header clearfix"> 
		<div class="container">

			<div class="row">

				<div class="col-md-12">

					<div class="pull-left logo">
						<a href="index.html">
							<img src="../images/logo.png" alt="HDS" />
						</a>
					</div>

					<div class="main-navigation pull-right">

						<nav class="main-nav visible-md visible-lg">
							<ul class="sf-menu">
								<li class="active"><a href="index.html">首页</a></li>
					            <li><a href="#">产品介绍</a>
					            	<ul>
					            		<li><a href="portfolio.html">Portfolio Grid</a></li>
					            		<li><a href="project-image.html">Project Image</a></li>
					            		<li><a href="project-slideshow.html">Project Slideshow</a></li>
					            	</ul>
					            </li>
					            <li><a href="#">Blog</a>
									<ul>
										<li><a href="blog.html">Blog Standard</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="#">visit templatemo</a></li>
									</ul>
					            </li>
					            <li><a href="archives.html">Archives</a></li>
					            <li><a href="contact.html">联系我们</a></li>
							</ul>
						</nav>

					    <div class="responsive-navigation visible-sm visible-xs">
					        <a href="#nogo" class="menu-toggle-btn">
					            <i class="fa fa-bars"></i>
					        </a>
					    </div>

					</div>

				</div>

			</div>

		</div>
	</header>


-->