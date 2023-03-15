---
layout: home

hero:
  name: Hexo Theme Nexmoe
  text: I'm a little special 🔥 
  actions:
    - theme: brand
      text: Get Started
      link: /v4.0/
    - theme: alt
      text: Demo
      link: https://nexmoe.com/

features:
  - icon: ⚡️
    title: Minimalism
    details: There is not much weight
  - icon: 🏞️
    title: Friendly to Pictures
    details: Picture Waterfall Flow, Detail of light box, Image lazy loading
  - icon: 🛠️
    title: Strong Personalization
    details: You can customize your own Nexmoe theme

---

<script setup>
import Feature from "/components/Feature.vue"
</script>

<Feature :feature="{title:'Homepage', picture: 'https://user-images.githubusercontent.com/16796652/134768469-52d2426b-5c7c-4a46-8f0e-064361044d88.png'}"/>
<Feature :feature="{title:'Archive Page ', picture: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'}"/>
<Feature :feature="{title:'Links', picture: 'https://user-images.githubusercontent.com/16796652/134768466-cf580997-1201-48a8-812e-77eb0af6ce59.png'}"/>
<Feature :feature="{title:'Gallery', picture: 'https://user-images.githubusercontent.com/16796652/134768468-86751060-b3bf-43f4-970e-4baa8906e29a.png'}"/>
<Feature :feature="{title:'Contributors', picture: 'https://opencollective.com/hexo-theme-nexmoe/contributors.svg?width=890&button=false'}"/>

