<template>
	<div class="resultContainer">
		<div class="MoreNavTop">
			<router-link to="/favormore" tag="img" src="../../../static/images/icon/return.png" alt="" />
			<span>{{currentData.title}}</span>
		</div>
		<div class="one">
			<img class="onePic" :src="currentData.mainPic" alt="" />
			<div class="oneRight">
				<div class="stars">
					<img src="../../../static/images/icon/star.png" alt="" />
					<img src="../../../static/images/icon/star.png" alt="" />
					<img src="../../../static/images/icon/star.png" alt="" />
					<img src="../../../static/images/icon/star.png" alt="" />
					<img src="../../../static/images/icon/star.png" alt="" />
					<span>5分</span>
				</div>
				<div class="comment">
					<span>{{currentData.content}}</span>条点评
				</div>
				<div class="line">
					<p>乘车路线：<span>{{currentData.busLine}}</span></p>
					<p>景点类型：{{currentData.cityType}}</p>
					<p>最佳季节：<span>{{currentData.bestSeason}}</span></p>
					<p>建议游玩：<span>{{currentData.playTime}}</span></p>
				</div>
			</div>
		</div>
		
		<!-- 景点介绍 -->
		<div class="three">
			<div class="threeTitle">
				<div class="green"></div>
				<span>景点介绍</span>
			</div>
			<div class="content">
				<p>{{currentData.desc}}</p>
				<div class="contentPic">
					<img :src="currentData.descPic1" alt="" />
					<img :src="currentData.descPic2" alt="" />
				</div>
			</div>
		</div>
		<!-- 开放时间 -->
		<div class="three">
			<div class="threeTitle">
				<div class="green"></div>
				<span>开放时间</span>
			</div>
			<div class="content">
				<p>旺季：{{currentData.hotSeason}}</p>
				<p>淡季：{{currentData.lowSeason}}</p>
				<div class="contentPic1">
					<img :src="currentData.lastPic" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"searchdetail",
		data(){
			return{
				
			}
		},
		props:{
			currentData:{
				type:Object,
				default:function(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.resultContainer{
		overflow: hidden;
	}
	.MoreNavTop{
		width: 100%;
		height: 1rem;
		background: #7DD197;
		position: fixed;
		top:0;
		left: 0;
		z-index: 2;
		display: flex;
	}
	.MoreNavTop img{
		width: 0.3rem;
		height: 0.5rem;
		margin: 0.25rem 0 0.25rem 0.25rem;
	}
	.MoreNavTop span{
		font-size: 0.4rem;
		margin: 0 auto;
		line-height: 1rem;
	}
	.one{
		margin-top: 1rem;
		width: 100%;
		height: 3.1rem;
		background: #FFFFFF;
	}
	.one .onePic{
		width: 4.5rem;
		height: 2.7rem;
		margin: 0.2rem;
		float: left;
	}
	.one .oneRight{
		width: 2.4rem;
		height: 2.7rem;
		float: left;
		margin-top: 0.2rem;
		font-size: 0.18rem;
		color: #444444;
	}
	.oneRight .stars img{
		float: left;
	}
	.oneRight .comment{
		width: 1.5rem;
		height: 0.4rem;
		background: #5DADE2;
		color: rgba(255,255,255,0.8);
		border-radius: 0.1rem;
		text-align: center;
		line-height: 0.4rem;
		clear: both;
	}
	.line p{
		line-height: 0.34rem;
	}
	
	/*景点介绍*/
	.three{
		width: 100%;
		box-sizing: border-box;
		background: #FFFFFF;
		margin-top:0.2rem;
	}
	.threeTitle{
		height: 0.8rem;
		border-bottom: 1px solid #DBDBDB;
	}
	.threeTitle .green{
		width: 0.2rem;
		height: 0.6rem;
		float: left;
		background: #7DD19C;
		margin: 0.1rem 0.2rem;
	}
	.threeTitle span{
		line-height: 0.8rem;
		font-size: 0.32rem;
	}
	.three .content{
		box-sizing: border-box;
		padding: 0.2rem;
	}
	.content p{
		font-size: 0.26rem;
		line-height: 0.4rem;
	}
	.contentPic{
		margin-top: 0.14rem;
		overflow: hidden;
	}
	.contentPic img{
		width: 3.4rem;
		height: 2.6rem;
	}
	.contentPic img:first-child{
		float: left;
	}
	.contentPic img:last-child{
		float: right;
	}
	.contentPic1 img{
		width: 7.1rem;
		height: 3rem;
		margin: 0.1rem 0;
	}
</style>