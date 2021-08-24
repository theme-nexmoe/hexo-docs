# 样式与颜色
## 暗色主题
要启用暗色主题，须在站点主题配置中设置以下字段：
```yml
function:
    ...:
    darkmode: true
```
## 自定义配色方案
Nexmoe为各位预备了一套完备的配色方案，但如果各位有自定义配色的需求，可以在站点主题配置中设置。
```yml
color: # 配色方案，从first到seventh为优先级为1-7的颜色，默认为彩虹配色
    first: # 同时作为主题色
        r: ... 
        g: ...
        b: ...
    second:
    ...
    seventh:
```
这里的`first`到`seventh`分别是使用优先级1——7的颜色，原配色为<span style="color:rgb(255,78,106)">红</span><span style="color:rgb(255,118,30)">橙</span><span style="color:rgb(255,185,0)">黄</span><span style="color:rgb(51,213,122)">绿</span><span style="color:rgb(0,219,255)">青</span><span style="color:rgb(26,152,255)">蓝</span><span style="color:rgb(144,144,255)">紫</span>，各位可以根据这几个颜色的出现频率配色，特别注意`first`是主题色。各项下的`r`、`g`、`b`项分别填写颜色的r，g，b值。
## 用户自定义样式
如果有想自定义但配置中未提供的样式，可以通过启用用户自定义样式自定义。

先在站点主题配置中设置以下字段：
```yml
customstyle: true
```

再在博客根目录下的`source`文件夹中新建`custom.css`，并在此文件中编写用户想要自定义的css样式。