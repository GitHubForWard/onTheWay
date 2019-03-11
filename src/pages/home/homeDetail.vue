<template>
	<div class="homeDetail">
		<header>
			<router-link tag="a" to="/">
				<img src="../../../static/images/icon/return.png" alt="">
			</router-link>
			<h3>首页推荐</h3>
		</header>
		<div class="hot">
			<p class="title">热门</p>
		</div>
		<div class="Hot">
        <div class="strategyDes" v-for="(item,index) in currentData" :key="index">
              <div class="icon">
                  <img :src="item.icon" alt="#">
              </div>
                    <p class="names">{{item.name}}</p>
                    <div ref='focus' class="focus" @click="focusClick(index)">{{focousText}}</div>
              <div class="timeAndAdd">
                     <p class="updateTime">{{item.updateTime}}</p>
                     <p class="comeFrom">来自于</p>
                     <p class="fromWhere">{{item.fromWhere}}</p>
               </div>
               <p class="desc">
                  {{item.strategyDesc}}
               </p>
              <img :src="item.desImg" alt="#" class="desImg"/>
        </div>
    	</div>
		<Comments :currentData="currentData"/>
	</div>
</template>
<script>
import Comments from '../../components/home/comments.vue'
import Hot from '../../components/strategyCom/strategyHot.vue'
	export default {
		name:'homeDetail',
		data(){
			return{
				currentData:[],
				focousText:"关注"
			}
		},
		components:{
			Comments,
			Hot
		},
		created(){
			this.$axios.get("http://localhost:3000/homedetail?id="+this.$route.params.id)
			.then(res => {
				console.log(res.data)
				this.currentData = res.data
			})
			.catch(error => {
				console.log(error)
			})
		},
		methods:{
	      focusClick(index){
	        this.$refs.focus[index].innerHTML='已关注'
	        this.$refs.focus[index].style.border = "0.05rem solid #D1D1D1";
	      },
	      sendIndexHandler(index){
	        this.$emit('getIndex',index)
	      }
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
.hot{
	margin-top: 1.1rem;
	width: 100%;
	background-color: #fff;
}
.hot p.title{
	height: 0.5rem;
	padding-left: 0.2rem;
	line-height: 0.5rem;
	font-size: 0.2rem;
	margin-bottom: 0.02rem;
}
.hot .strategyDes{
	margin-top: 0;
}
.Hot{
  width: 100%;
}
.strategyDes{
  width:100%;
  background-color: white;
  padding-bottom: 0.1rem;
}
.strategyDes .icon{
  width: 1rem;
  height:1rem;
  display: inline-block;
  margin-top: 0.2rem;
  margin-left:0.2rem;
  float: left;
}
.strategyDes .icon img{
  width: 100%;
  height: 100%;

}
.strategyDes .names{
  font-size: 0.2rem;
  float: left;
  margin-top: 0.4rem;
  margin-left: 0.1rem;
}
.strategyDes .focus{
  width: 1rem;
  height: 0.5rem;
  border: 0.05rem solid rgb(124,211,156);
  border-radius: 1rem;
  float: left;
  margin-left:6rem;
  margin-top: -0.8rem;
  text-align: center;
  line-height: 0.5rem;
}
.strategyDes .timeAndAdd{
  float: left;
    margin-left: 1.3rem;
    margin-top: -0.4rem;
}
.strategyDes .updateTime{
  font-size: 0.1rem;
  float: left;
}
.strategyDes .comeFrom{
    font-size: 0.1rem;
    float: left;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
.strategyDes .fromWhere{
    font-size: 0.1rem;
    float: left;
}
.strategyDes .desc{
  width: 98%;
  margin-left: 0.12rem;
  overflow: hidden;
  font-size: 0.2rem;
  line-height: 0.4rem;
  color:black;
  margin-top:1.3rem;
}
.strategyDes .desImg{
    width: 98%;
    height: 3rem;
    display: block;
    margin-top:0.1rem;
    margin-left: 1%;
    margin-bottom: 0.2rem;
}
</style>