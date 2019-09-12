
function getCookie(objName){
var arrStr = document.cookie.split("; ");
for(var i = 0;i < arrStr.length;i ++){
var temp = arrStr[i].split("=");
if(temp[0] == objName) return unescape(temp[1]);
}
}

var _metux1=false;

function addtitle()
{

var userid=getCookie("userid");
if(!userid)
{
alert("发布心事只对登录用户开发,请重新登录.");
return
}

if(_metux1==true)
{
alert("正在发送你的回复,请等候5秒钟,请勿一直点击哦,否则会刷新重新计时的.");
setTimeout("_metux1=false",5000);
return;
}



var _title= document.getElementById("title").value;
var _content= document.getElementById("content").value;
var vv_test = document.getElementById("addkind");
var _kind=vv_test.options[vv_test.selectedIndex].value;
if(_title.length<3||_content.length<3)
{
alert("标题请至少超过3个字,内容请至少超过3个字.")
return
}
if(_title.length>100||_content.length>2000)
{
alert("标题请勿超过100个字,内容请勿超过2000个字.")
return
}



if(confirm("你确信要发布心事么？\n标题字数:"+_title.length+"\n内容字数:"+_content.length+"\n心事类别:"+vv_test.options[vv_test.selectedIndex].text))
{//如果是true

}
else
{//否则说明下
   _metux=false;
   return
}
_metux1=true;
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
     var test=xmlhttp.responseText;
	 if(test==1)
	 {
	  showsuccesslog("发布成功!1秒后跳转到首页。。。。。");
	  setTimeout("window.location.href='/select?op=new'", 1000)
	 }
	 if(test==2)
	 {
	  showerrorlog("发布失败!你当天已经发布了10条心事了.请明天再发.");
	 }
	 if(test==0)
	 {
	  showerrorlog("发布失败!请保存草稿稍后再试.");
	 }
	 if(test==-1)
	 {
	  showerrorlog("发布失败!请保存草稿稍后再试.");
	 }
	 if(test==3)
	 {
	  showerrorlog("你发布心事太快了!请稍后再试.");
	 }
}
}

var _content=_content.replace(/\n/g, "<br/>");
_content=_content.replace(/\&/g,"%26");
xmlhttp.open("POST","/posttitleinsert?tname="+_title+"&kind="+_kind,false);
xmlhttp.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded" );
xmlhttp.send("tcontent=" + _content);
showsuccesslog("正在发送心事中....请稍后.");
}



function showsuccesslog(text) {
      var recode=document.getElementById("feedback-succ");
	  recode.innerHTML=text;
	  recode.style.display='block';
      var recode1=document.getElementById("feedback-danger");
	  recode1.style.display='none';
}

function showerrorlog(text) {
      var recode2=document.getElementById("feedback-danger");
	  recode2.innerHTML=text;
	  recode2.style.display='block';
      var recode3=document.getElementById("feedback-succ");
	  recode3.style.display='none';
}
