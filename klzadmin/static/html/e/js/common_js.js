// JavaScript Document



function login()
{
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
	     window.location.reload();
	 }
	 else
	 {
         alert(test);
	 }
}
}

var _username= document.getElementById("username").value;
var _password= document.getElementById("password").value;
xmlhttp.open("GET","/login?username="+_username+"&password="+_password,true);
xmlhttp.send();
}

function setCookie(name,value)
{
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}


function getCookie(objName){
var arrStr = document.cookie.split("; "); 
for(var i = 0;i < arrStr.length;i ++){ 
var temp = arrStr[i].split("="); 
if(temp[0] == objName) return unescape(temp[1]); 
} 
} 

function delCookie(name)
 {
  var date=new Date();
  date.setTime(date.getTime()-10000);
  document.cookie = name + "=a; expires=" + date.toGMTString();
 }

function clearCookie(){

delCookie('userid');
delCookie('username');
window.location.href='/';

}

function isChinese(){
     var languageid = getCookie("language");
     if (languageid == null || languageid == 0){
         return true;
     }
}

function isEnglish(){
     var languageid = getCookie("language");
     if (languageid == 1){
         return true;
     }
}
