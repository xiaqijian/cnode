<template>
	<div class="head">
		<div class="middle">
			<div class="logobox pull-left">
				<a href="">
					<img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
				</a>
			</div>
			<div></div>
			<ul class="nav pull-right">
				<li>
					<router-link to="/">首页</router-link>
				</li>
				<li>
					<router-link to="/getstart">新手入门</router-link>
				</li>
				<li>
					<router-link to="/api">API</router-link>
				</li>
				<li>
					<router-link to="/about">关于</router-link>
				</li>
				<li>
					<router-link to="/signup">注册</router-link>
				</li>
				<li>
					<router-link to="/signin">登陆</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'head'
}
</script>

<style type="text/css">
	.logobox {
		overflow: hidden;
	}
	.logobox a {
		width: 120px;
	    /*padding: 3px 20px;*/
	    height: 28px;
	    display: inline-block;
	    float: left;
	}
	.logbox a img {
		width: 100%;
	}
	.head {
		background: #444;
		width: 100%;
		padding:10px 0;
		/*overflow: hidden;*/
	}
	.head .middle {
		background: 0 0;
	    border-radius: 0;
	    border: none;
	    box-shadow: none;
	    width: 90%;
	    margin: auto;
	    padding: 5px;
	    /*border: 1px solid red;*/
	    overflow: hidden;
	}
	.pull-right {
		float: right;
	}
	.pull-left {
		float: left;
	}
	.nav li {
		float: left;
		margin-left: 30px;
		padding-top: 10px;
	}
	.nav li a {
		color: #ccc;
	}
	.nav li a:hover {
		color: #fff;
	}
</style>
