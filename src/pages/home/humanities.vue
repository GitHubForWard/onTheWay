<template>
	<div class="humanities">
		<header>
			<router-link tag="a" to="/">
				<img src="../../../static/images/icon/return.png" alt="">
			</router-link>
			<h3>人文景观</h3>
		</header>
		<div class="top"></div>
		<More :currentData="currentData" types="humanities"/>
	</div>
</template>
<script>
import More from '../../components/home/moreDetail.vue'
	export default{
		name:'humanities',
		data(){
			return{
				currentData:[]
			}
		},
		components:{
			More
		},
		created(){
			this.$axios.get('http://localhost:8080/static/data/home/humanitiesMore.json')
			.then(res=>{
				// console.log(res.data.humanities)
				this.currentData = res.data.humanities
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped>
header{
	height: 1rem;
	width: 100%;
	background-color: #7DD19C;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	display: flex;
}
header img {
	position: absolute;
	width:0.3rem;
	left: 0.2rem;
	top: 0.2rem;
}
header h3 {
	font-size: 0.4rem;
	line-height: 1rem;
	height: 1rem;
	flex-grow: 1;
	text-align: center;
}	
.top{
	margin-top: 1rem;
}
</style>