<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  setup() {
    const siteData = reactive({
      title: "Matthew Slape Design",
      Description: "Portfolio Website",
    });

    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");
html, body {
  overflow-x: hidden;
  max-width: 100%;
  margin: 0;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  letter-spacing: 0.02em;
  fill: black;
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

h3 {
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  color: #022269;
}

</style>
