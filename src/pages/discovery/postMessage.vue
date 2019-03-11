<template>
	<div class="postMessage">
		<header>
			<div class="wrap">
				<router-link tag="span" to="/discover/hall" class="cancel">取消</router-link>
				<h3>发文</h3>
				<span class="send">发送</span>
			</div>
		</header>
		<div class="main">
			<textarea placeholder="分享新鲜事...">
				
			</textarea>
		</div>
	</div>
</template>
<script>
	export default{
		name:'postMessage',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
header{
	width: 100%;
	height: 1rem;
	background-color: #7DD19C;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
}	
.wrap{
	margin: 0 0.2rem;
	position: relative;
	height: 100%;
	display: flex;

}
header span.cancel{
	position: absolute;
	left: 0;
	bottom: 0.35rem;
	font-size: 0.28rem;
}
header span.send{
	position: absolute;
	right: 0;
	bottom: 0.35rem;
	font-size: 0.28rem;
}
header .wrap h3{
	flex-grow: 1;
	text-align: center;
	line-height: 1rem;
	font-size: 0.34rem;
}
.main{
	width: 100%;
	margin-top: 1.2rem;
	background-color: #fff;
}
textarea{
	width: 100%;
	border: none;
	outline: none;
	text-indent: 0.3rem;
	resize: none;
	min-height: 12rem;
	padding-top: 0.26rem;
	font-size: 0.28rem;
}

</style>