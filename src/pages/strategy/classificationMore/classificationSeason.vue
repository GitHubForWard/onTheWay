<template lang="html">
    <div class="classSeason">
          <div class="seasonList">
              <li  v-for = "(item,index) in seasonData.classSeasonData" class="seasonLi" :key="index">
                  <router-link to="/countryside">
                      <img :src="item.url" alt="#"/>
                  </router-link>
              </li>
          </div>
    </div>
</template>

<script>
export default {
  name:"sesaon",
    data(){
      return{
        seasonData:{
          classSeasonData:[]
          }
      }
    },
    created(){
      this.$axios.get("http://localhost:8080/static/data/classSeason.json")
      .then( res =>{

        this.seasonData = res.data
      })
      .catch(error =>{
        console.log(error)
      })
    }
}
</script>

<style scope>
.classSeason{
  width: 100%;
}
.seasonList{
  width: 100%;
}
.seasonLi{
  width: 100%;
  list-style: none;
  display: inline-block;
  width: 3.4rem;
  height:1.4rem;
  margin:0.16rem;
}
.seasonLi img{
  width: 100%;
  height: 100%;
}

</style>
