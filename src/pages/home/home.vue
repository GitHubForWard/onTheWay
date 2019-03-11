<template>
	<div class="home">
		<header>
			<img src="../../../static/images/icon/logo_GL.png" alt="">
			<Search />
		</header>
		<!-- 轮播图 -->
		<swiper :options="swiperOption" ref="mySwiper" class="carousel">
		    <swiper-slide v-for="(item,index) in imgURL" :key="index">
		    	<router-link :to="{name:'Homedetail',params:{id:index}}">
		    		<img :src="item.url" alt="">
		    	</router-link>
		    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
	    <!-- 自然景观 -->
		<Favor hotStrategyText="自然景观" reqURL="/home/naturalLand.json" types="naturalLand" url="/naturalLand"/>
		<Favor hotStrategyText="人文景观" reqURL="/home/humanities.json"  types="humanities" url="/humanities"/>
		<Favor hotStrategyText="田园风光" reqURL="/home/countryside.json"  types="countryside" url="/countryside"/>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Search from '../../components/searchCom.vue'
import FavorHeader from '../..//components/strategyCom/favorHeaderCom.vue'
import Favor from '../../components/home/smallCarousel.vue'
	export default {
		name:'headers',
		data(){
			return{
				swiperOption: {
		          pagination: {
				    el: '.swiper-pagination',
				  },
				  loop:true
		        },
		        imgURL:[]
			}
		},
		components:{
			Search,
			FavorHeader,
			Favor,
			swiper,
   			swiperSlide
		},
		created(){
			this.$axios.get('http://localhost:8080/static/data/home/homeCarousel.json')
			.then(res=>{
				this.imgURL = res.data.imgURL
				// console.log(this.imgURL)
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>

<style scoped> 
.home{
	margin-bottom: 1rem;
}
header{
	height: 1rem;
	width: 100%;
	background-color: #7DD19C;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999
}
header img{
	width: 0.85rem;
	height: 0.85rem;
	margin-top: 0.075rem;
	margin-left: 0.19rem;
}
.carousel{
	margin: 1.2rem 0.2rem 0.2rem 0.2rem; 
}
.carousel swiper-slide{
	width: 7.12rem;
}
.carousel img{
	width: 100%;
	height: 2.82rem;
}
</style>