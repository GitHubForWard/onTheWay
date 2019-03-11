var express = require("express");
var router = express.Router();
var Api = require("../config/api.js");
var CURD = require("../sql/CURD.js");
var url = require("url");
var strategyData = require("../data/strategyData.json")
var cityHotData = require('../data/cityHot.json')
var peopleHotData = require('../data/peopleHot.json')
var nearestData = require('../data/nearest.json')
var detailsData = require("../data/home/homedetails.json");
var chat = require('../data/lufriend/chat.json')
var cityData = require('../data/cityData.json')
var CountrySide = require('../data/home/smallCarousel.json')
var SearchResultData = require("../data/searchInfo.json")
var MoreDetail = require('../data/MoreDetail.json')
var FvorLikeData = require('../data/strategyFavor.json')

router.all(Api.login, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all(Api.register, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all(Api.searchcontent, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
router.all(Api.readRecode, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
router.all(Api.deleteRecode, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
router.all('/homedetail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/chat', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/strategyDeatial', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/strategy', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/search', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/citydetail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/peopledetail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/nearestdetail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/classCityDes', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/countryside', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/humanities', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
router.all('/naturalLand', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all('/favorSide', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.post(Api.login, function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	// var sql = "select * from user1 where username="+username+" and password = "+password;
	var sql = "select * from user1 where username=? and password=?";
	console.log(username,password);
	var arr = [username, password];
	CURD.sqlFn(sql, arr, function(data) {
		if(data){
			res.status(200).json(data);
		}else{
			res.send([]);
		}
	})
})

router.post(Api.register, function(req, res) {

	// 接受参数
	var username = req.body.username;
	var password = req.body.password;
	var sql = "insert into user1 values(null,?,?)";
	var arr = [username, password];
	CURD.sqlFn(sql, arr, function(data) {
		if (data.affectedRows) {
			return res.status(200).json({
				code: 200,
				msg: "success"
			});
		}
		return res.status(500).json({
			code: 100,
			msg: "error"
		})
	})
})
//搜索框查询历史记录
router.get(Api.readRecode, function(req, res) {
	var sql = "select * from search";
	var arr = [];
	CURD.sqlFn(sql,arr,function(data) {
		if(data){
			res.status(200).json(data);
		}else{
			res.send([]);
		}
	})
})
//搜索框增加历史记录
router.get(Api.searchcontent, function(req, res) {
	// 接受参数
	var path_url = url.parse(req.url,true);
	var query = path_url.query;
	var searchRecord = query.content;
	var sql = "insert into search values(null,?)";
	var arr = [searchRecord];
	CURD.sqlFn(sql, arr, function(data) {
		if (data.affectedRows) {
			return res.status(200).json({
				code: 200,
				msg: "success"
			});
		}
		return res.status(500).json({
			code: 100,
			msg: "error"
		})
	})
})
//删除搜索历史记录
router.get(Api.deleteRecode, function(req, res) {
	// 接受参数
	var path_url = url.parse(req.url,true);
	var query = path_url.query;
	var searchRecord = query.content;
	var sql = "DELETE FROM search WHERE searchRecord = ? ";
	var arr = [searchRecord];
	CURD.sqlFn(sql, arr, function(data) {
		if (data.affectedRows) {
			return res.status(200).json({
				code: 200,
				msg: "success"
			});
		}
		return res.status(500).json({
			code: 100,
			msg: "error"
		})
	})
})
//详情首页
router.get("/strategy",function(req,res){
		var path_url = url.parse(req.url,true);
		var query = path_url.query;
		res.json(strategyData.strategyArr.filter(function(details) {
		return details.id >= query.id;
	})
	)
})

//攻略详情
router.get("/strategyDeatial",function(req,res){
		var path_url = url.parse(req.url,true);
		var query = path_url.query;
		res.json(strategyData.strategyArr.filter(function(details) {
		return details.id == query.id;
	})
	)
})
// 首页详情
router.get("/homedetail",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(detailsData.list.filter(function(details) {
		return details.id == query.id;
	}))
})
//聊天页面
router.get("/chat",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(chat.chatRecord.filter(function(user) {
		return user.id == query.id;
	}))
})

//搜索详情页
router.get("/search",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(SearchResultData.searchInfo.filter(function(user) {
		return user.id == query.id;
	}))
})

//城市最火的详情
router.get("/citydetail",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(cityHotData.cityHot.filter(function(user) {
		return user.id == query.id;
	}))
})
//人气最高的详情
router.get("/peopledetail",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(peopleHotData.peopleHot.filter(function(user) {
		return user.id == query.id;
	}))
})
//距离最近
router.get("/nearestdetail",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(nearestData.nearest.filter(function(user) {
		return user.id == query.id;
	}))
})

//分类页面
	router.get("/classCityDes",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(cityData.cityArr.filter(function(country){
		return country.countryID == query.countryID;
		}))
	})

//首页田园风光详情
router.get("/countryside",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(CountrySide.countryside.filter(function(details) {
		return details.id == query.id;
	}))
})
//首页人文景观详情
router.get("/humanities",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(CountrySide.humanities.filter(function(details) {
		return details.id == query.id;
	}))
})
//首页自然景观详情
router.get("/naturalLand",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(CountrySide.naturalLand.filter(function(details) {
		return details.id == query.id;
	}))
})

//攻略首页轮播
router.get("/favorSide",function(req,res){
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json(FvorLikeData.favorLike.filter(function(details) {
		return details.id == query.id;
	}))
})

module.exports = router;
