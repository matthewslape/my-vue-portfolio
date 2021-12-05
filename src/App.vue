<template>
  <router-view />
  <Navigation />
  <Landing />
  <Footer />
</template>

<script>
import Landing from "./components/Landing.vue";
import Navigation from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Landing,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
