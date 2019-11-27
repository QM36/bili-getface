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
* 补充一些以上步骤可能会用到的相关命令
    * 修改配置文件
    ```
    cd /usr/local/etc/nginx
    vim nginx.conf
    ```
    * 查看看端口占用情况
    ```
    sudo lsof -i :9000（端口号）
    ```
    * 重启`nginx`
    ```
    nginx -s reload
    ```
    * 关闭`nginx`
    ```
    nginx -s stop
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
* 浏览器输入`localhost:9000`访问页面（9001会跨域）
* 只需要输入视频的url中的av号，就可以获取
* 效果展示
	![首页](http://ww1.sinaimg.cn/large/006XqmrNly1g7of1cjyg7j31780ggtax.jpg)
	![封面获取](http://ww1.sinaimg.cn/large/006XqmrNly1g7of26794sj327q1be4qp.jpg)
* 注：封面url不可直接点击，否则会403，暂时只能粘贴复制在另外的tab页面
* 补充一些更方便的使用方式：租一台云服务器，把该项目按照以上步骤部署（端口可以自定），这样访问`ip+端口`就可以方便的打开页面，如果有时候页面不能正常运行，只需要登上服务器重新完成以上步骤即可

### 总结
* 跨域的代理解决
* nginx配置
* nodejs基础

