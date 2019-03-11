<template>
	<div class="chat">
		<header>
			<div class="wrap">
				<router-link tag="span" to="/lufriend/message" class="cancel">
					<img src="../../../static/images/icon/return.png" alt="">
				</router-link>
				<h3>{{currentUser.username}}</h3>
				<span class="send">设置</span>
			</div>
		</header>
		<div class="content" ref="content">
			<div class="he">
				<img src="../../../static/images/headPic/luyou_01.png" alt="">
				<p>嗨，你好啊，你也是旅行爱好者吗</p>
			</div>
			<!-- <div class="my">
				<img src="../../../static/images/headPic/liaotian_02.png" alt="">
				<p>嗨，你好啊，你也是旅行爱好者吗</p>
			</div>
			<div class="my">
				<img src="../../../static/images/headPic/liaotian_02.png" alt="">
				<p>{{ message }}</p>
			</div>
			<div class="he">
				<img src="../../../static/images/headPic/luyou_01.png" alt="">
				<p>嗨，你好啊，你也是旅行爱好者吗</p>
			</div> -->
		</div>
		<!-- 底部发送 -->
		<div class="sendInput">
			<input type="text" v-model="message">
			<button @click="sendHandler">发送</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'chat',
		data(){
			return{
				message:'',
				answers:['是的','非常漂亮','我们可以一起去','ok!!!','完美'],
				currentUser:''
			}
		},
		methods:{
			sendHandler(){
				// 生成对话my
				var div1 = document.createElement('div');
				div1.className='my';
				div1.style.cssText = "clear: both;margin-top: 0.28rem;overflow: hidden;"
				var img1= document.createElement('img');
				img1.src='../../../static/images/headPic/liaotian_02.png';
				img1.style.cssText="width: 0.8rem;float: right;margin-right: 0.2rem;"
				div1.appendChild(img1)
				var p1 = document.createElement('p');
				p1.innerHTML=this.message;
				p1.style.cssText = "float: right;background-color: #fff;padding: 0.2rem;border-radius: 0.2rem;margin-top: 0.1rem;margin-right: 0.2rem;"
				div1.appendChild(p1);
				this.$refs.content.appendChild(div1);
				if(div1.offsetTop>400){
					document.documentElement.scrollTop += 400;
					document.body.scrollTop += 400;
				}
				// 系统延迟回话
				var self = this;
				setTimeout(function(){
					var div = document.createElement('div');
					div.className='he';
					div.style.cssText = "margin-top: 0.28rem;overflow: hidden;"
					var img = document.createElement('img');
					img.src='../../../static/images/headPic/liaotian_01.png';
					img.style.cssText="width: 0.8rem;float: left;margin-left: 0.2rem;"
					div.appendChild(img)
					var p = document.createElement('p');
					var random = Math.floor(Math.random()*5);
					p.innerHTML=self.answers[random];
					p.style.cssText = "float: left;background-color: #fff;padding: 0.2rem;border-radius: 0.2rem;margin-top: 0.1rem;margin-left: 0.2rem;"
					div.appendChild(p);
					self.$refs.content.appendChild(div);
					if(div.offsetTop>400){
						document.documentElement.scrollTop += 400;
						document.body.scrollTop += 400;
					}
				},1000)
			}
		},
		created(){
			this.$axios.get('http://localhost:3000/chat?id='+this.$route.params.id)
			.then(res=>{
				// console.log(res.data[0])
				this.currentUser = res.data[0]
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped>
#special{
	color: red;
}
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
header span.cancel img{
	width: 0.25rem;
	position: absolute;
	left: 0;
	bottom: 0.25rem;
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
.content{
	margin-top: 1.6rem;
	margin-bottom: 1rem;
}
.content .he{
	overflow: hidden;
	margin-top: 0.28rem;
}
.content .he img{
	width: 0.8rem;
	float: left;
	margin-left: 0.2rem;
}
.content .he p{
	float: left;
	margin-top: 0.1rem;
	margin-left: 0.2rem;
	background-color: #fff;
	padding: 0.2rem;
	border-radius: 0.2rem;
}
.content .my{
	clear: both;
	margin-top: 0.28rem;
	overflow: hidden;
}
.content .my img{
	width: 0.8rem;
	float: right;
	margin-right: 0.2rem;
}
.content .my p{
	float: right;
	background-color: #fff;
	padding: 0.2rem;
	border-radius: 0.2rem;
	margin-top: 0.1rem;
	margin-right: 0.2rem;
}
.sendInput{
	height: 0.8rem;
	background-color: #fff;
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
}
.sendInput input{
	width: 5rem;
	height: 0.5rem;
	border-radius: 0.1rem;
	outline: none;
	border: 1px solid rgba(0,0,0,0.3);
	margin-left: 0.2rem;
	margin-top: 0.11rem;
}
.sendInput button{
	padding: 0.1rem 0.2rem;
	border-radius: 0.1rem;
	border: 1px solid rgba(0,0,0,0.3);
	background-color: transparent;
	outline: none;
	margin-left: 0.9rem;
}
</style>