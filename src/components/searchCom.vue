<template lang="html">
  <div class="searchBtn">
    <router-link tag="div" to="/search"><input v-model="content" type="text" placeholder="搜索" @keyup.enter="submit"></router-link>
    <img src="../../static/images/icon/search.png" alt="" class="searchIcon">
    <img src="../../static/images/icon/clear.png" alt="" class="close" @click="clearHandler">
  </div>
</template>

<script>

export default {
  name:"searchBtn",
  data(){
			return{
				content:''
			}
  },
  methods:{
    clearHandler(){
      this.content=''
    },
    submit(){
      this.$axios({
        method:"get",
        url:"http://localhost:3000/searchcontent",
        params:{
          content:this.content
        }
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.searchBtn{
  width: 4.86rem;
  height: 0.66rem;
  position: fixed;
  left: 1.3rem;
  top: 0.17rem;
  color: white;
}
.searchBtn>div{
  width: 100%;
  height: 100%;
}
.searchBtn input{
  width: 100%;
  height: 100%;
  border-radius: 0.33rem;
  border: none;
  outline: none;
  text-indent: 0.63rem;
  color: white;
  background-color: #B1E3C4
}
.searchBtn img{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  left: 0.19rem;
  top: 0.19rem;
}
.searchBtn img.close{
  left: 4.3rem;
}
input::input-placeholder {
    color: #fff;
}

input::-webkit-input-placeholder {
    color: #fff;
}

input:-ms-input-placeholder {
    color: #fff;
}

input:-moz-placeholder {
    color: #fff;
}

input::-moz-placeholder {
    color: #fff;
}

</style>
