<template lang="html">
  <div class="strategy">
    <div class="fixHeader">
        <div class="header">
                <div class="login">
                        <img src="../../../static/images/icon/logo_GL.png" alt="#">
                </div>
                <SearchCom />
                <router-link tag="p" to="/classification" class="classification">分类</router-link>
        </div>
                <SearchCom />
        </div>
    <div class="addCom">
              <StrategyFavor :hotStrategyText="favorStrategyText" reqURL="/strategyFavor.json"  types="favorSide" />
          </div>
    <div class="hotStrategy">
          <FavorHeaderCom :hotStrategyText="hotStrategyText" url="/strategy"/>
          <StrategyHot :currentData="currentData"/>
                  <!-- :to="{ name:'strategyDeatial', params: {id:index }}" -->
      </div>
  </div>
</template>

<script>
import SearchCom from "../../components/searchCom"
import StrategyFavor from "../../components/strategyCom/strategyFavor"
import FavorHeaderCom from "../../components/strategyCom/favorHeaderCom"
import StrategyHot from "../../components/strategyCom/strategyHot"

export default {
  name:"srategy",
     data(){
       return{
          hotStrategyText : "热门攻略",
          favorStrategyText:"猜你喜欢",
          currentData:[],
          index:1
       }
     },
     components:{
       StrategyFavor,
       SearchCom,
       FavorHeaderCom,
       StrategyHot
     },
     methods:{
        // getIndexHandler(data){
        //   console.log(data)
        //   // this.index = data
        // }
     },
     created(){
       this.$axios.get("http://localhost:3000/strategy?id=0")
       .then( res =>{
        this.currentData = res.data

       })
       .catch( error =>{
         console.log(error)
       })
     }
}
</script>

<style scoped>
.strategy{
  margin-bottom: 1rem;
}
.addCom{
  margin-top: 1.2rem;
}
.fixHeader{
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 999;
  top: 0;
}

.header{
  width:100%;
  height:1rem;
  position: relative;
  background-color: rgb(124, 211, 156);


}
.login{
  width:0.85rem;
  height:0.85rem;
  float:left;
  margin-top: 0.075rem;
  margin-left: 0.19rem;
}
.login img{
  width:100%;
  height:100%;
}
.header .classification{
  font-size: 0.3rem;
  line-height:1rem;
  margin-right: 0.38rem;
  float: right;
}
</style>
