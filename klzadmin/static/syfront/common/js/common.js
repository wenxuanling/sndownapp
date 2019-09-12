

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



 function loadXML(xmlFile){
        var xmlDoc=null;
        //判断浏览器的类型
        //支持IE浏览器
        if(!window.DOMParser && window.ActiveXObject){
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
            for(var i=0;i<xmlDomVersions.length;i++){
                try{
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    break;
                }catch(e){
                }
            }
        }
        //支持Mozilla浏览器
        else if(document.implementation && document.implementation.createDocument){
            try{
                /* document.implementation.createDocument('','',null); 方法的三个参数说明
                 * 第一个参数是包含文档所使用的命名空间URI的字符串；
                 * 第二个参数是包含文档根元素名称的字符串；
                 * 第三个参数是要创建的文档类型（也称为doctype）
                 */
                xmlDoc = document.implementation.createDocument('','',null);
            }catch(e){
            }
        }
        else{
            return null;
        }

        if(xmlDoc!=null){
            xmlDoc.async = false;
            xmlDoc.load(xmlFile);
        }
        return xmlDoc;
    }


 function LoadXMLFile(xmlFile) {
                var xmlDom = null;
                if (window.ActiveXObject) {
                    xmlDom = new ActiveXObject("Microsoft.XMLDOM");
                    //xmlDom.loadXML(xmlFile);//如果用的是XML字符串
                    xmlDom.load(xmlFile); //如果用的是xml文件。
                    alert(1);
                } else if (document.implementation && document.implementation.createDocument) {
                    var xmlhttp = new window.XMLHttpRequest();
                    xmlhttp.open("GET", xmlFile, false);
                    xmlhttp.send(null);
                    xmlDom = xmlhttp.responseXML;//一定要有根节点(否则google浏览器读取不了)
                } else {
                    xmlDom = null;
                    alert(1111);
                }
                return xmlDom;
            }



 function getSubject()
{
    var xmlDoc;

    if(window.ActiveXObject)
    {
     //获得操作的xml文件的对象
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
        xmlDoc.async = false;
        xmlDoc.load("tree.xml");
        if(xmlDoc == null)
        {
          alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
          window.location.href='/Index.aspx';
    return;
        }
    }
 //解析xml文件，判断是否出错
    if(xmlDoc.parseError.errorCode != 0)
    {
       alert(xmlDoc.parseError.reason);
       return;
    }
 //获得根接点
    var nodes = xmlDoc.documentElement.childNodes;
 //得到根接点下共有子接点个数，并循环
    for(var i=0; i<nodes.length; i++)
    {
   //如果接点名为 tree
      if(nodes(i).nodeName == "tree")
      {
        readTree(nodes(i));
      }
   //如果接点名为 node
      else if(nodes(i).nodeName == "node")
      {
        readNode(nodes(i));
      }
    }
    //删除对象
    delete(xmlDoc);
    //显示HTML
    window.show.innerHTML = HTML;
    return;
}
//读Tree节点
function readTree(cI)
{
    var nodes = cI.childNodes;
    var menuHTML = space;
    menuHTML += blank;
 //得到超级链接
    menuHTML += "<a href='";
 //如果该节点的连接属性不为空，则连接
    if(cI.selectNodes("link")(0).text != "")
    {
       menuHTML += cI.selectNodes("link")(0).text;
    }
 //否则为空链接
    else
    {
       menuHTML += "#";
    }
 //目标
    if(cI.selectNodes("target")(0).text != "")
 {
       menuHTML += " target='"+cI.selectNodes("target")(0).text;
       menuHTML += "'";
    }
 //点击菜单事件，调用divshow(vid)函数
    menuHTML += " onclick=javascript:divshow('"+cI.getAttribute("id")+"');";
 //得到节点标题
    menuHTML += " title='";
    menuHTML += cI.selectNodes("title")(0).text;
 //结束
    menuHTML += "'>";
    //得到节点的正文
    menuHTML += cI.selectNodes("text")(0).text;
    menuHTML += "</a><br>\n";
 //将menuHTML设置添加到HTML字符串
    HTML += menuHTML;
 //得到该节点的属性值<span
    HTML += "<div id='"+cI.getAttribute("id")+"' style='display:none'>\n";
    for(var i=0; i<nodes.length; i++)
    {
       var tempImg = "";
       tempImg += blank;
       if(nodes(i).nodeName == "tree")
       {
         space += tempImg;
         readTree(nodes(i));
         space = "";
       }
       else if(nodes(i).nodeName == "node")
       {
         space += tempImg;
         readNode(nodes(i));
       }
    }
    HTML += "</div>\n";
    return;
}
//读Node节点
function readNode(cI)
{
   var nodeHTML = space;
   nodeHTML += blank;
   //设置超级链接
   nodeHTML += "<a href='";
   //得到连接地址
   nodeHTML += cI.selectNodes("link")(0).text;
   //目标
   if(cI.selectNodes("target")(0).text != "")
      nodeHTML += "' target='"+cI.selectNodes("target")(0).text;
   //得到节点标题
   nodeHTML += "' title='";
   nodeHTML += cI.selectNodes("title")(0).text;
   //结束
   nodeHTML += "'>";
   //得到节点的正文
   nodeHTML += cI.selectNodes("text")(0).text;
   nodeHTML += "</a><br>\n";
   HTML += nodeHTML;
   //HTML += "<div id='"+cI.getAttribute("id")+"'>";
   space = "";
   return;
}
//操作对象的显示还是隐藏效果
function divshow(vid)
{
  if(document.all[vid].style.display == "none")
  {
    document.all[vid].style.display = "block";
  }
  else
  {
    document.all[vid].style.display = "none";
  }
  return;
}