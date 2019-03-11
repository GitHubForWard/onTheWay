<template lang="html">
  <div class="classCity">
            <li  v-for = "(item,index) in cityData.classCityData" class="cityLi" :key="index">
                <router-link :to="{ name: 'classCityDes',params:{countryID:index}}">
                      <img :src="item.url" alt="#"/>
                </router-link>
            </li>

  </div>
</template>

<script>
export default {
  name:"classCity",
  data(){
    return{
      coutryID:"Cambodia",
      cityData:{
        classCityData:[]
      },
      cityID:""
      }
    },
    created(){
      this.$axios.get("http://localhost:8080/static/data/classCityData.json")
      .then( res =>{
        this.cityData = res.data

      })
      .catch(error =>{
        console.log(error)
      })
    },
    mounted(){

    }

}
</script>

<style scope>
.classCity{
  width: 100%;
}
.cityLi{

  list-style: none;
}
.cityLi img{
  float: left;
  width: 3.4rem;
  height:1.4rem;
  margin:0.16rem;

}
</style>
