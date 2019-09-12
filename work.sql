/*
 Navicat MySQL Data Transfer

 Source Server         : sn_my_73
 Source Server Version : 50617
 Source Host           : 192.168.73.101
 Source Database       : work

 Target Server Version : 50617
 File Encoding         : utf-8

 Date: 08/02/2017 17:04:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `pcversion_info`
-- ----------------------------
DROP TABLE IF EXISTS `pcversion_info`;
CREATE TABLE `pcversion_info` (
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `vname` varchar(255) NOT NULL DEFAULT '',
  `vtitle` varchar(255) NOT NULL,
  `vdesc` varchar(2000) NOT NULL,
  `vurl` varchar(255) NOT NULL,
  `vtime` datetime NOT NULL,
  `vtype` int(11) NOT NULL,
  `isshow` int(11) DEFAULT '0',
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `pcversion_info`
-- ----------------------------
BEGIN;
INSERT INTO `pcversion_info` VALUES ('1', '1.0', '1.0发布了', '娱加1.0\r\n\r\n适用酒吧服务连锁', '{\"vurl\": [{\"str3\": \"1234\", \"str2\": \"www.baidu.com\", \"str1\": \"20170519.zip\"}]}', '2017-03-20 14:29:02', '3', '0'), ('5', '2.0', '2.0发布', '2.0\r\n\r\n\r\nui风格改变', '{\"vurl\": [{\"str3\": \"123\", \"str2\": \"www.baidu.com\", \"str1\": \"20170520.zip\"}, {\"str3\": \"123\", \"str2\": \"www.baidu.com\", \"str1\": \"20170520.exe\"}, {\"str3\": \"123\", \"str2\": \"www.baidu.com\", \"str1\": \"20170520.rar\"}]}', '2017-06-01 09:20:33', '3', '0');
COMMIT;

-- ----------------------------
--  Table structure for `ty_caipu_version_info`
-- ----------------------------
DROP TABLE IF EXISTS `ty_caipu_version_info`;
CREATE TABLE `ty_caipu_version_info` (
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `vname` varchar(255) NOT NULL DEFAULT '',
  `vtitle` varchar(255) NOT NULL,
  `vdesc` varchar(2000) NOT NULL,
  `vurl` varchar(255) NOT NULL,
  `vtime` datetime NOT NULL,
  `vtype` int(11) NOT NULL,
  `isshow` int(11) DEFAULT '0',
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ty_caipu_version_info`
-- ----------------------------
BEGIN;
INSERT INTO `ty_caipu_version_info` VALUES ('1', '1.0.0', 'iOS通娱电子菜谱1.0.0发布(搭配通娱2.9使用)', '通娱电子菜谱系统是针对量贩KTV、酒吧、会所等经营场所设计的智能移动客户端软件，场所各级人员通过iPad，即可便捷实现点单、例送、会员登记等功能，经营管理者亦能高屋建瓴，便捷高效地进行各种管理活动，助力场所实现直观、高效的管理，简化业务管理流程，大幅提升运营管理效率。\r\n\r\n【基本功能】\r\n1、支持移动点单\r\n2、支持包厢区域与搜索过滤\r\n3、支持普客登记\r\n4、支持会员信息登记\r\n5、支持商品图片点单\r\n【亮点功能】\r\n1、支持例送\r\n2、支持特殊口味选择\r\n3、会员信息登记支持拍照\r\n【注意事项】\r\n1、该客户端软件必须配合视易通娱KTV娱乐管理系统使用\r\n2、需要iOS 6.0或更高版本的iPad设备上使用', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_caipu/ty_caipu.plist', '2017-03-20 14:29:01', '1', '0');
COMMIT;

-- ----------------------------
--  Table structure for `ty_order_version_info`
-- ----------------------------
DROP TABLE IF EXISTS `ty_order_version_info`;
CREATE TABLE `ty_order_version_info` (
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `vname` varchar(255) NOT NULL DEFAULT '',
  `vtitle` varchar(255) NOT NULL,
  `vdesc` varchar(2000) NOT NULL,
  `vurl` varchar(255) NOT NULL,
  `vtime` datetime NOT NULL,
  `vtype` int(11) NOT NULL,
  `isshow` int(11) DEFAULT '0',
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ty_order_version_info`
-- ----------------------------
BEGIN;
INSERT INTO `ty_order_version_info` VALUES ('1', '2.0.0', 'iOS通娱点单2.0.0发布(搭配通娱2.8使用)', '1.支持微信，支付宝支付\r\n2.全新的UI风格\r\n3.服务器地址支持输入域名\r\n4.优化细节功能和交互', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_order/2.0.0/ty_order.plist', '2017-03-20 14:29:02', '1', '0'), ('10', '2.0.0', 'Android通娱点单2.0.0发布(搭配通娱2.8使用)', '1.支持微信，支付宝支付\r\n2.全新的UI风格\r\n3.服务器地址支持输入域名\r\n4.优化细节功能和交互', 'https://yj.evideocloud.com.cn/app/distribution/app/android/ty_order/2.0.0/newKTVOrder.apk', '2017-03-20 14:29:02', '2', '0'), ('11', '2.0.1', 'iOS通娱点单2.0.1发布(搭配通娱2.9使用)', '1.修复注册参数错误bug', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_order/2.0.1/ty_order.plist', '2017-05-08 14:29:02', '1', '0'), ('12', '2.0.1', 'Android通娱点单2.0.1发布(搭配通娱2.9使用)', '1.修复注册参数错误bug', 'https://yj.evideocloud.com.cn/app/distribution/app/android/ty_order/2.0.1/newKTVOrder.apk', '2017-05-08 14:29:02', '2', '0'), ('13', '2.0.2', 'iOS通娱点单2.0.2发布(搭配通娱2.9使用)', '1、包厢查询基本信息增加备注，商品信息增加点单时间\r\n2、可选例送套餐中，可选子物品的选择，可选子商品前加个复选框(默认不选)，数量默认为可点数量，未打勾表示该子商品不点。', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_order/2.0.2/ty_order.plist', '2017-07-05 14:03:58', '1', '0'), ('14', '2.0.2', 'Android通娱点单2.0.2发布(搭配通娱2.9使用)', '1、包厢查询基本信息增加备注，商品信息增加点单时间 \r\n2、可选例送套餐中，可选子物品的选择，可选子商品前加个复选框(默认不选)，数量默认为可点数量，未打勾表示该子商品不点。', 'https://yj.evideocloud.com.cn/app/distribution/app/android/ty_order/2.0.2/newKTVOrder.apk', '2017-07-05 14:13:36', '2', '0');
COMMIT;

-- ----------------------------
--  Table structure for `ty_zhanggui_version_info`
-- ----------------------------
DROP TABLE IF EXISTS `ty_zhanggui_version_info`;
CREATE TABLE `ty_zhanggui_version_info` (
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `vname` varchar(255) NOT NULL DEFAULT '',
  `vtitle` varchar(255) NOT NULL,
  `vdesc` varchar(2000) NOT NULL,
  `vurl` varchar(255) NOT NULL,
  `vtime` datetime NOT NULL,
  `vtype` int(11) NOT NULL,
  `isshow` int(11) DEFAULT '0',
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ty_zhanggui_version_info`
-- ----------------------------
BEGIN;
INSERT INTO `ty_zhanggui_version_info` VALUES ('1', '2.0.0', 'iOS通娱掌柜2.0.0发布(搭配通娱2.8使用)', '1.服务器地址支持输入域名\r\n2.优化调整部分细节和修复bug\r\n', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_zhanggui/2.0.0/ty_zhanggui.plist', '2017-03-20 14:29:02', '1', '0'), ('2', '2.0.0', 'Android通娱掌柜2.0.0发布(搭配通娱2.8使用)', '1.服务器地址支持输入域名\r\n2.优化调整部分细节和修复bug', 'https://yj.evideocloud.com.cn/app/distribution/app/android/ty_zhanggui/2.0.0/zhangGui.apk', '2017-03-20 14:35:57', '2', '0'), ('10', '2.0.1', 'iOS通娱掌柜2.0.1发布(搭配通娱2.9使用)', '1.修复注册参数错误bug', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/ty_zhanggui/2.0.1/ty_zhanggui.plist', '2017-05-08 14:29:02', '1', '0'), ('11', '2.0.1', 'Android通娱掌柜2.0.1发布(搭配通娱2.9使用)', ' 1.修复注册参数错误bug', 'https://yj.evideocloud.com.cn/app/distribution/app/android/ty_zhanggui/2.0.1/zhangGui.apk', '2017-05-08 14:29:02', '2', '0');
COMMIT;

-- ----------------------------
--  Table structure for `version_info`
-- ----------------------------
DROP TABLE IF EXISTS `version_info`;
CREATE TABLE `version_info` (
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `vname` varchar(255) NOT NULL DEFAULT '',
  `vtitle` varchar(255) NOT NULL,
  `vdesc` varchar(2000) NOT NULL,
  `vurl` varchar(255) NOT NULL,
  `vtime` datetime NOT NULL,
  `vtype` int(11) NOT NULL,
  `isshow` int(11) DEFAULT '0',
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `version_info`
-- ----------------------------
BEGIN;
INSERT INTO `version_info` VALUES ('1', '1.0', 'iOS娱加点单1.0发布', '1、新增卡台扫码点单\r\n2、UI风格改造（改成酒吧风格）\r\n3、在个人信息下新增（待办和未读）功能', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/yj_order/1.0.0/yj_order.plist', '2017-04-20 14:29:02', '1', '0'), ('3', '1.0', 'Android娱加点单1.0发布', '1、新增卡台扫码点单\r\n2、UI风格改造（改成酒吧风格）\r\n3、在个人信息下新增（待办和未读）功能', 'https://yj.evideocloud.com.cn/app/distribution/app/android/yj_order/1.0.0/barKTVOrder.apk', '2017-04-20 14:29:02', '2', '0'), ('4', '1.7.1', 'iOS娱加点单1.7.1发布', '1、支持Ipad点单', 'itms-services://?action=download-manifest&url=https://yj.evideocloud.com.cn/app/distribution/app/ios/yj_order/1.7.1/yj_order.plist', '2017-08-02 16:39:26', '1', '0');
COMMIT;

-- ----------------------------
--  Procedure structure for `dokindtablecontrol`
-- ----------------------------
DROP PROCEDURE IF EXISTS `dokindtablecontrol`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `dokindtablecontrol`(showdesc VARCHAR(500))
BEGIN 
insert into kindtablecontrol(name,dotime) values(showdesc,now());

END
 ;;
delimiter ;

-- ----------------------------
--  Procedure structure for `dotablecontrol`
-- ----------------------------
DROP PROCEDURE IF EXISTS `dotablecontrol`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `dotablecontrol`(showdesc VARCHAR(500))
BEGIN 
insert into tablecontrol(name,dotime) values(showdesc,now());

END
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
