import Vue from 'vue'
import Router from 'vue-router'
import Carousel from '../pages/carousel'
import Strategy from "../pages/strategy/strategy"
import Index from '../pages/index'
import LuFriend from '../pages/Lufriend/lufriend'
import Discover from '../pages/discovery/discovery'
import My from '../pages/my/my'
import Home from '../pages/home/home'
import FavorMore from "../pages/strategy/FavorMore"
import CityHot from "../pages/strategy/strategyFavorMore/cityHot"
import PeopleHot from "../pages/strategy/strategyFavorMore/peopleHot"
import Nearest from "../pages/strategy/strategyFavorMore/nearest"
import Classification from "../pages/strategy/classification"
import Homedetail from '../pages/home/homeDetail'
import SearchPage from "../pages/strategy/searchPage"
import SearchResult from "../pages/strategy/searchResult"
import ClassCity from "../pages/strategy/classificationMore/classificationCity"
import ClassSeason from "../pages/strategy/classificationMore/classificationSeason"
import ClassSlt from "../pages/strategy/classificationMore/classificationSlt"
import StrategyDetial from "../pages/strategy/strategyDetial"
import ClassCityDes from "../pages/strategy/classificationMore/classCityDes"
import Message from '../pages/Lufriend/message'
import Goodfrined from '../pages/Lufriend/goodfriend'
import Chat from '../pages/Lufriend/chat'
import FocusOn from '../pages/discovery/focusOn'
import Hall from '../pages/discovery/hall'
import FavorMoreCityHotDetail from "../pages/strategy/FavorMoreCityHotDetail"
import FavorMorePeopleHotDetail from "../pages/strategy/favorMorePeopleHotDetail"
import FavorMoreNearestDetail from "../pages/strategy/favorMoreNearestDetail"
import PostMessage from '../pages/discovery/postMessage'
import SmallDetail from '../pages/home/smallCarouselDetail.vue'
import CountrySide from '../pages/home/countryside.vue'
import Humanities from '../pages/home/humanities.vue'
import NaturalLand from '../pages/home/naturalLand.vue'
import FavorCarouseDetial from '../pages/strategy/FavorCarouselDetial.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
        {
          path: '/',
          name: 'Index',
          component: Index,
          redirect:'/home',
          children:[
            {
              path:'home',
              name:'Home',
              component:Home
            },
            {
              path:'lufriend',
              name:'LuFriend',
              component:LuFriend,
              redirect:'/lufriend/message',
              children:[
                {
                  path:'message',
                  name:'message',
                  component:Message
                },
                {
                  path:'goodfrined',
                  name:'goodfrined',
                  component:Goodfrined
                }
              ]
            },
            {
              path:'strategy',
              name:'Strategy',
              component:Strategy
            },
            {
              path:'discover',
              name:'Discover',
              component:Discover,
              redirect:'/discover/hall',
              children:[
                {
                  path:'hall',
                  name:'hall',
                  component:Hall
                },
                {
                  path:'focuson',
                  name:'focusOn',
                  component:FocusOn
                }
              ]
            },
            {
              path:'my',
              name:'My',
              component:My
            }
          ]
        },
        {//首页详情页
          path:'/homedetails',
          name:'Homedetail',
          component:Homedetail
        },
        {
          path:'/carousel',
          name:'Carousel',
          component:Carousel
        },
        {
          path:"/classification",
          name:"Classification",
          component:Classification,
          redirect:'/classification/classCity',
          children:[
            {
              path:"classCity",
              component:ClassCity,
                name:'classCity'
            },
            {
              path:"classSeason",
              component:ClassSeason,
                name:'classSeason'
            },
            {
              path:"classSlt",
              component:ClassSlt,
                name:'classSlt'
            }
          ]
        },
        {
        	path:"/favormore",
        	name:"FavorMore",
        	component:FavorMore,
        	redirect:"/favormore/city",
        	children:[
        		{
        			path:"city",
        			name:"CityHot",
        			component:CityHot
        		},
        		{
        			path:"people",
        			name:"PeopleHot",
        			component:PeopleHot
        		},
        		{
        			path:"nearest",
        			name:"Nearest",
        			component:Nearest
        		}
      	  ]
        },
        {
        	path:"/search",
        	name:"SearchPage",
        	component:SearchPage
        },
        {
        	path:"/searchResult/:id",
        	name:"SearchResult",
        	component:SearchResult
        },
        {
          path:"/strategyDeatial/:id",
          name:"strategyDeatial",
          component:StrategyDetial
        },
        {
          path:"/classCityDes/:countryID",
          name:"classCityDes",
          component:ClassCityDes
        },
        {//聊天页面
          path:'/lufriend/chat/:id',
          name:'chat',
          component:Chat
        },
        {//城市最火详情页
        	path:"/citydetail/:id",
        	name:"FavorMoreCityHotDetail",
        	component:FavorMoreCityHotDetail
        },
        {//人气最高详情页
        	path:"/peopledetail/:id",
        	name:"FavorMorePeopleHotDetail",
        	component:FavorMorePeopleHotDetail
        },
        {//距离最近详情页
        	path:"/nearestdetail/:id",
        	name:"FavorMoreNearestDetail",
        	component:FavorMoreNearestDetail
        },
        {//发文页面
          path:'/discover/postMessage',
          name:'PostMessage',
          component:PostMessage
        },
        {//首页人文、田园、自然详情页
          path:'/detail/:type/:id',
          name:'smallDetail',
          component:SmallDetail
        },
        {//首页人文景观更多页
          path:'/humanities',
          name:'humanities',
          component:Humanities
        },
        {//首页自然景观更多页
          path:'/naturalLand',
          name:'naturalLand',
          component:NaturalLand
        },
        {//首页田园风光更多页
          path:'/countryside',
          name:'countryside',
          component:CountrySide
        },
        {
          path:"/favorSide/:type/:id",
          name:"favorSide",
          component:FavorCarouseDetial
        }
  ]
})
