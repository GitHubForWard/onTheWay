<template>
<div class="container">
		<div style="background-color: white" class="top">
			 <div class="tx">

			 </div>
			 <p>游客：xzm112233</p>
			 <span>登录/注册</span>
			 <p>简介：欢迎使用路上App</p>
		</div>

	<div style="background-color: white">
		<ul class="infoList">
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/home.png"></i>
				<a href="">个人主页</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/Essential_information.png"></i>
				<a href="">基本信息</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>
		</ul>
   </div>
   <div style="background-color: white">
		<ul class="infoListModel infoList">
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/home.png"></i>
				<a href="">我的关注</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/Essential_information.png"></i>
				<a href="">我的收藏</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/home.png"></i>
				<a href="">我的路友</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>

		</ul>
    </div>
    <div style="background-color: white">
		<ul class="infoListBom infoList">
			<li>
				<i class="iconLeft"><img src="../../../static/images/icon/home.png"></i>
				<a href="">设置</a>
				<i class="iconRight"><img src="../../../static/images/icon/right.png"></i>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default {
      name:'login',
      data(){
         return{

        }
      }
    }
</script>

<style scoped>
  .container{

}
  .top{
   overflow: hidden;
   width: 100%;
   height:250px;
}
.container .tx{
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background: url('../../../static/images/icon/logo.png') no-repeat;
	background-size: cover;
	margin-top: 45px;
	margin-left: 160px;
	}
	.infoList .iconRight{float: right;margin-right: 20px}
   .infoList .iconRight img{width: 10px;}
 .top p{text-align: center;padding: 20px 0}
 .top span{margin-left: 170px}
  .infoList img{
    width: 25px;
    height:25px;

}

.infoList{margin-top: 20px}
.infoList a{padding-left: 10px;margin-top: 8px}
.infoList i{padding-left: 8px}
.infoList i,a{float: left}
.infoList li{overflow: hidden;border-bottom: 1px solid #DBDBDB;padding: 10px 0}
</style>
