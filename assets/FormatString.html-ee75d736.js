import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,a as c}from"./app-c5491669.js";const t={},i=c('<h1 id="格式化字符串列表" tabindex="-1"><a class="header-anchor" href="#格式化字符串列表" aria-hidden="true">#</a> 格式化字符串列表</h1><h2 id="格式化字符串" tabindex="-1"><a class="header-anchor" href="#格式化字符串" aria-hidden="true">#</a> 格式化字符串</h2><p>C# 中可以使用的格式化字符串有很多，以下是一些常用的格式化字符串：</p><ul><li><code>C</code>：格式化为货币。例如：<code>string.Format(&quot;{0:C}&quot;, 123.45)</code> 将输出 <code>$123.45</code>（取决于系统区域设置）。</li><li><code>D</code>：格式化为十进制整数。例如：<code>string.Format(&quot;{0:D}&quot;, 12345)</code> 将输出 <code>12345</code>。</li><li><code>E</code>：格式化为科学计数法。例如：<code>string.Format(&quot;{0:E}&quot;, 12345.6789)</code> 将输出 <code>1.234568E+004</code>。</li><li><code>F</code>：格式化为定点数（小数点后保留指定位数）。例如：<code>string.Format(&quot;{0:F2}&quot;, 123.4567)</code> 将输出 <code>123.46</code>。</li><li><code>G</code>：自动选择 <code>F</code> 或 <code>E</code> 格式。例如：<code>string.Format(&quot;{0:G}&quot;, 12345.6789)</code> 将输出 <code>12345.6789</code>。</li><li><code>N</code>：格式化为带有千位分隔符的数字。例如：<code>string.Format(&quot;{0:N}&quot;, 12345.6789)</code> 将输出 <code>12,345.68</code>（取决于系统区域设置）。</li><li><code>P</code>：格式化为百分数。例如：<code>string.Format(&quot;{0:P}&quot;, 0.12345)</code> 将输出 <code>12.35%</code>。</li><li><code>X</code>：格式化为十六进制数。例如：<code>string.Format(&quot;{0:X}&quot;, 255)</code> 将输出 <code>FF</code>。</li></ul><h2 id="日期-时间格式化" tabindex="-1"><a class="header-anchor" href="#日期-时间格式化" aria-hidden="true">#</a> 日期/时间格式化</h2><p>当然还有，以下是一些其他常用的格式化字符串：</p><ul><li><code>T</code>：格式化为短时间格式。例如：<code>string.Format(&quot;{0:T}&quot;, DateTime.Now)</code> 将输出 <code>下午 4:53</code>（取决于系统区域设置）。</li><li><code>d</code>：格式化为短日期格式。例如：<code>string.Format(&quot;{0:d}&quot;, DateTime.Now)</code> 将输出 <code>2022/6/1</code>（取决于系统区域设置）。</li><li><code>D</code>：格式化为长日期格式。例如：<code>string.Format(&quot;{0:D}&quot;, DateTime.Now)</code> 将输出 <code>2022年6月1日</code>（取决于系统区域设置）。</li><li><code>t</code>：格式化为短时间格式。例如：<code>string.Format(&quot;{0:t}&quot;, DateTime.Now)</code> 将输出 <code>下午 4:53</code>（取决于系统区域设置）。</li><li><code>T</code>：格式化为长时间格式。例如：<code>string.Format(&quot;{0:T}&quot;, DateTime.Now)</code> 将输出 <code>下午 4:53:25</code>（取决于系统区域设置）。</li><li><code>u</code>：格式化为通用时间格式。例如：<code>string.Format(&quot;{0:u}&quot;, DateTime.Now)</code> 将输出 <code>2022-06-01 08:53:25Z</code>。</li><li><code>y</code>：格式化为年份和月份。例如：<code>string.Format(&quot;{0:y}&quot;, DateTime.Now)</code> 将输出 <code>2022年6月</code>（取决于系统区域设置）。</li><li><code>M</code>：格式化为月份和日。例如：<code>string.Format(&quot;{0:M}&quot;, DateTime.Now)</code> 将输出 <code>6月1日</code>（取决于系统区域设置）。</li><li><code>O</code>：格式化为 ISO 8601 扩展格式。例如：<code>string.Format(&quot;{0:O}&quot;, DateTime.Now)</code> 将输出 <code>2022-06-01T16:53:25.3450000+08:00</code>。</li><li><code>R</code>：格式化为 RFC1123 格式。例如：<code>string.Format(&quot;{0:R}&quot;, DateTime.Now)</code> 将输出 <code>Wed, 01 Jun 2022 08:53:25 GMT</code>。</li><li><code>x</code>：格式化为本地日期和时间字符串。例如：<code>string.Format(&quot;{0:x}&quot;, DateTime.Now)</code> 将输出 <code>2022/6/1 下午 4:53</code>（取决于系统区域设置）。</li><li><code>X</code>：格式化为本地长日期和时间字符串。例如：<code>string.Format(&quot;{0:X}&quot;, DateTime.Now)</code> 将输出 <code>2022年6月1日 下午 4:53:25</code>（取决于系统区域设置）。</li><li><code>#</code>：占位符，表示数字或日期格式字符（例如：<code>{0:#,##0.00}</code>）。</li></ul><h2 id="进制数格式化" tabindex="-1"><a class="header-anchor" href="#进制数格式化" aria-hidden="true">#</a> 进制数格式化</h2><ul><li><code>B</code>：二进制。</li><li><code>D</code>：十进制。</li><li><code>E</code>：科学计数法。</li><li><code>F</code>：定点数。</li><li><code>G</code>：自动选择 <code>F</code> 或 <code>E</code> 格式。</li><li><code>N</code>：带千位分隔符的数字。</li><li><code>P</code>：百分数。</li><li><code>X</code>：十六进制。</li></ul>',9),a=[i];function r(l,u){return e(),d("div",null,a)}const s=o(t,[["render",r],["__file","FormatString.html.vue"]]);export{s as default};
