<template>
	<div>
		<HeaderNav />
		<router-view />
	</div>
</template>
<script>
import HeaderNav from '../../components/discovery/HeaderNav.vue'
	export default {
		name:'discovery',
		data(){
			return{

			}
		},
		components:{
			HeaderNav
		}
	}
</script>
<style>
	
</style>