<template>
	<!-- 这是发现界面的头部导航组件 -->
	<div class="headerNav">
		<ul>
			<li><router-link to="/discover/hall" tag="a">大厅</router-link></li>
			<li>
				<router-link to="/discover/focuson" tag="a">关注</router-link>
				<router-link tag="p" to="/discover/postMessage" class="pullDown">
					<img src="../../../static/images/icon/pull-down.png" alt="">
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'headerNav',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
.headerNav{
	width: 100%;
	height: 1rem;
	background-color: #7DD19C;
}
.headerNav ul{
	display: flex;
	text-align: center;
	line-height: 1rem;
	font-size: 0.34rem;
	font-weight: bold;
}
.headerNav ul li{
	flex-grow: 1;
}
.headerNav ul li a{
	display: inline-block;
	line-height: 1;
	padding: 0.15rem;
}
.active{
	color: #5AADE5;
	border-bottom: 2px solid #5AADE5;
}
.pullDown{
	position: absolute;
	right: 0.2rem;
	top: 0;
}
.pullDown img{
	width: 0.4rem;
}
</style>