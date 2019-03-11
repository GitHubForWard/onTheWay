<template>
	<div class="index">
		{{ getCount }}
		<router-view />
		<BottomNav />
	</div>
</template>
<script>
import BottomNav from '../components/bottomNav.vue'
	export default {
		name:'index',
		data(){
			return{
				
			}
		},
		components:{
			BottomNav
		},
		computed:{
			getCount(){ //引导图只执行一次的效果
				if(!localStorage.getItem('count')){
					document.location.href  = 'http://localhost:8080/#/carousel'
				}
				localStorage.setItem('count','true');
			}
		}
	}
</script>
<style>
	
</style>