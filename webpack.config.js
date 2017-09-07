var webpack=require("webpack");
var htmlWebpackReplace=require("html-webpack-plugin");
module.exports={
	entry:__dirname+"/main.js",
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				use:[
					"style-loader",
					"css-loader"
				]
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.png|.jpg$/,
				loader:"url-loader"
			}
		]
	},
	devServer:{
		port:9090,
		host:"127.0.0.1",
		hot:true,
		setup(app) {
            app.get('/data/data', function(req, res) {
                res.json({ custom:
                	[
						{
							img:"img/sj_06.jpg",
							name:"QQ看点",
							cont:"爱动漫:火影忍者，晓组织如果发动这个…",
							time:"13:35"
						},
						{
							img:"img/sj_08.jpg",
							name:"购物号",
							cont:"[新消息]拼多多商城:活动参与成功…",
							time:"13:15"
						},
						{
							img:"img/sj_10.jpg",
							name:"服务号",
							cont:"QQ团队：举手比心也能做公益？",
							time:"12:22"
						},
						{
							img:"img/sj_07.jpg",
							name:"web前端学习交流群",
							cont:"不管事:国内最近…",
							time:"8:12"
						},
						{
							img:"img/sj_05.jpg",
							name:"网站1506A",
							cont:"辅导员:11：49：28 国庆节放假期间…",
							time:"11:53"
						},
						{
							img:"img/sj_04.jpg",
							name:"腾讯新闻",
							cont:"大妈卖鱼被“咬”住手 嚎啕大哭",
							time:"9:29"
						},
						{
							img:"img/sj_03.jpg",
							name:"半雅半俗",
							cont:"栋一:哈哈哈hah",
							time:"2017-07-28"
						},
					]
				});
            });
       	},
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackReplace({
			template:"./index.html"
		})
	]
}