<template>
	<div>
		<MoreList moreType="nearest" names="FavorMoreNearestDetail"/>
	</div>
</template>

<script>
	import MoreList from '../../../components/strategyFavorMore/MoreList' 
	export default{
		name:"nearest",
		data(){
			return{
				
			}
		},
		components:{
			MoreList
		}
	}
</script>

<style>
</style>