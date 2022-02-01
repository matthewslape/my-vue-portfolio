<template>
  <div class="home">
    <Landing />
    <About />
    <Contact />
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "Home",
  components: {
    Landing,
    About,
    Contact,
  },
};
</script>
<style scoped></style>
