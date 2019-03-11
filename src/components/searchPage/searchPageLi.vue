<template>
	<div>
		<ul>
			<li :key="index" v-for="(item,index) in listData">
				<span>{{ item.searchRecord }}</span>
				<img @click="closeHandler(item.searchRecord)" class="close" src="../../../static/images/icon/close.png" alt="" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"searchpageli",
		data(){
			return{
				listData:[]
			}
		},
		created(){
			const listUrl = "http://localhost:3000/readRecode";
			this.$axios.get(listUrl)
			.then(res => {
				console.log(res.data)
				this.listData = res.data
			})
			.catch(error => {
				console.log(error)
			})
		},
		methods:{
			closeHandler(content){
				this.$axios({
			      method:"get",
			      url:"http://localhost:3000/deleteRecode",
			      params:{
			        content:content
			      }
			    })
			    .then(res => {
			      console.log(res.data)
			      this.$axios.get("http://localhost:3000/readRecode")
					.then(res => {
						console.log(res.data)
						this.listData = res.data
					})
					.catch(error => {
						console.log(error)
					})
				})
			    .catch(error => {
			      console.log(error)
			    })
			}			
		}
	}
</script>

<style scoped>
	ul{
		clear: both;
		width: 96%;
		margin: 0 auto;
	}
	ul li{
		border-bottom: 0.02rem solid #5dade2;
		padding: 0.2rem 0.1rem;
		font-size: 0.3rem;
		margin: 0.1rem 0;
	}
	ul li .close {
		float: right;
		width: 0.2rem;
		height: 0.25rem;
		margin: 0;
		margin-top: 0.1rem;
	}
</style>