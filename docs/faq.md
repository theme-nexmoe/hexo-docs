---
sidebar_position: 2
---

# 常见问题

## **未安装 wordcount**

有时候运行错误会有 wordcount 这一关键词的报错，运行以下命令即可



```
npm i --save hexo-wordcount
```

## **代码高亮**

自2.9.0版本后，需要在 _config.yml 文件中进行如下配置使用高亮



```
highlight:
  enable: true
```

## **首页取文章概述**

Hexo 在写作的时候（***许多博客都是这样的\***），需要在文中添加 **`<!--more-->`** 则该标记之前的部分就会成为该文章的概述，显示在首页里

*Hexo 在* ***`<!--more-->`*** *需要有一段内容*

![img](https://gblobscdn.gitbook.com/assets%2F-M3W8P_3lbsBZW1wagFn%2F-M5femMReb7CyfVZoht0%2F-M5ffJoYNWT1HtC2L_0o%2F2020-04-24_18-12-55.png?alt=media&token=7eea3b22-eb38-41ee-9dfa-405565fa817f)