<template>
  <div class="classCityDes">
        <div class="header">
            <router-link to="/classification" class="return">
                <img src="http://localhost:8080/static/images/icon/return.png" alt="#">
            </router-link>
                <p class="viewText">景区</p>
        </div>
        <div class="nav">
            <p >{{this.showData}}</p>
                <ClassCityNav :countryId = "$route.params.countryID" @sendIndex ="showIndex" />
        </div>
        <div class="CityMain">
                <ClassCityMain :cityMsg = "cityMsg"/>
        </div>

  </div>
</template>

<script>
import ClassCityNav from "../../../components/strategyCom/classCityNav"
import ClassCityMain from "../../../components/strategyCom/classCityMain"
export default {
  name:"classCityDes",
  data(){
        return{
          selectCoutry:"China",
            cityData:{
              cityArr:[]
            },
          cityMsg:[],
          showData:"",
          selectCity:{

          }
        }
  },
  methods:{
        showIndex(data){
          this.$axios.get("http://localhost:3000/classCityDes?countryID="+this.$route.params.countryID)
          .then(res =>{
            this.cityMsg = [res.data[0].cityMsg[data]]
            console.log(res.data[0].cityMsg[data])
          })
          .catch(error =>{
            console.log(error)
          })
        }
  },
  components:{
    ClassCityNav,ClassCityMain
  },
  created(){
    this.$axios.get("http://localhost:3000/classCityDes?countryID="+this.$route.params.countryID)
    .then(res =>{
      this.cityMsg = res.data[0].cityMsg
      console.log(res.data[0].cityMsg)
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
</script>

<style scoped>
.classCityDes{
  width: 100%;
}
.header{
  width: 100%;
  height: 1rem;
  background-color: #7DD197;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.return{
  width: 0.3rem;
  height: 0.5rem;
  margin: 0.25rem;
  float: left;
}
.return img{
  width: 100%;
  height: 100%;
}
.header p{
  display: inline-block;
  font-size: 0.4rem;
  line-height: 1rem;
   margin-left: 2.5rem;
}
.nav{
  width: 100%;
  margin-top: 1rem;
}
</style>
