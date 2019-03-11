<template lang="html">
    <div class="main">
        <div class="header">
          <router-link class="return" tag="div" to="/strategy">
              <img src="../../../static/images/icon/return.png" alt="#">
          </router-link>
            <SearchCom/>
        </div>
        <div class="selectNav">
            <MoreNav :message = "messages"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import SearchCom from "../../components/searchCom"
import MoreNav from "../../components/strategyFavorMore/MoreNav"
export default {
  name:"classification",
    data(){
     return{
       messages:{
         city:{
           title:"城市",
           url:"/classification/classCity"
         },
         classification:{
           title:"分类",
           url:"/classification/classSlt"
         },
         season:{
           title:"季节",
           url:"/classification/classSeason"
         }
       }
     }
  },
  components:{
    SearchCom,MoreNav
  }
}
</script>

<style scoped>
.main{
  width: 100%;
}
.header{
  width:100%;
  height:1rem;
  position:fixed;
  background-color: rgb(124, 211, 156);
  top:0;
  z-index: 999;
}

.return{
  width: 0.3rem;
  height: 0.5rem;
  margin: 0.25rem;
  float: left;
}
.return img{
  width:100%;
  height:100%;
}
.selectNav{
  width: 100%;
  height: 1rem;
  margin-top: 1.1rem;
}
</style>
