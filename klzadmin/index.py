#!/usr/bin/env python
#coding=utf8

import web
import MySQLdb
import time

import json
from datetime import date, datetime
import time

#db = web.database(dbn='mysql', host='114.215.45.152', port=3306, user='root', pw='123456', db='work', charset='utf8')
db = web.database(dbn='mysql', host='192.168.73.101', port=3306, user='root', pw='', db='work', charset='utf8')
# db = web.database(dbn='mysql', user='root', pw='', db='work')
render = web.template.render('templates/', cache=False)
htmlrender = web.template.render('static/html', cache=False)
global t_globals
t_globals = {'cookie': web.cookies, 'config': list(db.select('version_info'))}
global htmlrenderlayout
htmlrenderlayout = web.template.render('static/html', base='layout_top_left', globals=t_globals)


syhtmlrenderlayout = web.template.render('static/syfront', globals=t_globals)

static_img_url='http://120.24.189.185/'
produce_page_count = 1

render = web.template.render('static/templates/', cache=False)


urls = (
    '/', 'index',
    '/kind', 'kind',
    '/news', 'news',
    '/recruitlist', 'recruitlist',
    '/recruit', 'recruit',
    '/contact', 'contact',
    '/login', 'login',
    '/outlogin', 'outlogin',
    '/topbottom', 'topbottom',
    '/home', 'home',
    '/about', 'about',
    '/produce', 'produce',
    '/version', 'version',
    '/pcversion', 'pcversion',
    '/ty_order_version', 'ty_order_version',
    '/ty_zhanggui_version', 'ty_zhanggui_version',
    '/ty_caipu_version', 'ty_caipu_version',
    '/createXML', 'createXML',
    '/yujia_pc', 'yujia_pc',
)



class ReceiveHttpClass():
    def __init__(self):
        self.web_input = web.input(list1=[], list2=[], list3=[])
        #self.web_data = web.data()
        username=web.cookies().get('username')
        password=web.cookies().get('password')
        print username
        print password
        if username and password:
            if int(username)==1 and int(password)==1:
                pass
            else:
                web.redirect('/login')
        else:
            web.redirect('/login')
        #print t_globals.get('config')

    def POST(self):
        try:
            return self.http_post()
        except Exception as e:
            print self.__class__.__name__+' : '+str(e)
            return -1

    def GET(self):
        return self.http_get()
        try:
            return self.http_get()
        except Exception as e:
            print self.__class__.__name__+' : '+str(e)
            return -1

    def http_post(self):
        pass

    def http_get(self):
        pass

def JumpUrl(self, result):
        jumpurl = web.ctx.path+'?action=select&opcode='+self.web_input.opcode
        print jumpurl
        if result:
            return htmlrender.sucess(jumpurl)
        else:
            return htmlrender.error(jumpurl)

class BaseControlSelect(ReceiveHttpClass):
    def __init__(self):
        ReceiveHttpClass.__init__(self)

    def http_get(self):
        op = self.web_input.get('action')
        if op:
            if op == 'select':
                self.sourcelist = list(db.select(self.tablename))
                return self.http_get_select()
            elif op == 'edit':
                sql = ''+self.priid +'='+self.web_input.get('primaryid')
                self.soucetable = list(db.select(self.tablename, where=sql))[0]
                return self.http_get_edit()
            elif op == 'del':
                sql = ''+self.priid +'='+self.web_input.get('primaryid')
                result = db.delete(self.tablename, where=sql)
                self.http_get_del()
                return JumpUrl(self,result)
            elif op == 'add':
                return self.http_get_add()
            else:
                return self.http_get_other()
        else:
            return self.http_get_other()
            pass

    def http_post(self):
        op = self.web_input.get('action')
        if op:
            if op == 'edit':
                print 1
                result = self.http_post_edit()
                return JumpUrl(self,result)
            if op == 'add':
                print self.web_input
                result = self.http_post_add()
                return JumpUrl(self,result)
                #return self.http_post_edit()
        else:
            pass

    def http_get_select(self):
        pass

    def http_get_edit(self):
        pass

    def http_get_add(self):
        pass

    def http_get_other(self):
        pass

    def http_get_del(self):
        pass

    def http_post_edit(self):
        pass

    def http_post_add(self):
        pass


#

class version(BaseControlSelect):
    def __init__(self):
        self.tablename= 'version_info'
        self.priid = 'tableid'
        BaseControlSelect.__init__(self)

    def http_get_add(self):
        return  htmlrenderlayout.version.add(self.web_input.opcode)

    def http_get_select(self):
        return  htmlrenderlayout.version.index(self.sourcelist,self.web_input.opcode)

    def http_get_edit(self):
        return  htmlrenderlayout.version.edit(self.soucetable,self.web_input.opcode)

    def http_post_edit(self):
        result = db.update(self.tablename, where='tableid = $id', vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'),
                           vars={'id': self.web_input.get('primaryid')})
        createXMLFuc(self.tablename)
        return result

    def http_post_add(self):
        result = db.insert(self.tablename , vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'))
        createXMLFuc(self.tablename)
        return result

    def http_get_del(self):
        createXMLFuc(self.tablename)

class ty_order_version(BaseControlSelect):
    def __init__(self):
        self.tablename= 'ty_order_version_info'
        self.priid = 'tableid'
        BaseControlSelect.__init__(self)

    def http_get_add(self):
        return  htmlrenderlayout.ty_order_version.add(self.web_input.opcode)

    def http_get_select(self):
        return  htmlrenderlayout.ty_order_version.index(self.sourcelist,self.web_input.opcode)

    def http_get_edit(self):
        return  htmlrenderlayout.ty_order_version.edit(self.soucetable,self.web_input.opcode)

    def http_post_edit(self):
        result = db.update(self.tablename, where='tableid = $id', vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'),
                           vars={'id': self.web_input.get('primaryid')})
        createXMLFuc(self.tablename)
        return result

    def http_post_add(self):
        result = db.insert(self.tablename , vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'))
        createXMLFuc(self.tablename)
        return result

    def http_get_del(self):
        createXMLFuc(self.tablename)

class ty_zhanggui_version(BaseControlSelect):
    def __init__(self):
        self.tablename= 'ty_zhanggui_version_info'
        self.priid = 'tableid'
        BaseControlSelect.__init__(self)

    def http_get_add(self):
        return  htmlrenderlayout.ty_zhanggui_version.add(self.web_input.opcode)

    def http_get_select(self):
        return  htmlrenderlayout.ty_zhanggui_version.index(self.sourcelist,self.web_input.opcode)

    def http_get_edit(self):
        return  htmlrenderlayout.ty_zhanggui_version.edit(self.soucetable,self.web_input.opcode)

    def http_post_edit(self):
        result = db.update(self.tablename, where='tableid = $id', vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'),
                           vars={'id': self.web_input.get('primaryid')})
        createXMLFuc(self.tablename)
        return result

    def http_post_add(self):
        result = db.insert(self.tablename , vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'))
        createXMLFuc(self.tablename)
        return result

    def http_get_del(self):
        createXMLFuc(self.tablename)

class ty_caipu_version(BaseControlSelect):
    def __init__(self):
        self.tablename= 'ty_caipu_version_info'
        self.priid = 'tableid'
        BaseControlSelect.__init__(self)

    def http_get_add(self):
        return  htmlrenderlayout.ty_caipu_version.add(self.web_input.opcode)

    def http_get_select(self):
        return  htmlrenderlayout.ty_caipu_version.index(self.sourcelist,self.web_input.opcode)

    def http_get_edit(self):
        return  htmlrenderlayout.ty_caipu_version.edit(self.soucetable,self.web_input.opcode)

    def http_post_edit(self):
        result = db.update(self.tablename, where='tableid = $id', vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'),
                           vars={'id': self.web_input.get('primaryid')})
        createXMLFuc(self.tablename)
        return result

    def http_post_add(self):
        result = db.insert(self.tablename , vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=self.web_input.get('vurl'),
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'))
        createXMLFuc(self.tablename)
        return result

    def http_get_del(self):
        createXMLFuc(self.tablename)

class pcversion(BaseControlSelect):
    def __init__(self):
        self.tablename= 'pcversion_info'
        self.priid = 'tableid'
        BaseControlSelect.__init__(self)

    def http_get_add(self):
        return  htmlrenderlayout.pcversion.add(self.web_input.opcode)

    def http_get_select(self):
        for temp in self.sourcelist:
            temp.templist = []
            jstr = temp.vurl
            if is_json(jstr):
                j = json.loads(jstr)
                temp.templist = j['vurl']
        return  htmlrenderlayout.pcversion.index(self.sourcelist,self.web_input.opcode)

    def http_get_edit(self):
        self.soucetable.templist = []
        jstr = self.soucetable.vurl
        if is_json(jstr):
            j = json.loads(jstr)
            self.soucetable.templist = j['vurl']
        return  htmlrenderlayout.pcversion.edit(self.soucetable, self.web_input.opcode)

    def http_post_edit(self):
        list1 = list(self.web_input.get('list1'))
        list2 = list(self.web_input.get('list2'))
        list3 = list(self.web_input.get('list3'))
        vurl = []
        for temp1 in range(list1.__len__()):
            if list1[temp1] == '':
                continue
            cobj = commonObject(list1[temp1], list2[temp1], list3[temp1])
            vurl.append(cobj.__dict__)

        vurldic = {}
        vurldic['vurl'] = vurl
        vurljson = json.dumps(vurldic)
        result = db.update(self.tablename, where='tableid = $id', vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=vurljson,
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'),
                           vars={'id': self.web_input.get('primaryid')})
        return result

    def http_post_add(self):
        list1 = list(self.web_input.get('list1'))
        list2 = list(self.web_input.get('list2'))
        list3 = list(self.web_input.get('list3'))
        vurl = []
        for temp1 in range(list1.__len__()):
            if list1[temp1] == '':
                continue
            cobj = commonObject(list1[temp1], list2[temp1], list3[temp1])
            vurl.append(cobj.__dict__)

        vurldic = {}
        vurldic['vurl'] = vurl
        vurljson = json.dumps(vurldic)
        result = db.insert(self.tablename , vname=self.web_input.get('vname'), vtitle=self.web_input.get('vtitle'),
                           vdesc=self.web_input.get('vdesc'), vurl=vurljson,
                           vtype=self.web_input.get('vtype'), vtime=self.web_input.get('vtime'), isshow=self.web_input.get('isshow'))
        return result

class createXML:
     def POST(self):
         code = web.input()
         print code
         test=code.content
         n=db.insert('test',testname=test)
     def GET(self):
         n = db.query("SELECT * from version_info where isshow=0")
         n = list(n)
         s = render.create_config(n)
         s = str(s)
         save('D:\\workspace\\wamp\\www\\https_publish\\common\\config\\config.xml', s)
         return render.create_config(n)


def save(filename, contents):
    fh = open(filename, 'w')
    fh.write(contents)
    fh.close()

def createXMLFuc(tablename):
    n = db.query("SELECT * from "+tablename+" where isshow=0 order by tableid desc")
    n = list(n)
    for element in n:
        element['vdesc'] = "<br/>".join(element['vdesc'].split("\n"))
        #element['vdesc'] = "<br/>".join(element['vdesc'].split("\r"))
    s = render.create_config(n)
    s = str(s)
    sname = ''
    if tablename == 'ty_order_version_info':
        sname = 'ty_order_config.xml'
    if tablename == 'ty_zhanggui_version_info':
        sname = 'ty_zhanggui_config.xml'
    if tablename == 'version_info':
        sname = 'yj_order_config.xml'
    if tablename == 'ty_caipu_version_info':
        sname = 'ty_caipu_config.xml'
    #save('C:\\移动App\\common\\config\\'+sname, s)
    save('../common/config/'+sname, s)


class outlogin:
    def GET(self):
        return  htmlrender.outlogin()

class index(ReceiveHttpClass):
    def __init__(self):
        ReceiveHttpClass.__init__(self)

    def http_get(self):

        return htmlrenderlayout.index()
        #return "Hello, world!"


class login():

    def GET(self):
        return htmlrender.login()

    def POST(self):
        self.web_input = web.input()
        u=self.web_input['username']
        p=self.web_input['password']
        print self.web_input
        web.setcookie('username',u,6000)
        web.setcookie('password',p,6000)
        web.redirect('/')


#syfront

class yujia_pc:
    def GET(self):
        s = db.query("SELECT * from pcversion_info")
        slist = list(s)
        for element in slist:
            element['newvdesc'] = "<br/>".join(element['vdesc'].split("\n"))
            #element['vdesc'] = "<br/>".join(element['vdesc'].split("\r"))
        for temp in slist:
            temp.templist = []
            jstr = temp.vurl
            if is_json(jstr):
                j = json.loads(jstr)
                temp.templist = j['vurl']
                print j

        return syhtmlrenderlayout.yjpc(slist)

def is_json(myjson):
    try:
        json.loads(myjson)
    except ValueError:
        return False
    return True

#obj

class commonObject:
    def __init__(self, str1, str2, str3):
        self.str1 = str1
        self.str2 = str2
        self.str3 = str3

class CJsonEncoder(json.JSONEncoder):
    """ dic转json 的特殊处理，主要是针对字典中datetime 的处理 """
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        elif isinstance(obj, date):
            return obj.strftime('%Y-%m-%d')
        else:
            return json.JSONEncoder.default(self, obj)

if __name__ == "__main__":
    app = web.application(urls, globals())
    application = app.wsgifunc()
    app.run()

