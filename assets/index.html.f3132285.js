import{_ as n,o as a,c as s,f as e,e as i}from"./app.a158ac49.js";const l={},t=i(`<h1 id="git-入门" tabindex="-1"><a class="header-anchor" href="#git-入门" aria-hidden="true">#</a> git 入门</h1><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 初始化config
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token string">&quot;false&quot;</span> // 关闭ssl认证
// <span class="token function">cat</span> config
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
// proxy 代理
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy
// 取消代理
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy

// 连接github
// 生成 ssh——key
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;2966388213@qq.com&quot;</span>
// 设置ssh
登录github - 设置 - <span class="token function">ssh</span> - 添加

// 初始化
<span class="token function">git</span> init 

// 获取远程项目
<span class="token function">git</span> remote <span class="token function">add</span> origin url

// 删除项目
<span class="token function">git</span> remote <span class="token function">rm</span> origin 

// 将文件添加到缓存区
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> // 所有文件
<span class="token function">git</span> <span class="token function">add</span> a.txt // 指定的文件

// 修改注释
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;text&quot;</span>

// 创建分支
<span class="token function">git</span> branch master
// 查看分支
<span class="token function">git</span> branch 
// 切换分支
<span class="token function">git</span> checkout name
// 创建并切换分支
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> name

// 合并分支
<span class="token function">git</span> merge name

// 查看本地与远程的分支
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>

// 上传到服务器
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master // master 可以改为其他分支
<span class="token function">git</span> push origin master <span class="token parameter variable">-f</span> // 强制合并线上分支

// 从远程地址拉取并更新分支
<span class="token function">git</span> poll origin master // master 可以改为其他分支

// 日志
<span class="token function">git</span> log
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token parameter variable">-2</span>  // 查看最后两次的更新日志
<span class="token function">git</span> log <span class="token parameter variable">--stat</span> // 查询更新统计
//git log <span class="token parameter variable">--pretty</span> 使用不同的格式输出日志
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline // 每个提交都放在一行显示


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="克隆一个项目" tabindex="-1"><a class="header-anchor" href="#克隆一个项目" aria-hidden="true">#</a> 克隆一个项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone url
// 克隆指定版本的库
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> url
// 深度克隆，两同包含的项目一起下载
<span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新分支的坑" tabindex="-1"><a class="header-anchor" href="#更新分支的坑" aria-hidden="true">#</a> 更新分支的坑</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 修改完文件需要更新到服务器时，首先把本地的变化连接到服务器
<span class="token function">git</span> pull origin mian
// 然后再提交就ojbk了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改提交信息" tabindex="-1"><a class="header-anchor" href="#修改提交信息" aria-hidden="true">#</a> 修改提交信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 比如说你commit <span class="token parameter variable">-m</span> 之后发现描述或者文件有变动，可以使用amend修改
// 比如发现一个地方改错了，下一次提交的时候不想保存上一次的记录
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span>
<span class="token function">git</span> reset <span class="token function">id</span> // <span class="token function">id</span> 是提交的唯一id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程仓库管理" tabindex="-1"><a class="header-anchor" href="#远程仓库管理" aria-hidden="true">#</a> 远程仓库管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 修改仓库名称
<span class="token function">git</span> remote <span class="token function">rename</span> origin NewName
// 查询远程仓库地址
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> remote <span class="token parameter variable">-vv</span> // 会显示更加详细的地址
// 修改远程仓库的地址
<span class="token function">git</span> remote set-url origin url
// 删除关联的远程项目
<span class="token function">git</span> remote <span class="token function">rm</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 删除一个远程分支
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> master
// 删除一个本地分支
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变基-当前分支的所有修改移到另一个分支上面" tabindex="-1"><a class="header-anchor" href="#变基-当前分支的所有修改移到另一个分支上面" aria-hidden="true">#</a> 变基，当前分支的所有修改移到另一个分支上面</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout maser
// 变基到master分支
<span class="token function">git</span> rebase main
// 切回主分支
<span class="token function">git</span> checkout main
// 然后进行合并
<span class="token function">git</span> merge maser

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> 
<span class="token function">git</span> tag <span class="token parameter variable">-list</span>
// 创建标签 ， （lightweight，annotated）
// 创建带注释的标签（annotated）
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;test标签&quot;</span>
// 创建轻量的标签
<span class="token function">git</span> tag pushTag

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function r(c,d){return a(),s("div",null,[e(`
 * @作者: 14770137
 * @Date: 2022-09-21 16:44:16
`),t])}const o=n(l,[["render",r],["__file","index.html.vue"]]);export{o as default};
