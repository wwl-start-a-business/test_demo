### ssh 链接远程

**1、创建ssh-key**

>  ssh-keygen -t rsa -f ~/.ssh/id_rsa.别名 -C “邮箱地址“

>  示例
>  ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C “xxx@xxx.com“

**2、将ssh-key添加到ssh-agent**
  
  查看列表 
  ssh-add -l

  //全部添加
  ssh-add  

  //指定添加（可以切换到.ssh下添加，也可以直接指定路径添加）
  ➜  .ssh ssh-add id_rsa_test_github   //id_rsa_test_github  是指定的ssh 文件

  更多命令：

  ssh-add -l 查看列表

  ssh-add -D 删除所有管理的密钥

  ssh-add -d 删除指定的

  ssh-add -l 查看现在增加进去的指纹信息

  ssh-add -L 查看现在增加进去的私钥

  如果重启之后，会发现需要重新load一下ssh-agent

  ssh-add -K 将指纹加到钥匙串里面去

  ssh-add -A 可以把钥匙串里面的私钥密码，load进ssh-agent

  手动指定rsa 链接阿里云  （阿里云配置密钥后需要重新启动阿里云服务器）
  ssh -i ./id_rsa.wwlaliyun root@1.1.1.1

### 链接远程 服务器

>  ssh  userName@111.111.111.111    // ssh   用户名@ip
>  sudo su root  切换root用户权限
>  exit 退出当前用户 

### linux服务器 安装node
>  mkdir test创建文件夹

>  yum install node 安装6.*版本node 
>  使用 npm install nvm 安装 nvm (node 版本控制)
>  安装完成后 重启登录服务器

>  nvm 查看是否安装成功
>  nvm ls-remote 查看可安装的node 版本
>  nvm install v指定版本

### liunx服务器 安装pm2

    npm install -g pm2
    pm2 list//检测pm2 命令
    pm2 restart all 重启所有进程

### liunux服务器 安装git

    https://blog.csdn.net/jsboy123/article/details/80617231

    yum install git

    输入 y  点击回车

    检查版本 
    git --version
    是1.8.3.1版本，这个版本还是蛮旧的。yum安装就是这个缺点，版本你不好控制
    
    如果想要使用最新版的git，那还是得自己下载源码安装

    进入git在github上的发布版本页面https://github.com/git/git/releases。在这个页面我们可以找到所有git已发布的版本。这里我们选择最新版的tar.gz包。

    选择好包后 开始下载
    wget https://codeload.github.com/git/git/tar.gz/v2.13.0-rc1

    重新命名 （如果是 tar.gz 则不需要重新命名）
    mv v2.13.0-rc1 v2.13.0-rc1.tar.gz

    解压文件
    tar -zxvf v2.13.0-rc1.tar.gz

    进入文件夹git-2.13.0-rc1  安装所需要的依赖
    yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker
    

    安装完成依赖后， 需要删除安装的 老版本git
    yum remove git


    编译git源码 中途可能会花费几分钟的时间。
    make prefix=/usr/local/git all

    编译完成后 安装git至/usr/local/git路径
    make prefix=/usr/local/git install

    安装完成后 打开环境变量配置文件
    vim /etc/profile

    在底部加上git相关配置
    PATH=$PATH:/usr/local/git/bin
    export PATH                         


    刷新环境变量
    source /etc/profile

    输入git --version检查git是否安全完成，以及查看其版本号。

    将feature_nuxt 分支合并到当前分支中
    git merge --no-ff feature_nuxt

    将本地新建分支推送到远程
    git push --set-upstream origin feature_library

    删除本地分支
    git branch -D bugfix_1034923 

    删除远程分支
    git push origin --delete Chapater6

### linnx服务器 安装nginx服务

    https://www.cnblogs.com/AlanLee/p/9044644.html

    安装编译工具及库文件
    yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel

    。。。


    server 配置

    server {
        listen      80;
        server_name www.xxxxxxxx.com;
        location / {
            proxy_set_header   X-Real-IP  $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host $http_host;
            proxy_set_header   X-NginX-Proxy  true;
            proxy_set_header   Connection "";
            proxy_http_version 1.1;
            proxy_pass http://111.111.1111:3338;
        }
    }