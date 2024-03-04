<template>
  <section>
    <header>
      <h2 v-html="feature.title"></h2>
    </header>
    <div class="picture">
      <img loading="lazy" :src="feature.picture" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  feature: {}
})
</script>

<style scoped>
section {
  padding: 0 24px;
}
@media (min-width: 640px) {
  section {
    padding: 0 48px;
  }
}
@media (min-width: 960px) {
  section {
    padding: 0 64px;
  }
}
section {
  margin-top: 64px !important;
}
header {
  margin: 28px 7px;
}
h2 {
  font-weight: bold;
  font-size: 2em;
  line-height: 1;
}
img {
  display: block;
  border-radius: 12px;
  height: 100%;
  width: 100%;
}
</style>
