<template lang="html">
  <div class="classCityMain">
      <div class="showData" v-for = "(item,index) in cityMsg">
          <img :src="item.imgData" alt="#">
            <p class="strategyPlace">
            {{item.strategyPlace}}
           </p>
           <div class="fromWhere">
             <img src="../../../static/images/icon/positon.png" alt="">
             <p>{{item.fromCoutry}}</p>
             <p>{{item.cityName}}</p>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"classCityMain",
    data(){
      return{

      }
    },
    props:{
      cityMsg:{
        type:Array,
        default:""
      }
    }
}
</script>

<style scoped>
.classCityMain{
  width: 100%;
}
.showData{
  margin-top: 0.2rem;
  width: 100%;
  height: 4rem;
  background-color: white;

}
.showData img{
   width: 96%;
   height: 2.8rem;
   margin: 0.14rem;
}
.strategyPlace{
  margin-left: 0.2rem;
  font-size: 0.26rem;
}
.fromWhere img{
  height: 0.16rem;
  width: 0.16rem;
  margin-left: 0.2rem;
    float: left;
}
.fromWhere p{
  font-size: 0.18rem;
  float: left;
  margin-top: 0.15rem;
}
</style>
