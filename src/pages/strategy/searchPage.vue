<template>
	<div class="MoreNavTop">
		<!--搜索框-->
		<router-link to="/strategy" tag="img" src="../../../static/images/icon/return.png" alt="" />
		<SearchCom />
		<div class="btns">
			<router-link tag="div" :to="{name:'SearchResult',params:{id:index}}" :key="index" v-for="(item,index) in searchInfoData.searchInfo">{{ item.cityName }}</router-link>
		</div>
		<SearchPageLi />
	</div>
</template>

<script>
	import SearchCom from "../../components/searchCom"
	import SearchPageLi from "../../components/searchPage/searchPageLi"
	export default {
		name:'searchpage',
		data(){
			return{
				searchInfoData:{
					searchInfo:[]
				}
			}
		},
		components:{
			SearchCom,
			SearchPageLi
		},
		created(){
			const searchInfoUrl = "http://localhost:8080/static/data/searchInfo.json"
			this.$axios.get(searchInfoUrl)
			.then(res => {
				this.searchInfoData = res.data
			})
			.catch(error => {
				console.log(error)
			})
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
	.btns{
		width: 7rem;
		height: 4rem;
	}
	.btns div{
		float: left;
		border: 0.02rem solid #5dade2;
		padding: 0.15rem;
		border-radius: 0.2rem;
		font-size: 0.3rem;
		margin: 0.2rem;
	}
</style>