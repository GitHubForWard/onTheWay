<template lang="html">
  <div class="favorHeader">
     <div class="green"></div>
     <p class="guessText">{{hotStrategyText}}</p>
     <router-link tag="p" :to="url" class="more">更多 >></router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    hotStrategyText:{
      type:String,
      default:''
    },
    url:{
      type:String,
      default:'/favormore'
    }
  }
}
</script>

<style scope>
.favorHeader{
  width: 100%;
  height: 0.58rem;
  margin: 0 auto;
  background-color: white;
  border-bottom: 1px solid #EAEAEA;
    margin-top: 0.1rem;

}
.favorHeader .green{
  width: 0.2rem;
  height: 100%;
  background-color: rgb(124, 211, 156);
  float: left;
}
.favorHeader .guessText{
  font-size: 0.26rem;
  margin-top: 0.16rem;
  display: inline-block;
  margin-left: 0.1rem;
}
.favorHeader .more{
  font-size: 0.24rem;
  float: right;
  margin-top: 0.16rem;
  margin-right: 0.1rem;
}
</style>
