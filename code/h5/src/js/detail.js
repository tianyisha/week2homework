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
		let id=localStorage.getItem("id");
		console.log(id)
		mui.ajax('/api/getUserContentOne',{
			data:{
				"id":id
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(res){
				console.log(res)
				render(res.data)
			},
			
		});
	}
	function render(data){
		var html='';
		var list=document.querySelector(".list")
		data.forEach(function(item){
			html+=` <li class="mui-table-view-cell">${item.name}</li>
    <li class="mui-table-view-cell"><img src="${item.img}" alt=""></li>
    <li class="mui-table-view-cell">做题天数:${item.days}</li>
	 <li class="mui-table-view-cell">连续做题天数:${item.dohomework}</li>
	  <li class="mui-table-view-cell">做题数量:${item.content}</li>
	   <li class="mui-table-view-cell">做题得分率:${item.true}</li>`
		})
		list.innerHTML=html
	}
		init()
})