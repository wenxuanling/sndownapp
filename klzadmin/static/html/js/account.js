
function len(s) {
 var l = 0;
 var a = s.split("");
 for (var i=0;i<a.length;i++) {
  if (a[i].charCodeAt(0)<299) {
   l++;
  } else {
   l+=2;
  }
 }
 return l;
}
function regin()
{
var _useremail= document.getElementById("reguseremail").value;
var _password= document.getElementById("regpassword").value;
var _username= document.getElementById("regusername").value;
var _passwords= document.getElementById("regspassword").value;

var myreg = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;

if(_useremail.length<1)
 {
 showerrorlog("电子邮箱不能为空");
 return false;
 }
if(!myreg.test(reguseremail.value))
{
         showerrorlog("请输入有效的email!");
         return false;
}
if(_password!=_passwords)
{
 showerrorlog("输入的两遍密码不同");
         return false;
}
if(_password.length>20||_password.length<6)
{
 showerrorlog("输入的密码请在6~20个字符间");
         return false;
}

if(len(_username)>14)
{
 showerrorlog("昵称请勿超过7个汉字");
         return false;
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

        showsuccesslog("注册成功!请去你的注册邮箱里面验证链接即可完成注册,请注意查看垃圾箱中的邮件!");

	 }
	  if(test==1062)
	 {
          showsuccesslog("注册失败！已经存在的电子邮箱！");
	 }
	  if(test==1063)
	 {
         showsuccesslog("注册失败！已经存在的昵称！");
	 }
}
}



xmlhttp.open("GET","/register?useremail="+_useremail+"&password="+_password+"&uname="+_username,true);
xmlhttp.send();
}


function findpass()
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
	    showsuccesslog("找回密码成功，请去你的邮箱中查看,注意查看垃圾箱.");
	  <!--window.location.href="/select?op=new";-->
	 }
	  if(test==0)
	 {
    	showerrorlog("未注册的邮箱账号");
	 }
	   if(test==-1)
	 {
	    showerrorlog("未知错误");
	 }
}
}

var _username= document.getElementById("findemail").value;

xmlhttp.open("POST","/findPass?email="+_username,true);
xmlhttp.send();
}



function changePass()
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
	    showsuccesslog("修改密码成功!一秒后跳回首页!");
        setTimeout("window.location.href='/select?op=new'", 1000);
	 }
	  if(test==0)
	 {
	    showerrorlog("邮箱的原密码不正确");
	 }
	   if(test==-1)
	 {
	    showerrorlog("未知错误");
	 }
}
}

var email= document.getElementById("changeemail").value;
var oldpass= document.getElementById("oldpassword").value;
var newpass= document.getElementById("newpassword").value;

if(newpass.length>20||newpass.length<6)
{
        showerrorlog("输入的密码请在6~20个字符间");
         return false;
}

xmlhttp.open("POST","/userUpdate?op=uppass&email="+email+"&oldpassword="+oldpass+"&newpassword="+newpass,true);
xmlhttp.send();
}



function sendupdate()
{

var _qianming= document.getElementById("qianming").value;
var _uname= document.getElementById("uname").value;

if(_qianming.length<1||_uname.length<1)
 {
 alert("签名或昵称不能为空");
 return ;
 }
if(len(_uname)>14)
{
 alert("昵称请勿超过7个汉字");
return ;
}
if(len(_qianming)>200)
{
 alert("昵称请勿超过100个汉字");
return ;
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
	  showsuccesslog("修改成功!一秒后跳转到首页。。。。。");
	  setTimeout("window.location.href='/select?op=new'", 1000)

	 }

	  if(test==1063)
	 {
	  showerrorlog("修改失败！已经存在的昵称！");
	 }
}

}


xmlhttp.open("GET","/userUpdate?uname="+_uname+"&qianming="+_qianming,true);
xmlhttp.send();
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


