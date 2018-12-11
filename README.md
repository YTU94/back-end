> 一个node后端项目

## 简介
借用express框架搭建的后端服务，不提供前端页面，实现前后端分离(算不上真正的前后端分离，项目比较小(#^.^#))，主要提供接口服务.

## 功能
- [x] 数据库的连接
- [x] sql语句进行增删该查

## api
+ [课程接口](./api/课程接口.md)
+ [视频接口](./api/视频接口.md)
+ [文章接口](./api/文章接口.md)
+ [评论接口](./api/评论接口.md)

## 结构
.
+ bin
+ config 配置文件
+ controls 控制器
  - index.js 控制器
+ public 静态文件
+ routers 路由
  -index.js 主路由
+ sql 数据库sql语句
  - func.js 封装mysql连接池
  - sql.js sql语句
+ views 视图层（用不到）
+ app.js 启动文件

## 使用
> 请先安装好node,mysql

```
// 安装依赖
npm install
// 本地启动
npm start
```

## 配置
> mysql配置 在config中的db.js填入相关配置信息

## License
[MIT](http://opensource.org/licenses/MIT)
