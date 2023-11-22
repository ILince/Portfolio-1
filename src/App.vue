<template>
  <div id="app">
    <header-base></header-base>
    <home-page></home-page>
    <footer-base></footer-base>
  </div>
</template>

<script>
import HomePage from "./components/Home-page.vue";
import FooterBase from "./components/footer-base.vue";
import HeaderBase from "./components/Header-base.vue";

export default {
  name: "App",
  components: {
    "home-page": HomePage,
    "footer-base": FooterBase,
    "header-base": HeaderBase,
  },
};
</script>

<style scoped></style>
