// JavaScript Document



function jumppage(e){
   var opstr;
   switch (opcode)
{
case 1:
  opstr="new"
  break;
case 2:
  opstr="addtime"
  break;
case 3:
  opstr="replycount"
  break;
case 4:
  opstr="upcount"
  break;
case 5:
  opstr="random"
  break;     
}
   window.location.href="/select?op="+opstr+"&kind="+kindcode+"&page="+e;
}

function nextpage(){
   var opstr;
   switch (opcode)
{
case 1:
  opstr="new"
  break;
case 2:
  opstr="addtime"
  break;
case 3:
  opstr="replycount"
  break;
case 4:
  opstr="upcount"
  break;
case 5:
  opstr="random"
  break;    
}
var pagess=pagecode+1;
   window.location.href="/select?op="+opstr+"&kind="+kindcode+"&page="+pagess;
}


function uppage(){
   var opstr;
   switch (opcode)
{
case 1:
  opstr="new"
  break;
case 2:
  opstr="addtime"
  break;
case 3:
  opstr="replycount"
  break;
case 4:
  opstr="upcount"
  break;
case 5:
  opstr="random"
  break;
}
var pagess=pagecode-1;
if(pagess<1)
 return;
   window.location.href="/select?op="+opstr+"&kind="+kindcode+"&page="+pagess;
}

switch (opcode)
{
case 1:
  document.getElementById('meutab1').className="active";
  break;
case 2:
  document.getElementById('meutab2').className="active";
  break;
case 3:
  document.getElementById('meutab3').className="active";
  break;
case 4:
  document.getElementById('meutab4').className="active";
  break;
case 5:
  document.getElementById('meutab5').className="active";
  break;
case 9:
  document.getElementById('meutab9').className="active";
  break;
default:
   document.getElementById('meutab'+opcode).className="active";
   break;
}

function getNowFormatDate() {

    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 1 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (second >= 1 && second <= 9) {
        second = "0" + second;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hours + seperator2 + minutes
            + seperator2 + second;
    return currentdate;
}
