# 解决Github上clone项目太慢

#### 问题起因
今天在Github使用git clone速度达到KB/s,到后面失败，遂探索如何解决。
####  问题解决
git clone特别慢是因为github.global.ssl.fastly.net域名被限制了。
只要找到这个域名对应的ip地址，然后在hosts文件中加上ip–>域名的映射，刷新DNS缓存便可。

##### 步骤
1. 更改hosts文件
    Windows上使用管理员打开记事本然后打开上述文件路径的文件从而更改。
    Windows上的hosts文件路径在C:\Windows\System32\drivers\etc\hosts
    Linux的hosts文件路径在：sudo vim /etc/hosts
    在文件中添加
    199.232.69.194 github.global-ssl.fastly.net
    140.82.114.3 github.com
2. 刷新DNS缓存