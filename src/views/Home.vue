<template>
  <div class="home">
    <Landing />
    <About />
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
import About from "../components/About.vue";
export default {
  name: "Home",
  components: {
    Landing,
    About,
  },
};
</script>
<style scoped></style>
