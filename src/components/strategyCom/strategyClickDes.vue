<template lang="html">
  <div class="Hot">
      <div class="strategyDes" v-for="(item,index) in strategyData.strategyArr" :key="index">
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
</template>

<script>
export default {
  name:"strategyClickDes",
  data(){
    return{
      strategyData:{
        strategyArr:[]
      }
    }
  }
}
</script>

<style lang="css">
.Hot{
  width: 100%;

}

.strategyDes{

  width:100%;
  height: 5.8rem;
  position: relative;
  background-color: white;
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
  display: -webkit-box;
           -webkit-line-clamp: 3;
           -webkit-box-orient: vertical;
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
}
</style>
