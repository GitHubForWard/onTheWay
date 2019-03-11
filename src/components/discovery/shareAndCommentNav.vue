<template>
	<div class="bottom_nav">
		<ul>
			<li>
				<img src="../../../static/images/icon/share.png" alt="">
				<!-- 父级组件传递过来的 -->
				<span>{{share}}</span>
			</li>
			<li>
				<img src="../../../static/images/icon/infromation.png" alt="">
				<span>{{comments}}</span>
			</li>
			<li>
				<img src="../../../static/images/icon/Fabulous.png" alt="">
				<span>{{praise}}</span>
			</li>
		</ul>
		</div>
</template>
<script>
	export default{
		name:'shareAndCommentNav',
		data(){
			return{

			}
		},
		props:{
			share:{
				type:String,
				default:'1'
			},
			comments:{
				type:String,
				default:'1'
			},
			praise:{
				type:String,
				default:'1'
			}
		}
	}
</script>
<style scoped>
.bottom_nav{
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	background-color: white;
}
.bottom_nav ul{
	display: flex;
}
.bottom_nav ul li{
	flex-grow: 1;
	position: relative;
}
.bottom_nav ul li img{
	width: 0.35rem;
	margin-left: 0.71rem;
}
.bottom_nav ul li span{
	position: absolute;
	left: 1.26rem;
	top: -0.07rem;
}	
</style>