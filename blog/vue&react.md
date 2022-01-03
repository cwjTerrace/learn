这是一个学习仓库，为了学习js基础，基于vite搭建的react开发环境。
看了semi design的仓库目录，发现跟antd目录结构不一样，了解后发现semi design使用了一种叫做 Foundation/Adapter 架构，这时候我脑子一闪而过，为什么我的学习仓库不能同时支持react和vue呢！

第一步修改仓库目录
src拆分成utils、react-ui、vue-ui三个目录
把配置挪到react-ui、vue-ui 内部
