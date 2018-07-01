var cztime = new Date().getTime();
(function(global){
	function remChange(){
		var w=document.documentElement.clientWidth;
		if(w>750){
			w=750;
		} 
		if(w<320){
			w=320;
		}
		document.documentElement.style.fontSize=w/750*100+'px'
	}
	remChange();
	global.addEventListener('resize',remChange,false)
})(window);
//获取url参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return "";
}
//提示框
function tips(val, zt){
	$(".MLalertBox").remove();
	if(zt == 3) return false;
	var html = '<div class="MLalertBox"><div class="MLalert clearfix"><font class="fl">'+ val +'</font></div></div>';
	$('body').append(html);
	$(".MLalertBox .MLalert").css("left",($(".MLalertBox").width()-$(".MLalertBox .MLalert").width())/2);
	if(zt != 2){
		setTimeout(function(){
			$(".MLalertBox").remove();
		},2000);
	}
	return false;
}
