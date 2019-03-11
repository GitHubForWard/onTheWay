<template lang="html">
    <div class="cityNav">
        <p class="cityName" v-for = "(item,index) in cityMsgs" @click="getIndex(index)">
              {{item.cityName}}
        </p>
          <div class="downLogo">
            <img src="../../../static/images/icon/pull-down.png" alt=""/>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name:"classCityNav",
  data(){
    return{
      cityMsgs:[]
    }
  },
  props:{
    countryId:{
      type:Number,
      default:0
    }
  },
    methods:{
      getIndex(index){
        this.$emit("sendIndex",index);
    }
  },
  created(){
    this.$axios.get("http://localhost:3000/classCityDes?countryID="+this.countryId)
    .then(res =>{
      this.cityMsgs = res.data[0].cityMsg
      console.log(res.data[0].cityMsg)
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
</script>

<style scoped>
.cityNav{
  width: 100%;
  height: 0.8rem;
  background-color: white;

}
.cityName{
  float: left;
  line-height:  0.8rem;
  margin-left:0.1rem;
}
.downLogo{
  width: 0.4rem;
  height: 0.2rem;
  float: right;
  line-height: 0.8rem;
  margin-right: 0.2rem;
}
.downLogo img{
  width: 100%;
  height: 100%;
}
.active{
  color: #7dd197;
}
</style>
