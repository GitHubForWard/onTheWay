<template lang="html">
    <div class="article">
      <div v-for="(item,index) in strategyData.strategyArr" :key="index">
        <div class="hallDes" >
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
             <img :src="pic" alt="" class="desImg" v-for="(pic,index) in item.desImg" :key="index" v-show="!item.desImg==''" :class="{middle:index==1}" />
             <div class="hr"></div>
             <Nav :share="item.share" :comments="item.comments" :praise="item.praise" />
        </div>
        <div class="bigHr"></div>
      </div>
    </div> 
</template>

<script>
import Nav from './shareAndCommentNav'
export default {
  name:"strategyHot",
  data(){
    return{
      strategyData:{
        strategyArr:[]
      },
      focousText:"关注"
    }
  },
  methods:{
      focusClick(index){
        // console.log(this.$refs.focus)
        this.$refs.focus[index].innerHTML='已关注'
          this.$refs.focus[index].style.border = "0.05rem solid #D1D1D1";
      }
  },
  props:{
    dataURL:{
      type:String,
      default:'discovery/hall.json'
    }
  },
  created(){
    this.$axios.get("http://localhost:8080/static/data/"+this.dataURL)
    .then(res =>{
      this.strategyData = res.data
      // console.log(this.strategyData)
    })
    .catch(error =>{
      console.log(error)
    })
  },
  components:{
    Nav
  }

}
</script>

<style scoped>
.article{
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
}
.article>div{
  width: 100%;
  background-color: white;
}
.hallDes{
  margin: 0 0.2rem;
  overflow: hidden;
  position: relative;
}
.hallDes .icon img{
  width: 1rem;
  height:1rem;
  margin-top: 0.2rem;
  float: left;
}
.hallDes .names{
  font-size: 0.2rem;
  position: absolute;
  left: 1.3rem;
  top: 0.5rem;
}
.hallDes .focus{
  width: 1rem;
  height: 0.5rem;
  border: 0.05rem solid rgb(124,211,156);
  border-radius: 1rem;
  position: absolute;
  left:6rem;
  top:0.3rem;
  text-align: center;
  line-height: 0.5rem;
}
.hallDes .timeAndAdd{
  position: absolute;
  left: 1.3rem;
  top: 0.8rem;
}
.hallDes .updateTime{
  font-size: 0.1rem;
  float: left;
}
.hallDes .comeFrom{
    font-size: 0.1rem;
    float: left;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
.hallDes .fromWhere{
    font-size: 0.1rem;
    float: left;
}
.hallDes .desc{
  margin-top: 1.4rem;
  overflow: hidden;
  font-size: 0.2rem;
  line-height: 0.4rem;
  color:black;
}
.hallDes .desImg{
    width: 2.3rem;
}
.hallDes .desImg.middle{
  margin: 0 0.1rem;
}
.hr{
  width: 100%;
  height: 0.02rem;
  background-color: #E6E6E6;
  margin: 0.1rem 0;
}
.bigHr{
  width: 100%;
  height: 0.2rem;
  background-color: #E6E6E6;
}
</style>
