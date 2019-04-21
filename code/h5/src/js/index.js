require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})
require(["mui"],function(mui){
	function init(){
		 addevent()
		
	}
	function addevent(){
		var sure=document.querySelector(".sure");
		var user=document.querySelector(".user");
		var pwd=document.querySelector(".pwd");
		sure.addEventListener("tap",function(){
			var userval=user.value;
			var pwdval=pwd.value;
			mui.ajax('/api/getUserOne',{
				data:{
					"name":userval,
					"pass":pwdval
				},
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(res){
					
					let id=res.data[0]._id;
					console.log(id)
					localStorage.setItem("id",id)
					mui.alert(res.msg,'提示','登陆成功',function (e) {
					   location.href="../html/detail.html"
					},)
					
				},
				error:function(xhr,type,errorThrown){
					
				}
			});
		})
	}
	
	init()
})