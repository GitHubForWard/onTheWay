<template>
	<div class="message">
		<div class="search">
			<div>
				<input type="text" placeholder="搜索">
				<img src="../../../static/images/icon/icon_search.png" alt="" class="searchIcon">
				<img src="../../../static/images/icon/closeGreen.png" alt="" class="closeIcon">
			</div>
		</div>
		<!-- 聊天记录 -->
		<div class="chatRecord">
			<ul>
				<router-link tag="li" :to="{name:'chat',params:{id:index}}" v-for="(item,index) in chatRecord" :key="index">
					<img :src="item.icon" alt="" class="headIcon">
					<div class="time">{{ item.time }}</div>
					<img src="../../../static/images/icon/unread message.png" alt="" class="unread" v-show="item.readState=='0'"> 
					<h3 class="uname">{{ item.username }}</h3>
					<p class="content">{{ item.content }}</p>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'message',
		data(){
			return{
				chatRecord:[]
			}
		},
		created(){
			this.$axios.get('http://localhost:8080/static/data/lufriend/messageData.json')
			.then(res=>{
				// console.log(res.data.chatRecord)
				this.chatRecord = res.data.chatRecord
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped>
.search{
	width: 100%;
	/*height: 0.9rem;*/
}	
.search>div{
	position: relative;
	width: 7rem;
	margin: 0.11rem auto;
}
.search input{
	display: block;
	height: 0.68rem;
	width: 7rem;
	background-color: rgba(255,255,255,.8);
	outline: none;
	border: none;
	border-radius: 0.34rem;
	text-indent: 0.76rem;
}
.search img{
	width: 0.3rem;
	position: absolute;
	left: 0.3rem;
	top: 0.2rem;
}
.search img.closeIcon{
	left: 6.45rem;
}
input::input-placeholder {
    color: #7DD19C;
}

input::-webkit-input-placeholder {
    color: #7DD19C;
}

input:-ms-input-placeholder {
    color: #7DD19C;
}

input:-moz-placeholder {
    color: #7DD19C;
}

input::-moz-placeholder {
    color: #7DD19C;
}
.chatRecord li{
	width: 100%;
	background-color: #fff;
	height: 1rem;
	overflow: hidden;
	position: relative;
	margin-bottom: 0.02rem;
}
.chatRecord li img.headIcon{
	width: 0.8rem;
	float: left;
	margin: 0.1rem 0.2rem ;
}
.chatRecord li div.time{
	float: right;
	font-size: 0.18rem;
	margin-top: 0.21rem;
	margin-right: 0.22rem;
}
.chatRecord li h3{
	margin-top: 0.21rem;
	font-size: 0.26rem;
	margin-bottom: 0.14rem;
}
.chatRecord li .content{
	font-size: 0.2rem;
}
.unread{
	position: absolute;
	right: 0.31rem;
	bottom: 0.3rem;
	width: 0.1rem;
}
</style>