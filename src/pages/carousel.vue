<template>
	<div class="carousel">
		<swiper :options="swiperOption" class="swiperBox">
		    <swiper-slide class="bg page1">
		    	<img class="round" src="../../static/images/icon/round.png" alt="" />
		    	<div class="circle">
	    			<span>路上</span>
		    	</div>
		    	<span class="left"></span>
		    	<span class="right"></span>
		    	<p class="big">最美</p>
		    	<p class="small">的自己在路上</p>
		    	<router-link to="/" tag="div" class="btn">立即体验</router-link>
		    </swiper-slide>
		    <swiper-slide class="bg page2">
		    	<img class="round" src="../../static/images/icon/round.png" alt="" />
		    	<div class="circle"><span>路上</span></div>
		    	<span class="left"></span>
		    	<span class="right"></span>
		    	<p class="big1">世界<span>那么大</span></p>
		    	<p class="small1">我想去看看</p>
		    	<router-link to="/" tag="div" class="btn">立即体验</router-link>
		    </swiper-slide>
		    <swiper-slide class="bg page3">
		    	<img class="round" src="../../static/images/icon/round.png" alt="" />
		    	<div class="circle"><span>路上</span></div>
		    	<span class="left"></span>
		    	<span class="right"></span>
		    	<p class="big">人生</p>
		    	<p class="small">就像一场旅行</p>
		    	<router-link to="/" tag="div" class="btn">立即体验</router-link>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Login from "./my/login"
	export default {
        name:'carousel',
        data(){
         	return{
				swiperOption: {
	          		pagination: {
			  	  	el: '.swiper-pagination'
			  		}
	        	}
    		}
    	},
    	components:{
    		swiper,
   			swiperSlide
    	}
	}
</script>
<style scoped>
	.carousel{
		width: 100%;
		height: 100%;
	}
	.swiperBox{
		width: 100%;
		height: 100%;
	}
	.bg.page1{
		width: 100%;
		height: 100%;
		background: url(../../static/images/pictures/boot_page_01.png);
		background-size: cover;
		position: relative;
	}
	.bg.page2{
		width: 100%;
		height: 100%;
		background: url(../../static/images/pictures/boot_page_02.png);
		background-size: cover;
		position: relative;
	}
	.bg.page3{
		width: 100%;
		height: 100%;
		background: url(../../static/images/pictures/boot_page_03.png);
		background-size: cover;
		position: relative;
	}
	.bg .round{
		width: 4.04rem;
		height: 4.04rem;
		margin-left: 1.73rem;
		margin-top: 2.28rem;
		animation: rotate 2.5s;
	}
	.circle{
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 50%;
		background: rgba(0,0,0,.2);
		position: absolute;
		top:2.86rem;
		left: 2.35rem;
		text-align: center;
	}
	.circle span{
		font-size: 0.9rem;
		color: #ffffff;
		line-height: 2.8rem;
		font-family: 苹方;
		font-weight: 300;
	}
	.left{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		border-top: 0.05rem solid rgba(255,255,255,.6);
		border-left: 0.05rem solid rgba(255,255,255,.6);
		position: absolute;
		left: 1.78rem;
		margin-top: 1.2rem;
	}
	.right{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		border-right: 0.05rem solid rgba(255,255,255,.6);
		border-bottom: 0.05rem solid rgba(255,255,255,.6);
		position: absolute;
		right:1.78rem;
		margin-top: 2rem;
	}
	.bg p{
		color: #FFFFFF;
		font-family: 苹方常规;
		font-weight: 300;
	}
	.big,.big1{
		font-size: 0.7rem;
		margin-left: 3rem;
		margin-top: 0.9rem;
	}
	.big1{
		margin-left: 2.5rem;
	}
	.big1 span{
		font-size: 0.45rem;
	}
	.small,.small1{
		font-size: 0.45rem;
		margin-left: 2.3rem;
		margin-top: 0.5rem;
	}
	.small1{
		margin-left: 2.6rem;
	}
	.btn{
		width: 3.5rem;
		height: 1rem;
		background: rgba(255,255,255,.3);
		border-radius: 0.4rem;
		position: absolute;
		bottom: 1rem;
		left: 2rem;
		font-family: 苹方常规;
		font-size: 0.5rem;
		color: rgba(0,0,0,.8);
		text-align: center;
		line-height: 1rem;
		cursor: pointer;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets {
   		 bottom: 135px;

    }
	@keyframes rotate{
		0%{
			transform: rotate(0);
		}
		100%{
			transform: rotate(360deg);
		}
	}
</style>
