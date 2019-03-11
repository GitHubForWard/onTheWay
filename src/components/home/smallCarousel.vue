<template lang="html">
<div class="favor">
      <FavorHeaderCom :hotStrategyText="hotStrategyText" :url="url"/>
      <div class="favorview">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in imgArr" :key="index">
              <router-link tag="div" :to="{name:'smallDetail',params:{ type:types,id:index}}">
                <img :src="item.url" alt="">
              </router-link>
          </swiper-slide>
       </swiper>
    </div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import FavorHeaderCom from "../strategyCom/favorHeaderCom.vue"
export default {
  name:"smallCarousel",
  data(){
    return{
        imgArr:[],
        swiperOption: {
          slidesPerView : 2.4,
          centeredSlides : false,
          spaceBetween : 10,
          // loop:true
        }
    }
  },
  components:{
    FavorHeaderCom,
    swiper,
    swiperSlide
  },
  props:{
    reqURL:{
      type:String,
      default:"/strategyFavor.json"
    },
    hotStrategyText:{
      type:String,
      default:'猜你喜欢'
    },
    url:{
      type:String,
      default:'/favormore'
    },
    types:{
      type:String,
      default:''
    }
  },
  created(){
    this.$axios.get('http://localhost:8080/static/data'+this.reqURL)
      .then(res=>{
        this.imgArr = res.data.imgURL
      })
      .catch(error=>{
        console.log(error)
      })
  }
}
</script>

<style>
.favor{
  margin-bottom: 0.2rem;
}
.favorview{
  display:flex;
  width:100%;
  background-color: white;
}
.favorview .swiper-container .swiper-wrapper .swiper-slide{
  width: 3rem;
  height: 2.32rem;
  margin: 0.2rem 0;
}
.favorview .swiper-container .swiper-wrapper img{
    width: 3rem;
    height: 2.32rem;
}
.favorview .swiper-container .swiper-wrapper:nth-child(1){
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
</style>
