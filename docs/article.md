---
sidebar_position: 4
---

# 文章页面

## **归档页面**

在站点根目录下的 `source` 文件夹内创建一个 `.md` 文件，文件名和路径根据个人喜好决定，会决定渲染生成以后页面的路径。

在文件中写入以下内容：



```
---
title: 文章归档
layout: archives
---
```

> title 可以更换为自己喜欢的标题 permalink 为本页面地址

参考：https://hexo.io/zh-cn/docs/front-matter

## **友情链接**

### **创建页面**

在站点根目录下的 `source` 文件夹内创建一个 `.md` 文件，文件名和路径根据个人喜好决定，会决定渲染生成以后页面的路径。

在文件中写入以下内容：



```
---
title: links
date: 2013/7/13 20:46:25
layout: py
permalink: PY.html
---
```

> title 可以更换为自己喜欢的标题 permalink 为本页面地址

参考：https://hexo.io/zh-cn/docs/front-matter

### **添加友链**

在 `.md` 中直接添加以下内容即可



```
- [![标题](https://example.com/logo.png)](https://example.com/ "标题")
```

例如:



```
- [![折影轻梦](https://avatar.mixcm.com/github/nexmoe)](https://nexmoe.com/ "折影轻梦")
```

演示：https://nexmoe.com/PY.html

## **文章封面图**

在 Front-matter 中插入 cover 值，该值可以是图片的远程链接，可以是图片的绝对路径，为防止图片抖动，你需要手动填写封面图原长度和高度



```
---
title: Hello World
date: 2013/7/13 20:46:25
cover: https://i.loli.net/2019/07/21/5d33d5dc1531213134.png
coverWidth: 1200
coverHeight: 750
---
```

## **瀑布流图片**



```
{% gallery %}
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192753.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192754.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192755.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192756.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192757.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192530.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192531.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192532.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192533.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192534.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192535.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192415.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192416.jpg)
{% endgallery %}
```

效果如下

![img](https://gblobscdn.gitbook.com/assets%2F-M3W8P_3lbsBZW1wagFn%2F-MTYW7-2vU2Zkpgev5wN%2F-MTYX6l-ry-Y2d6mnyN-%2FQQ%E5%9B%BE%E7%89%8720210215103021.png?alt=media&token=0aa51f33-f1a2-4a11-b376-5f071eb7326f)

