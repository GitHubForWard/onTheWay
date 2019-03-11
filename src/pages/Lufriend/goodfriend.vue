<template>
	<div class="goodfriend">
		<!-- 头部添加好友、扫一扫、搜索 -->
		<div class="addFriends">
			<ul>
				<li>
					<img src="../../../static/images/icon/icon_add.png" alt="">
					<span>添加好友</span>
				</li>
				<li>
					<img src="../../../static/images/icon/icon_search.png" alt="">
					<span>搜索</span>
				</li>
				<li>
					<img src="../../../static/images/icon/icon_saoyisao.png" alt="">
					<span>扫一扫</span>
				</li>
			</ul>
		</div>
		<!-- 好友信息 -->
		<div v-for="num in sideCode">
			<div class="code" :id="num" v-show="obj[num]">{{ num }}</div>
			<div class="goodfriends">
				<ul>
					<li v-for="item in goodfriends" v-show="item.firstCode==num">
						<img :src="item.icon" alt="" class="goodfriendIcon">
						<p class="uname">{{ item.username }}</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 侧边导航abc -->
		<ul class="sideNav">
			<li v-for="code in sideCode">
				<a :href="'#'+code">{{code}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'goodfriend',
		data(){
			return{
				goodfriends:[],
				sideCode:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				obj:{}
			}
		},
		created(){
			this.$axios.get('http://localhost:8080/static/data/lufriend/goodfriend.json')
			.then(res=>{
				// console.log(res.data.goodfriends)
				this.goodfriends = res.data.goodfriends
				for(var i in this.goodfriends){
					this.obj[this.goodfriends[i].firstCode]=this.goodfriends[i].firstCode
				}
				// console.log(this.obj)
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped>
.goodfriend{
	margin-bottom: 1rem;
}
.addFriends{
	width: 100%;
	height: 0.84rem;
	background-color: #fff;
	margin-top: 0.04rem;
	line-height: 0.84rem;
}	
.addFriends ul{
	display: flex;
	text-align: center;
}
.addFriends ul li{
	flex-grow: 1;
}
.addFriends ul li img{
	width: 0.34rem;
	vertical-align: middle;
}
.code{

	height: 0.64rem;
	width: 100%;
	line-height: 0.64rem;
	font-size: 0.24rem;
	text-indent: 0.25rem;
}
.goodfriends li{
	height: 1rem;
	width: 100%;
	background-color: #fff;
	margin-bottom: 0.02rem;
	overflow: hidden;
}
.goodfriends img{
	width: 0.8rem;
	margin: 0.1rem 0.2rem;
	float: left;
}
.uname{
	margin-top: 0.39rem;
	font-size: 0.24rem;
}
.sideNav{
	position: fixed;
	right: 0.1rem;
	top: 18%;
}
.sideNav li{
	margin-bottom: 5px;
}
</style>