<template>
	<!-- 该组件是首页详细中的评论和点赞和转发部分 -->
	<div class="comments">
		<div class="commentAndShare">
			<p class="comments">评论：<span>29</span></p>
			<p class="forwarding">转发：<span>20</span></p>
			<p class="praise">赞：<span>10</span></p>
		</div>
		<div class="sortRule">
			按热度
		</div>
		<ul v-for="(oneData,index) in currentData">
			<li v-for="(item,index) in oneData.userInfo">
				<img :src="item.icon" alt="">
				<div class="pics">
					<span class="share">
						<img src="../../../static/images/icon/share.png" alt="分享">
					</span>
					<span class="comment">
						<img src="../../../static/images/icon/infromation.png" alt="">
					</span>
					<span class="fabulous">
						<img src="../../../static/images/icon/Fabulous.png" alt="">
					</span>
					<span class="fabCount">13</span>
				</div>
				<p class="username">{{item.username}}</p>
				<p class="content">{{item.content}}</p>
				<div class="time">{{item.time}}</div>
			</li>
		</ul>
		<div class="bottom_nav">
			<ul>
				<li>
					<img src="../../../static/images/icon/share.png" alt="">
					<span>转发</span>
				</li>
				<li>
					<img src="../../../static/images/icon/infromation.png" alt="">
					<span>评论</span>
				</li>
				<li>
					<img src="../../../static/images/icon/Fabulous.png" alt="">
					<span>赞</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'comments',
		data(){
			return{
				userInfo:[]
			}
		},
		props:{
			requireURL:{
				type:String,
				default:'comments.json'
			},
			 currentData:{
		      type:Array,
		      default:function(){
		        return[]
		      }
		    }
		}
	}
</script>
<style scoped>
.commentAndShare{
	height: 0.5rem;
	margin-top: 0.2rem;
	background-color: #fff;
	font-size: 0.2rem;
	line-height: 0.5rem;
}
.commentAndShare p{
	float: left;
}
.commentAndShare .comments{
	margin-left: 0.2rem;
	margin-right: 0.6rem;
}
.commentAndShare .praise{
	float: right;
	margin-right: 0.2rem;
}
.sortRule{
	height: 0.5rem;
	width: 97%;
	text-align: right;
	line-height: 0.5rem;
	font-size: 0.18rem;
}
.comments ul{
	margin-bottom: 0.8rem;
}
.comments li{
	padding-top: 0.15rem;
	background-color: white;
	height: 1.02rem;
	font-size: 0.24rem;
	margin-bottom: 0.02rem;
	padding-bottom: 0.1rem;
	position: relative;
}
.comments li>img{
	float: left;
	width: 0.6rem;
	margin:0.1rem 0.2rem 0.32rem 0.2rem;
}
.comments li p.content{
	margin: 0.1rem 0;
	font-size: 0.2rem;
}
.comments li .time{
	font-size: 0.18rem;
}
.pics{
	float: right;
	margin-right: 0.2rem;
}
.pics img {
	height: 0.32rem;
	margin-top: 0.5rem
}
.pics .comment img{
	margin-left:0.36rem;
	margin-right: 0.36rem;
}
.pics .fabulous img{
	margin-right: 0.2rem;
}
.fabCount{
	display: inline-block;
	height: 0.32rem;
	line-height: 0.32rem;
	margin-top: 0.54rem;
	float: right;
}
.bottom_nav{
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: white;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 999;
}
.bottom_nav ul{
	display: flex;
}
.bottom_nav ul li{
	flex-grow: 1;
}
.bottom_nav ul li img{
	width: 0.35rem;
	margin-left: 0.71rem;
}
.bottom_nav ul li span{
	position: absolute;
	left: 1.26rem;
	top: 0.05rem;
}
</style>
