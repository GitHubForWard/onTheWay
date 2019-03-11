<template>
	<div>
		<MoreDetail :currentData="currentData"/>
	</div>
</template>

<script>
	import MoreDetail from "../../components/strategyFavorMore/MoreDetail"
	export default {
		name:"favormorecitydetail",
		data(){
			return{
				currentData:{}
			}
		},
		components:{
			MoreDetail
		},
		created(){
			this.$axios.get("http://localhost:3000/nearestdetail?id="+this.$route.params.id)
			.then(res => {
//				console.log(res.data[0])
				this.currentData = res.data[0]
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style>
</style>