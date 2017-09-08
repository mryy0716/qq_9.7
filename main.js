var vm=new Vue({
	el:"#list",
	data:{
		arr:[]
	},
	created:function(){
		var that=this;
		fetch("/data/data").then(function(res){
			return res.json();
		}).then(function(data){
			that.arr=data.custom;
		})
	}
});