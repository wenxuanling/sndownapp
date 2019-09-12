// JavaScript Document



var _content=document.getElementById("ttcon").innerHTML;
_content=_content.replace(/\n/g, "<br/>");
document.getElementById("ttcon").innerHTML=_content;
  
  
var tidtopage=document.getElementById("selecttid").innerHTML;
  function jumppage(e)
{  
    window.location.href="/blog/"+tidtopage+"/"+e;
}

function nextpage()
{
var pagess=pagecode+1;
if(pagess>count)
 return;
    window.location.href="/blog/"+tidtopage+"/"+pagess;
}

function uppage()
{
var pagess=pagecode-1;
if(pagess<1)
 return;
    window.location.href="/blog/"+tidtopage+"/"+pagess;
}

<!-- CuFon ends -->

var parrayed = new Array();
function IsContain(arr,value)
{
  for(var i=0;i<arr.length;i++)
  {
     if(arr[i]==value)
      return true;
  }
  return false;
}

function loadXMLDoc(rids,rcount)
{
var isshow=document.getElementById("fr"+rids).style.display;

if(IsContain(parrayed,rids))
{
if(isshow=="none")
{
show(rids)
document.getElementById("hf"+rids).innerHTML="收起回复";
}
else
{
shou(rids)
document.getElementById("hf"+rids).innerHTML="回复:("+rcount+")";
}
   return;
}
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
	<!-- -->document.getElementById("myDiv").innerHTML=test; 
	parrayed.push(rids);
	 _replyrid=rids;
	document.getElementById("hf"+rids).innerHTML="收起回复";
    show(rids);
	var xmlDoc=xmlhttp.responseXML;
	var first=xmlDoc.getElementsByTagName("reply");
	for (var i = 0; i < first.length; i++) {
                var uname = first[i].getElementsByTagName("uname")[0].firstChild.nodeValue;
                var text = first[i].getElementsByTagName("text")[0].firstChild.nodeValue;
				var ftime = first[i].getElementsByTagName("ftime")[0].firstChild.nodeValue; 
				var device = first[i].getElementsByTagName("device")[0].firstChild.nodeValue;
				var uid = first[i].getElementsByTagName("uid")[0].firstChild.nodeValue;
				var fid = first[i].getElementsByTagName("fid")[0].firstChild.nodeValue;
				var rid = first[i].getElementsByTagName("rid")[0].firstChild.nodeValue;
				var tt=document.getElementById("fr"+rids).innerHTML;
                var iindex=i+1;
                document.getElementById("fr"+rids).innerHTML=tt+"<p><a href=/userSelect?uid="+uid+"><i class='fa fa-user fa-fw'></i><span id=freuname"+fid+">"+uname+"</span></a><span class='pull-right'>"+iindex+"#</span></p><blockquote><p>"+text+"</p> </blockquote><p><span><i class='fa fa-clock-o fa-fw'></i>"+ftime+"&nbsp;&nbsp;&nbsp;</span><span><i class='fa fa-mobile-phone fa-fw'></i>"+device+"</span><a class='pull-right' href='javascript:replys("+fid+","+rid+")'>回复</a></p><hr/><p></p>";
    }
var tts=document.getElementById("fr"+rids).innerHTML;
document.getElementById("fr"+rids).innerHTML=tts+"<div id=freinslist"+rids+"></div><div class='form-group'><textarea class='form-control' rows=3  id=fre"+rids+"></textarea><br/><button class='btn btn-default pull-right' onclick=javascript:sendfreply()  type=button >回 复</button> <br/></div>";

    }
  }
xmlhttp.open("POST","/freplySelect?rid="+rids,true);
xmlhttp.send();
}
function shou(rids)
{
document.getElementById("fr"+rids).style.display='none' 
}
function show(rids)
{
document.getElementById("fr"+rids).style.display='block' 
}

var _replyfid;
var _replyrid;
var _text;
var _tid;
function replys(replyfid,replyrid)
{
    _replyfid=replyfid;
    _replyrid=replyrid;
    var oInput = document.getElementById("fre"+replyrid);
	oInput.focus();
	var freuname = document.getElementById("freuname"+replyfid).innerHTML;
	oInput.value="回复 "+freuname+":";
}

var _metux=false;

function sendfreply()
{
var userid=getCookie("userid");
if(!userid)
{
alert("发布评论只对登录用户开发,请登录.");
return
}

if(_metux==true)
{
alert("正在发送你的回复,请等候5秒钟,请勿一直点击哦,否则会刷新重新计时的.");
setTimeout("_metux=false",5000);
return;
}
_metux=true;


_text= document.getElementById("fre"+_replyrid).value;
if(_text.length<3)
{
alert("回复内容请至少超过3个字.")
return
}
if(_text.length>1000)
{
alert("回复内容请勿超过1000个字.")
return
}

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
     _metux=false;
     var test=xmlhttp.responseText;	          
	 var xmlDoc=xmlhttp.responseXML;
	 var first=xmlDoc.getElementsByTagName("reply");
	 for (var i = 0; i < first.length; i++) {
                var uname = first[i].getElementsByTagName("uname")[0].firstChild.nodeValue;
                var text = first[i].getElementsByTagName("text")[0].firstChild.nodeValue;
				var ftime = first[i].getElementsByTagName("ftime")[0].firstChild.nodeValue; 
				var device = first[i].getElementsByTagName("device")[0].firstChild.nodeValue;
				var uid = first[i].getElementsByTagName("uid")[0].firstChild.nodeValue;
				var fid = first[i].getElementsByTagName("fid")[0].firstChild.nodeValue;
				var rid = first[i].getElementsByTagName("rid")[0].firstChild.nodeValue;
				var tt=document.getElementById("freinslist"+rid).innerHTML;
				document.getElementById("freinslist"+rid).innerHTML=tt+"<p><label id=freuname"+fid+">"+uname+"</label></p><h4>&nbsp;&nbsp;&nbsp;"+text+"</h4><p>"+device+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ftime+"<a style=float:right;margin-right:20px  href=javascript:replys("+fid+","+rid+")>回复</a><hr width=95% size=0.5 color=#959595></p>";
					 var oInput = document.getElementById("fre"+rid);
					 oInput.value="";           
}
 
}

	var tests=first[0].getElementsByTagName("rcontent")[0].firstChild.nodeValue
	document.getElementById("myDiv").innerHTML=first;
	document.getElementById("myDiv").innerHTML=tests;
     document.getElementById("myDiv").innerHTML=xmlDoc.getElementsByTagName("Response")[0].childNodes[0].nodeValue;

    }

xmlhttp.open("GET","/freplyInsert?rid="+_replyrid+"&text="+_text,true);
xmlhttp.send();
}

var _metux1=false;
function sendreply()
{
var userid=getCookie("userid");
if(!userid)
{
alert("发布评论只对登录用户开放,请登录.");
return
}
if(_metux1==true)
{
alert("正在发送你的回复,请等候5秒钟,请勿一直点击哦,否则会刷新重新计时的.");
setTimeout("_metux1=false",5000);
return;
}
_metux1=true;

_text= document.getElementById("message").value;

if(_text.length<3)
{
alert("回复内容请至少超过3个字.")
return
}
if(_text.length>1000)
{
alert("回复内容请勿超过1000个字.")
return
}

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
    _metux1=false;
     var test=xmlhttp.responseText;	          
	 if(test==1)
	 {
	   window.location.reload(); 
	   }
}

}

_tid= document.getElementById("selecttid").innerHTML;

xmlhttp.open("GET","/replyInsert?tid="+_tid+"&rcontent="+_text,true);
xmlhttp.send();
}



function uptitle()
{
alert("网页版暂时不支持评价,请下载APP体验更多功能");
}


function addcollect()
{
var userid=getCookie("userid");
if(!userid)
{
alert("收藏心事只对登录用户开放,请登录.");
return
}

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
	   alert("收藏心事成功");
	  }
	 if(test==0)
	 {
	   alert("你已经收藏了此心事");
	  }
	 if(test==-1)
	 {
	   alert("收藏心事失败");
	  }
}

}

_tid= document.getElementById("selecttid").innerHTML;

xmlhttp.open("GET","/addtitlecollect?tid="+_tid,true);
xmlhttp.send();
}

