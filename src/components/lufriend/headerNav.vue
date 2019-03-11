<template>
	<!-- 这是鹿友界面的头部导航组件 -->
	<div class="headerNav">
		<ul>
			<li><router-link to="/lufriend/message" tag="a">消息</router-link></li>
			<li><router-link to="/lufriend/goodfrined" tag="a">好友</router-link></li>
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
</style>