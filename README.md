## 获取bilibili弹幕网站视频的封面

### 技术栈
* nodejs(http模块)
* nginx
* http-server

### 运行方式
* 本地安装nginx,配置代理
	```
	listen       9000;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location /{
        proxy_pass http://localhost:9001;
    }

    location /pagelist{
        proxy_pass http://localhost:8000;
    }

    location /view{
        proxy_pass http://localhost:8001;
    }
	```

* http-server实现静态web页面服务
	```
	http-server -p 9001
	```
* nodejs运行服务端
	```
	node server.js
	```

### 使用
* 只需要输入视频的url中的av号，就可以获取
* 效果展示
	![首页](http://ww1.sinaimg.cn/large/006XqmrNly1g7of1cjyg7j31780ggtax.jpg)
	![封面获取](http://ww1.sinaimg.cn/large/006XqmrNly1g7of26794sj327q1be4qp.jpg)
* 注：封面url不可直接点击，否则会403，暂时只能粘贴复制在另外的tab页面


