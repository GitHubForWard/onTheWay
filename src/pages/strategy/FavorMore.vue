<template>
	<div>
		<div class="MoreNavTop">
			<!--搜索框-->
			<router-link to="/strategy" tag="img" src="../../../static/images/icon/return.png" alt="" />
			<SearchCom />
		</div>
		<div class="MoreNavs">
			<MoreNav :message = "messages"/>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import SearchCom from "../../components/searchCom"
	import MoreNav from "../../components/strategyFavorMore/MoreNav"
	export default {
		name:"favormore",
		data(){
			return{
				messages:{
					city:"城市最火",
			        classification:"人气最高",
			        season:"距离最近",
					city:{
						title:"城市最火",
						url:"/favormore/city"
					},
          			classification:{
						title:"人气最高",
						url:"/favormore/people"
					},
         			 season:{
						title:"距离最近",
						url:"/favormore/nearest"
					}
				}
			}
		},
		components:{
			MoreNav,
			SearchCom
		}
	}
</script>

<style scoped>
	.MoreNavTop{
		width: 100%;
		height: 1rem;
		background: #7DD197;
		position: fixed;
		top:0;
		left: 0;
		z-index: 2;
	}
	.MoreNavTop img{
		width: 0.3rem;
		height: 0.5rem;
		margin: 0.25rem;
	}
	.MoreNavs{
		margin-top: 1rem;
	}
</style>
