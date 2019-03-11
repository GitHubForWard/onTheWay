<template>
	<div class="index">
		<HeaderTop />
		<router-view/>
	</div>
</template>
<script>
import HeaderTop from '../../components/lufriend/headerNav.vue'
	export default {
		name:'index',
		data(){
			return{

			}
		},
		components:{
			HeaderTop
		}
	}
</script>
<style>
	
</style>