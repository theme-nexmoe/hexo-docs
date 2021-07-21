---
sidebar_position: 4
---

# 搜索

## **开始**

Nexmoe现在支持两种搜索引擎，网页搜索引擎（如百度、Bing）和 Swiftype

## **使用网页搜索引擎**

- 打开你的博客配置文件，将`search`项下的`type`设置为`engine`，将`url`改为可用于直接搜索的网址

例：



```
search: 
    type: swiftype
    url: https://cn.bing.com/search?q=site:nexmoe.com
```

## **使用 Swiftype**

- 打开你的博客配置文件，将`search`项下的`type`设置为`swiftype`
- 转到你的Swiftype引擎仪表盘，进入`Install Search`，在你的安装代码（`install code`）的如图位置得到你的`swiftype-id`，并填入博客配置文件`search`项下的`id`项

![img](search/a7d385bac726fa4ffcdc3c744e86ad1d127eedaf.jpeg)

例：

```
search:
    type: swiftype
    url: ... 
    id: FwpiTVmsf_TAL1XGiS17
```

[
  ](https://docs.nexmoe.com/hexo-nexmoe/zhu-ti-pei-zhi/icon)