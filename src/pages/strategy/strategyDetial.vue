<template lang="html">
  <div class="detial">
    <header>
			<router-link tag="a" to="/strategy">
				<img src="../../../static/images/icon/return.png" alt="">
			</router-link>
			<h3>路上正文</h3>
		</header>
        <div class="hotDiv">
            <HotDetial :currentData="currentData"/>
            <Comments :currentData="currentData"/>
        </div>
  </div>
</template>

<script>
import HotDetial from "../../components/strategyCom/strategyDetialCom"
import Comments from '../../components/home/comments.vue'
export default {
  name:"detial",
  data(){
    return{
      currentData:[]
    }
  },
  components:{
    HotDetial,
    Comments
  },
  methods:{

    },
    created(){
      this.$axios.get("http://localhost:3000/strategyDeatial?id="+this.$route.params.id)
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
header{
	height: 1rem;
	width: 100%;
	background-color: #7DD19C;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	display: flex;
}
header img {
	position: absolute;
	width:0.3rem;
	left: 0.2rem;
	top: 0.2rem;
}
header h3 {
	font-size: 0.4rem;
	line-height: 1rem;
	height: 1rem;
	flex-grow: 1;
	text-align: center;
}
.hotDiv{
  width: 100%;
  margin-top:1rem;
}
</style>
