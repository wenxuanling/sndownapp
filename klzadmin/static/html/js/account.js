
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
 showerrorlog("�������䲻��Ϊ��");
 return false;
 }
if(!myreg.test(reguseremail.value))
{
         showerrorlog("��������Ч��email!");
         return false;
}
if(_password!=_passwords)
{
 showerrorlog("������������벻ͬ");
         return false;
}
if(_password.length>20||_password.length<6)
{
 showerrorlog("�������������6~20���ַ���");
         return false;
}

if(len(_username)>14)
{
 showerrorlog("�ǳ����𳬹�7������");
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

        showsuccesslog("ע��ɹ�!��ȥ���ע������������֤���Ӽ������ע��,��ע��鿴�������е��ʼ�!");

	 }
	  if(test==1062)
	 {
          showsuccesslog("ע��ʧ�ܣ��Ѿ����ڵĵ������䣡");
	 }
	  if(test==1063)
	 {
         showsuccesslog("ע��ʧ�ܣ��Ѿ����ڵ��ǳƣ�");
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
	    showsuccesslog("�һ�����ɹ�����ȥ��������в鿴,ע��鿴������.");
	  <!--window.location.href="/select?op=new";-->
	 }
	  if(test==0)
	 {
    	showerrorlog("δע��������˺�");
	 }
	   if(test==-1)
	 {
	    showerrorlog("δ֪����");
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
	    showsuccesslog("�޸�����ɹ�!һ���������ҳ!");
        setTimeout("window.location.href='/select?op=new'", 1000);
	 }
	  if(test==0)
	 {
	    showerrorlog("�����ԭ���벻��ȷ");
	 }
	   if(test==-1)
	 {
	    showerrorlog("δ֪����");
	 }
}
}

var email= document.getElementById("changeemail").value;
var oldpass= document.getElementById("oldpassword").value;
var newpass= document.getElementById("newpassword").value;

if(newpass.length>20||newpass.length<6)
{
        showerrorlog("�������������6~20���ַ���");
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
 alert("ǩ�����ǳƲ���Ϊ��");
 return ;
 }
if(len(_uname)>14)
{
 alert("�ǳ����𳬹�7������");
return ;
}
if(len(_qianming)>200)
{
 alert("�ǳ����𳬹�100������");
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
	  showsuccesslog("�޸ĳɹ�!һ�����ת����ҳ����������");
	  setTimeout("window.location.href='/select?op=new'", 1000)

	 }

	  if(test==1063)
	 {
	  showerrorlog("�޸�ʧ�ܣ��Ѿ����ڵ��ǳƣ�");
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


