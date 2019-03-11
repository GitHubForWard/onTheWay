<template lang="html">
  <div class="classSlt">
        <div class="classList">
            <li  v-for = "(item,index) in classData.classCltData" class="classLi" :key="index">
              <router-link to="/humanities">
              <img :src="item.url" alt="#"/>
              </router-link>
            </li>
        </div>
  </div>
</template>

<script>
export default {
  name:"classification",
    data(){
      return{
        classData:{
          classCltData:[]
          }
      }
    },
    created(){
      this.$axios.get("http://localhost:8080/static/data/classClt.json")
      .then( res =>{

        this.classData = res.data
      })
      .catch(error =>{
        console.log(error)
      })
    }
}
</script>

<style scoped>
.classSlt{
  width: 100%;
}
.classLi{

  list-style: none;
}
.classLi img{
  float: left;
  width: 3.4rem;
  height:1.4rem;
  margin:0.16rem;

}
</style>
