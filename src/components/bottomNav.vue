<template>
	<div class="bottomNav">
		<ul>
			<router-link tag="li" :to="item.id" v-for="(item,index) in imgURL" :class="{ mine:index==4 }" :key="index">
				<img v-show="$route.path.split('/')[1]!==item.id.split('/')[1]" :src="item.current" alt="">
				<img v-show="$route.path.split('/')[1]==item.id.split('/')[1]" :src="item.noCurrent" alt="">
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'bottomNav',
		data(){
			return {
				routePath:"this.$route.path.split('/')[1]",
				imgURL:[
					{
						"current":require('../../static/images/icon/Home page_01.png'),
						'noCurrent':require('../../static/images/icon/Home page_02.png'),
						"id":'/home'
					},
					{
						"current":require('../../static/images/icon/strategy_01.png'),
						'noCurrent':require('../../static/images/icon/strategy_02.png'),
						"id":'/strategy'
					},
					{
						"current":require('../../static/images/icon/Find out_01.png'),
						'noCurrent':require('../../static/images/icon/Find out_02.png'),
						"id":'/discover/hall'
					},
					{
						"current":require('../../static/images/icon/deer_01.png'),
						'noCurrent':require('../../static/images/icon/deer_02.png'),
						'id':'/lufriend/message'
					},
					{
						"current":require('../../static/images/icon/mine_01.png'),
						'noCurrent':require('../../static/images/icon/mine_02.png'),
						'id':'/my'
					}
				]
			}
		}
	}
</script>
<style scoped>
 .bottomNav{
 	height: 1rem;
 	width: 100%;
 	background-color: white;
 	position: fixed;
 	left: 0;
 	bottom: 0;
 	z-index: 999;
 }
 .bottomNav ul{
 	margin-top: 0.11rem;
 	display: flex;
 	text-align: center;
 }
 .bottomNav li{
 	flex-grow: 1;
 }
 .bottomNav li img{
 	width: 0.5rem;
 	height: 0.72rem;
 }
 .bottomNav li.mine img{
 	width: 0.4rem;

 }
</style>
