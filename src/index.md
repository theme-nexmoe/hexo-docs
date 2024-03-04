---
layout: home

hero:
  name: Hexo Theme Nexmoe
  text: 一个比较特别的 Hexo 主题，聚焦图片和色彩 🔥
  actions:
    - theme: brand
      text: 开始
      link: /v4.2/
    - theme: alt
      text: Demo
      link: https://nexmoe.com/

features:
  - icon: ⚡️
    title: 极简主义
    details: 不太重
  - icon: 🏞️
    title: 图片友好
    details: 图片瀑布流，灯箱，图片懒加载
  - icon: 🛠️
    title: 强个性化
    details: 您可以很方便的使用任意的评论系统、统计系统等各种第三方工具

---


<script setup>
import Feature from "/components/Feature.vue"
</script>

<Feature :feature="{title:'Homepage', picture: 'https://user-images.githubusercontent.com/16796652/134768469-52d2426b-5c7c-4a46-8f0e-064361044d88.png'}"/>
<Feature :feature="{title:'Archive Page ', picture: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'}"/>
<Feature :feature="{title:'Links', picture: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'}"/>
<Feature :feature="{title:'Gallery', picture: 'https://user-images.githubusercontent.com/16796652/134768468-86751060-b3bf-43f4-970e-4baa8906e29a.png'}"/>
<Feature :feature="{title:'Contributors', picture: 'https://opencollective.com/hexo-theme-nexmoe/contributors.svg?width=890&button=false'}"/>

