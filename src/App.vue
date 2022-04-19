<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
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
  mounted() {
    window.addEventListener("load", function () {
      const element = document.querySelector(".loader-wrapper");
      console.log(element.classList.add("fade-out"));
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");
html,
body {
  overflow-x: hidden;
  max-width: 100%;
  height: 100%;
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
  letter-spacing: 0.02em;
  fill: black;
  padding-top: 1rem;
  font-size: 4vw;
  font-weight: bold;
  text-transform: uppercase;
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
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

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
}

h4,
h5 {
  padding-top: 1rem;
}
p {
  font-size: 1.25rem;
}
/*loading animation*/
.loader-wrapper {
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  position: relative;
  margin: auto;
  transform: translateX(-3vw);
}

.fade-out {
  display: none;
}

.circle {
  position: absolute;
  width: 38px;
  height: 38px;
  opacity: 0;
  transform: rotate(225deg);
  animation-iteration-count: infinite;
  animation-name: orbit;
  animation-duration: 5.5s;
}

.circle:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background: #fff;
}

.circle:nth-child(2) {
  animation-delay: 240ms;
}
.circle:nth-child(3) {
  animation-delay: 480ms;
}
.circle:nth-child(4) {
  animation-delay: 720ms;
}
.circle:nth-child(5) {
  animation-delay: 960ms;
}

@keyframes orbit {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }

  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }

  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }

  70% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }

  76% {
    transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    transform: rotate(945deg);
    opacity: 0;
  }
}

@media (max-width: 1000px) {
  h1 {
    font-size: 7vw;
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 8vw;
  }
  h2 {
    font-size: 4vw;
  }
  p {
    font-size: 1rem;
  }
}

@media (min-width: 850px) {
  h4 {
    font-size: 1.75rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
}
</style>
