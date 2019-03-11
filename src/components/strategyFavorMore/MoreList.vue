<template>
	<div class="MoreList">
		<ul>
			<li v-for="(item,index) in MoreData" :key="index"> 
				<router-link :to="{name:names,params:{id:index}}">
					<img :src="item.pic"/>
				</router-link>
				<div class="sign">
					<img :src="item.iconUrl" alt="" />
					<span>{{item.title}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"morelists",
		data(){
			return{
				MoreData:[]
			}
		},
		props:{
			moreType:{
				type:String,
				default:""
			},
			names:{
				type:String,
				default:''
			}
		},
		created(){
			const dataUrl = "http://localhost:8080/static/data/favorMoreData.json"
			this.$axios.get(dataUrl)
			.then(res=>{
				this.MoreData = res.data[this.moreType]
			})
			
			.catch(error=>{
				console.log(error);
			})
		}
	}
</script>

<style scoped>
.MoreList ul li{
	width: 100%;
	height: 3.8rem;
	background: #FFFFFF;
	margin-top: 0.2rem;
	overflow: hidden;
}	
.MoreList img{
	width: 7.1rem;
	height: 2.8rem;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
}
.sign img{
	width: 0.5rem;
	height: 0.5rem;
	margin-left: 0.2rem;
	margin-top: 0.1rem;
	float: left;
}
.sign span{
	font-size: 0.3rem;
	font-family: 苹方常规;
	color: #000000;
	float: left;
	margin: 0.25rem 0.1rem;
}
</style>