<template>
	<div class="sidebar">
		<div class="pane1">
			<p>CNode：Node.js专业中文社区</p>
			<router-link to="/signin"><button class="login">通过GitHub登录</button></router-link>
		</div>
		<div class="pane1">
			<p>热门话题</p>
			<div class="inner">
				<ul>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
					<li>有没有好的基于vue的mardown编辑器推荐</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style>
.sidebar {
	width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    /*border: 1px dashed red;*/
}
.pane1 {
	background: #fff;
	padding: 10px;
	margin-bottom: 10px;
}
.login {
	background: #5bc0de;
	border: none;
	color: #fff;
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
}
.inner ul li {
	height: 20px;
	line-height: 20px;
}	
</style>
