# 背景
UI部门需要记录内部设计规范和设计元素，找到前端部门帮忙搭建一个网站，了解需要后发现他们需要编辑器+列表+文章展示，我发现这就是标准博客网站，就开始找开源的博客系统，最终确定使用ghost，基于Node.js开发，对前端友好，不需要找后端帮忙。

## 汉化过程
打开ghost后台设置语言zh-cn，非常重要！
![](../images/ghost-set-language.png)
然后在主题包创建locals文件夹，新建一个zh-cn.json文件，根据需求翻译

附上本人的翻译，来自`https://github.com/eddiesigner/liebling/blob/master/locales/zh-hans.json`
``` javascript
{
  "% min read": "阅读预计需要%分钟",
  "% posts": "%篇文章",
  "1 min read": "阅读预计需要1分钟",
  "1 post": "1篇文章",
  "Among with": "<br>和 ",
  "Among with no break line": "和 ",
  "Apparently there are no posts at the moment, check again later.": "当前没有文章, 请稍后再看.",
  "Back to home": "返回首页",
  "Email cannot be blank.": "Email 地址不能为空.",
  "Featured": "精选",
  "Get the latest posts delivered right to your inbox.": "将最新的文章发送到你的收件箱.",
  "Go to the home page": "前往首页",
  "JavaScript license information": "JavaScript license 信息",
  "More": "更多",
  "Name": "花名",
  "No posts": "没有文章",
  "No posts found": "未找到文章",
  "No recent articles found :(": "找不到最近更新的内容 :(",
  "No results for your search, try something different.": "搜索不到内容, 请尝试其他关键词.",
  "No tags found :(": "找不到标签 :(",
  "Page": "",
  "Page not found": "未找到页面",
  "Posted by": "作者: ",
  "Posts": "文章",
  "Published with": "",
  "Recent articles": "最近更新",
  "Recommended for you": "向你推荐",
  "Stay up to date! Get all the latest & greatest posts delivered straight to your inbox.": "事不宜迟! 将最新和最好的文章直接发送到你的收件箱.",
  "Subscribe": "订阅",
  "Subscribe to our newsletter": "订阅我们的新内容",
  "Subscribe to {blogtitle}": "订阅 {blogtitle}",
  "Subscribed!": "订阅成功!",
  "Tags": "标签",
  "Toggle dark mode": "切换到暗色模式",
  "Type to search": "输入搜索内容",
  "Unfortunately the page you were looking for could not be found.": "非常抱歉, 页面找不到了.",
  "You've successfully subscribed to": "你已经成功订阅了",
  "Your email address": "你的 Email 地址",
  "of": " / ",
  "with the email address": "在此邮箱",
  "with this tag": "包含此标签"
}
```
### 坑
本人用的主题库是`https://ghost.org/themes/liebling/`，内部默认有多语言文件，切到中文后发现日期不汉化，找了各种资料说改core代码，研究源码之后发现，日期用的是moment，最终调用了dateMoment.locale(options.data.site.locale)，这个local取的是ghost后台设置语言，匹配主题包下locals文件夹下的文件名，liebling中文是zh-hans.json，导致日期不汉化，把文件名改成zh-cn就好了
