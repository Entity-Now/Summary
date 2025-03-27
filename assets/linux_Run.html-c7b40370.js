import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as t,d as n,e,b as i,a as s}from"./app-4e604438.js";const c={},o=s(`<h1 id="发布到linux" tabindex="-1"><a class="header-anchor" href="#发布到linux" aria-hidden="true">#</a> 发布到Linux</h1><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>yum install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看nginx是否安装成功" tabindex="-1"><a class="header-anchor" href="#查看nginx是否安装成功" aria-hidden="true">#</a> 查看nginx是否安装成功</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>nginx -t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看nginx版本" tabindex="-1"><a class="header-anchor" href="#查看nginx版本" aria-hidden="true">#</a> 查看nginx版本</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>nginx -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看nginx安装目录" tabindex="-1"><a class="header-anchor" href="#查看nginx安装目录" aria-hidden="true">#</a> 查看nginx安装目录</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>rpm -ql nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>// 查看安装目录
rpm -ql nginx 
// 得到nginx目录
cd /usr/sbin
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置开机自启" tabindex="-1"><a class="header-anchor" href="#配置开机自启" aria-hidden="true">#</a> 配置开机自启</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>vim /etc/rc.d/rc.local
添加
#开机自启
/usr/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),u={id:"安装-net-core-runtime",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#安装-net-core-runtime","aria-hidden":"true"},"#",-1),p={href:"http://xn--49sq66h.net",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
// 安装包含asp net core的运行时
sudo yum install aspnetcore-runtime-5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or ubuntu</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> aspnetcore-runtime-6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装sqlserver" tabindex="-1"><a class="header-anchor" href="#安装sqlserver" aria-hidden="true">#</a> 安装sqlserver</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>// 下载微软yum源
wget -O /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
// 安装 sqlserver
yum install -y mssql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or ubuntu</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/microsoft-prod.gpg
<span class="token comment"># 如果报错就用这个</span>
<span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/trusted.gpg.d/microsoft.asc
<span class="token comment"># 注册SQL Server Ubuntu存储库</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://packages.microsoft.com/config/ubuntu/22.04/mssql-server-2022.list <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/mssql-server-2022.list

<span class="token comment"># 安装SqlServer</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> mssql-server

<span class="token comment"># 启动SQL Server</span>
<span class="token function">sudo</span> /opt/mssql/bin/mssql-conf setup

<span class="token comment"># 检查是否在运行</span>
systemctl status mssql-server --no-pager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如果服务器可用内存小于2g-需要破解内存" tabindex="-1"><a class="header-anchor" href="#如果服务器可用内存小于2g-需要破解内存" aria-hidden="true">#</a> 如果服务器可用内存小于2g，需要破解内存</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>// 破解限制
//首先切换到 /opt/mssql/bin 目录下
	cd /opt/mssql/bin/
// 然后保存备份文件
    mv sqlservr sqlservr.old
//使用python修改二进制文件，把里面的2G内存限制改为512M
python 
oldfile = open(&quot;sqlservr.old&quot;, &quot;rb&quot;).read()
newfile = oldfile.replace(&quot;\\x00\\x94\\x35\\x77&quot;, &quot;\\x00\\x80\\x84\\x1e&quot;)
open(&quot;sqlservr&quot;, &quot;wb&quot;).write(newfile)
exit()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ubuntu</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/mssql/bin

<span class="token function">sudo</span> <span class="token function">mv</span> sqlservr sqlservr.old


python3
with open<span class="token punctuation">(</span><span class="token string">&quot;sqlservr.old&quot;</span>, <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span> as f:
    oldfile <span class="token operator">=</span> f.read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    newfile <span class="token operator">=</span> oldfile.replace<span class="token punctuation">(</span>b<span class="token string">&quot;<span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x94">\\x94</span><span class="token entity" title="\\x35">\\x35</span><span class="token entity" title="\\x77">\\x77</span>&quot;</span>, b<span class="token string">&quot;<span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x80">\\x80</span><span class="token entity" title="\\x84">\\x84</span><span class="token entity" title="\\x1e">\\x1e</span>&quot;</span><span class="token punctuation">)</span>

with open<span class="token punctuation">(</span><span class="token string">&quot;sqlservr&quot;</span>, <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span> as f:
    f.write<span class="token punctuation">(</span>newfile<span class="token punctuation">)</span>

quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置权限" tabindex="-1"><a class="header-anchor" href="#设置权限" aria-hidden="true">#</a> 设置权限</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>chmod 777 /opt/mssql/bin/sqlservr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="选择sqlserver版本-并设置sa账号密码" tabindex="-1"><a class="header-anchor" href="#选择sqlserver版本-并设置sa账号密码" aria-hidden="true">#</a> 选择sqlserver版本，并设置sa账号密码</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>// 终端内输入
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测sql-server是否安装成功" tabindex="-1"><a class="header-anchor" href="#检测sql-server是否安装成功" aria-hidden="true">#</a> 检测sql server是否安装成功</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>systemctl status mssql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),b={href:"http://cnblogs.com",target:"_blank",rel:"noopener noreferrer"},h=s(`<h2 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx" aria-hidden="true">#</a> 配置Nginx</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>// Nginx目录
 /usr/local/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给程序权限否则无法运行" tabindex="-1"><a class="header-anchor" href="#给程序权限否则无法运行" aria-hidden="true">#</a> 给程序权限否则无法运行</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>chmod 777 文件名称
./程序名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux需要安装libgdiplus否则qrcode-二维码-无法使用" tabindex="-1"><a class="header-anchor" href="#linux需要安装libgdiplus否则qrcode-二维码-无法使用" aria-hidden="true">#</a> linux需要安装libgdiplus否则qrcode（二维码）无法使用</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>yum install libgdiplus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="监视应用-进程守护" tabindex="-1"><a class="header-anchor" href="#监视应用-进程守护" aria-hidden="true">#</a> 监视应用，进程守护</h2><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>// 创建服务文件
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function g(x,k){const a=r("ExternalLinkIcon");return d(),t("div",null,[o,n("h2",u,[v,e(),n("a",p,[e("安装.net"),i(a)]),e(" core runtime")]),m,n("p",null,[e("在启动SQL server引擎的时候出现了错误。 关于这个的解决方案就是，我们需要设置一下 /opt/mssql/bin/sqlservr 目录的权限，让SQL server可以访问 cd /opt/mssql/bin/ chmod 777 sqlservr 这次权限分配完成，接着重新输入命令，再次安装 /opt/mssql/bin/mssql-conf setup 安装完成之后，再次检查SQL server的状态 systemctl status mssql-server sql server在Centos安装centos7.x中安装SQL Server - 吕小不 - 博客园 ("),n("a",b,[e("cnblogs.com"),i(a)]),e(")")]),h])}const C=l(c,[["render",g],["__file","linux_Run.html.vue"]]);export{C as default};
