# asp in linux

## 安装nginx
```CSHARP
yum install nginx
```

## 查看nginx是否安装成功
```CSHARP
nginx -t
```

## 查看nginx版本
```CSHARP
nginx -v
```

## 查看nginx安装目录
```CSHARP
rpm -ql nginx
```

## 启动nginx
```CSHARP
// 查看安装目录
rpm -ql nginx 
// 得到nginx目录
cd /usr/sbin
./nginx
```

## 配置开机自启
```CSHARP
vim /etc/rc.d/rc.local
添加
#开机自启
/usr/sbin/nginx
```

## 安装.net core runtime
```CSHARP
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
// 安装包含asp net core的运行时
sudo yum install aspnetcore-runtime-5.0
```

## 安装sqlserver
```Csharp
// 下载微软yum源
wget -O /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
// 安装 sqlserver
yum install -y mssql-server
```

## 如果服务器可用内存小于2g，需要破解内存
```Csharp
// 破解限制
//首先切换到 /opt/mssql/bin 目录下
	cd /opt/mssql/bin/
// 然后保存备份文件
    mv sqlservr sqlservr.old
//使用python修改二进制文件，把里面的2G内存限制改为512M
python 
oldfile = open("sqlservr.old", "rb").read()
newfile = oldfile.replace("\x00\x94\x35\x77", "\x00\x80\x84\x1e")
open("sqlservr", "wb").write(newfile)
exit()
```
## 设置权限
```cmd
chmod 777 /opt/mssql/bin/sqlservr
```


## 选择sqlserver版本，并设置sa账号密码
```Csharp
// 终端内输入
/opt/mssql/bin/mssql-conf setup
// 显示以下内容
Choose an edition of SQL Server:
  1) Evaluation (free, no production use rights, 180-day limit)
  2) Developer (free, no production use rights)
  3) Express (free)
  4) Web (PAID)
  5) Standard (PAID)
  6) Enterprise (PAID)
  7) Enterprise Core (PAID)
  8) I bought a license through a retail sales channel and have a product key to enter.
      
      //输入3（免费版本）
```
## 检测sql server是否安装成功
```Csharp
systemctl status mssql-server
```
 在启动SQL server引擎的时候出现了错误。
关于这个的解决方案就是，我们需要设置一下 /opt/mssql/bin/sqlservr 目录的权限，让SQL server可以访问
cd /opt/mssql/bin/
chmod 777 sqlservr
这次权限分配完成，接着重新输入命令，再次安装
/opt/mssql/bin/mssql-conf setup
安装完成之后，再次检查SQL server的状态
systemctl status mssql-server
sql server在Centos安装centos7.x中安装SQL Server - 吕小不 - 博客园 (cnblogs.com)
## 配置Nginx
```Csharp
// Nginx目录
 /usr/local/nginx
```
## 给程序权限否则无法运行
```Csharp
chmod 777 文件名称
./程序名
```
## linux需要安装libgdiplus否则qrcode（二维码）无法使用
```Csharp
yum install libgdiplus
```
## 监视应用，进程守护
```Csharp
// 创建服务文件
sudo nano /etc/systemd/system/kestrel-NetWebGta.service
// 输入
[Unit]
Description=Example .NET Web API App running on Ubuntu
[Service]
WorkingDirectory=/var/www/你的目录
ExecStart=/usr/bin/dotnet /var/www/你的目录/你的网站.dll
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
User=root
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
[Install]
WantedBy=multi-user.target
// 按ctrl+x退出
// 启动服务
sudo systemctl start kestrel-NetWebGta.service
// 查看服务状态
sudo systemctl status kestrel-NetWebGta.service
# 立即启动一个服务
$ sudo systemctl start kestrel-NetWebGta.service
# 立即停止一个服务
$ sudo systemctl stop kestrel-NetWebGta.service
# 重启一个服务
$ sudo systemctl restart kestrel-NetWebGta.service
```