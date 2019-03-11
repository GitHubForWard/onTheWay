<template>
	<div class="MoreNavBox">
		<ul>
			<li>
				<router-link :to="message.city.url" tag="a" href="#">{{message.city.title}}</router-link>
				<span class="NavBorder" :class="{active_bg:$route.path==message.city.url}"></span>
			</li>
			<li>
				<router-link :to="message.classification.url" tag="a" href="#">{{message.classification.title}}</router-link>
				<span class="NavBorder" :class="{active_bg:$route.path==message.classification.url}"></span>
			</li>
			<li>
				<router-link :to="message.season.url" tag="a" href="#">{{message.season.title}}</router-link>
				<span class="NavBorder" :class="{active_bg:$route.path==message.season.url}"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"morenav",
		data(){
			return{

			}
		},
		props:{
			message:{
				type:Object,
				default:''
			}
		}
	}
</script>

<style scoped>
	ul{
		width: 100%;
		height: 0.9rem;
		background: #FFFFFF;
		margin-top: 0.1rem;
		display: flex;
	}
	ul li{
		float: left;
		text-align: center;
		line-height: 0.9rem;
		position: relative;
		flex-grow: 1;
	}
	ul li a{
		font-size: 0.32rem;
		font-weight: 500;
	}
	.active{
		color: #7dd197;
	}
	.NavBorder{
		display: block;
		width: 0.8rem;
		height: 0.05rem;
		background: transparent;
		position: absolute;
		bottom: 0.15rem;
		left: 0.82rem;
	}
	.active_bg{
		background: #7DD197;
	}
</style>
