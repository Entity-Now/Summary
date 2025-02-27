import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-a604e4a9.js";const i={},l=e(`<h1 id="always-on" tabindex="-1"><a class="header-anchor" href="#always-on" aria-hidden="true">#</a> always on</h1><h2 id="需用到的ip" tabindex="-1"><a class="header-anchor" href="#需用到的ip" aria-hidden="true">#</a> 需用到的ip</h2><table><thead><tr><th>ip</th><th>名称</th><th>用途</th></tr></thead><tbody><tr><td>10.111.100.5</td><td>WIN-100</td><td>主要服务器</td></tr><tr><td>10.111.100.8</td><td>WIN-101</td><td>辅助服务器</td></tr><tr><td>10.111.100.9</td><td>alwaysOn</td><td>集群虚拟IP</td></tr><tr><td>10.111.100.10</td><td>mk-sql</td><td>监听器IP(不清楚有何用)</td></tr></tbody></table><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><ol><li>账户密码必须相同</li><li>防火墙放行</li><li>关闭ipv6</li><li>dns 配置为集群ip</li><li>还要定义侦听器（暂不清楚怎么使用）</li></ol><h2 id="win-100-证书" tabindex="-1"><a class="header-anchor" href="#win-100-证书" aria-hidden="true">#</a> win-100 证书</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 服务器 win-100</span>
<span class="token keyword">USE</span> master<span class="token punctuation">;</span>
GO

<span class="token comment">-- 删除已有的证书（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>certificates <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;CERT1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> CERTIFICATE CERT1<span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

<span class="token comment">-- 删除已有的终结点（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>endpoints <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;group0_endpoint&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> ENDPOINT <span class="token punctuation">[</span>group0_endpoint<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

<span class="token comment">-- 删除已有的主密钥（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>symmetric_keys <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;##MS_DatabaseMasterKey##&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> MASTER <span class="token keyword">KEY</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装证书-最后一行代码可是共享文件夹的路径" tabindex="-1"><a class="header-anchor" href="#安装证书-最后一行代码可是共享文件夹的路径" aria-hidden="true">#</a> 安装证书（最后一行代码可是共享文件夹的路径）</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 服务器 win-100</span>
<span class="token keyword">USE</span> master<span class="token punctuation">;</span>
GO

<span class="token comment">-- 创建主密钥</span>
<span class="token keyword">CREATE</span> MASTER <span class="token keyword">KEY</span> ENCRYPTION <span class="token keyword">BY</span> PASSWORD <span class="token operator">=</span> <span class="token string">&#39;123.abc&#39;</span><span class="token punctuation">;</span>
GO

<span class="token comment">-- 创建证书，确保每台机器上的证书名称唯一</span>
<span class="token keyword">CREATE</span> CERTIFICATE WIN_100_CERT <span class="token keyword">WITH</span> SUBJECT <span class="token operator">=</span> <span class="token string">&#39;WIN_100_CERT&#39;</span><span class="token punctuation">,</span> START_DATE <span class="token operator">=</span> <span class="token string">&#39;2017-01-01&#39;</span><span class="token punctuation">,</span> EXPIRY_DATE <span class="token operator">=</span> <span class="token string">&#39;2099-12-30&#39;</span><span class="token punctuation">;</span>
GO

<span class="token comment">-- 备份证书到文件，确保路径存在并有写入权限</span>
<span class="token keyword">BACKUP</span> CERTIFICATE WIN_100_CERT <span class="token keyword">TO</span> <span class="token keyword">FILE</span> <span class="token operator">=</span> <span class="token string">&#39;C:\\gdmk\\WIN_100_CERT.cer&#39;</span><span class="token punctuation">;</span>
GO

<span class="token comment">-- 创建终结点，设为证书验证</span>
<span class="token keyword">CREATE</span> ENDPOINT <span class="token punctuation">[</span>group0_endpoint<span class="token punctuation">]</span> <span class="token keyword">AUTHORIZATION</span> <span class="token punctuation">[</span>sa<span class="token punctuation">]</span> STATE<span class="token operator">=</span>STARTED <span class="token keyword">AS</span> TCP <span class="token punctuation">(</span>LISTENER_PORT <span class="token operator">=</span> <span class="token number">5022</span><span class="token punctuation">,</span> LISTENER_IP <span class="token operator">=</span> <span class="token keyword">ALL</span><span class="token punctuation">)</span>
    <span class="token keyword">FOR</span> DATA_MIRRORING <span class="token punctuation">(</span>ROLE <span class="token operator">=</span> <span class="token keyword">ALL</span><span class="token punctuation">,</span> AUTHENTICATION <span class="token operator">=</span> CERTIFICATE WIN_100_CERT<span class="token punctuation">,</span> ENCRYPTION <span class="token operator">=</span> REQUIRED <span class="token keyword">ALGORITHM</span> AES<span class="token punctuation">)</span><span class="token punctuation">;</span>
GO

<span class="token comment">-- 载入其他节点证书</span>
<span class="token keyword">CREATE</span> CERTIFICATE WIN_101_CERT <span class="token keyword">FROM</span> <span class="token keyword">FILE</span> <span class="token operator">=</span> <span class="token string">&#39;C:\\gdmk\\WIN_101_CERT.cer&#39;</span><span class="token punctuation">;</span>
GO

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="win-101-证书" tabindex="-1"><a class="header-anchor" href="#win-101-证书" aria-hidden="true">#</a> win-101 证书</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 服务器 win-101</span>
<span class="token keyword">USE</span> master<span class="token punctuation">;</span>
GO

<span class="token comment">-- 删除已有的证书（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>certificates <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;CERT2&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> CERTIFICATE CERT1<span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

<span class="token comment">-- 删除已有的终结点（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>endpoints <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;group0_endpoint&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> ENDPOINT <span class="token punctuation">[</span>group0_endpoint<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

<span class="token comment">-- 删除已有的主密钥（如果存在）</span>
<span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>symmetric_keys <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;##MS_DatabaseMasterKey##&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DROP</span> MASTER <span class="token keyword">KEY</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>
GO

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装证书-最后一行代码可是共享文件夹的路径-1" tabindex="-1"><a class="header-anchor" href="#安装证书-最后一行代码可是共享文件夹的路径-1" aria-hidden="true">#</a> 安装证书（最后一行代码可是共享文件夹的路径）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
-- 服务器 win-101
USE master;
GO

-- 创建主密钥
CREATE MASTER KEY ENCRYPTION BY PASSWORD = &#39;123.abc&#39;;
GO

-- 创建证书，确保每台机器上的证书名称唯一
CREATE CERTIFICATE WIN_101_CERT WITH SUBJECT = &#39;WIN_101_CERT&#39;, START_DATE = &#39;2017-01-01&#39;, EXPIRY_DATE = &#39;2099-12-30&#39;;
GO

-- 备份证书到文件，确保路径存在并有写入权限
BACKUP CERTIFICATE WIN_101_CERT TO FILE = &#39;C:\\gdmk\\WIN_101_CERT.cer&#39;;
GO

-- 创建终结点，设为证书验证
CREATE ENDPOINT [group0_endpoint] AUTHORIZATION [sa] STATE=STARTED AS TCP (LISTENER_PORT = 5022, LISTENER_IP = ALL)
    FOR DATA_MIRRORING (ROLE = ALL, AUTHENTICATION = CERTIFICATE WIN_101_CERT, ENCRYPTION = REQUIRED ALGORITHM AES);
GO

-- 载入其他节点证书
CREATE CERTIFICATE WIN_100_CERT FROM FILE = &#39;C:\\gdmk\\WIN_100_CERT.cer&#39;;
GO

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[l];function t(o,c){return s(),a("div",null,p)}const k=n(i,[["render",t],["__file","alwaysOn.html.vue"]]);export{k as default};
