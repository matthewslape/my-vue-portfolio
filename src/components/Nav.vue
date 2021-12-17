<template>
  <!-- TRYING TO FIGURE OUT HOW TO CLOSE NAV ON SCROLL... v-on:scroll.passive="toggle"-->
  <div class="navBar">
    <router-link to="/"
      ><h2 class="pageHeader">Matthew Slape | Creative</h2></router-link
    >
    <div :class="[isActive ? 'hamburgerWrapperActive' : 'hamburgerWrapper']">
      <div class="hamburger" @click="toggle">
        <div
          class="hamLayer1"
          :class="[isActive ? 'hamLayer1Active' : 'hamLayer1']"
        ></div>
        <div
          class="hamLayer2"
          :class="[isActive ? 'hamLayer2Active' : 'hamLayer2']"
        ></div>
        <div
          class="hamLayer3"
          :class="[isActive ? 'hamLayer3Active' : 'hamLayer3']"
        ></div>
      </div>
      <router-link to="/graphics"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Graphics
        </h3></router-link
      >
      <router-link to="/ux"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          UX Design
        </h3></router-link
      >
      <router-link to="/ph"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Photo + Video
        </h3></router-link
      >
      <router-link to="/illustration"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Illustration
        </h3></router-link
      >
      <router-link to="/branding"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Branding
        </h3></router-link
      >
      <router-link to="/code"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Code
        </h3></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  el: "hamburger-wrapper",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = this.isActive ? false : true;
      //console.log("switch, toggle() called succesfully.");
      //window.addEventListener("scroll", (this.isActive = false));
    },
  },
};
</script>

<style>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  display: flex;
  align-items: start;
  height: 5rem;
  z-index: 50;
  background: white;
}

.pageHeader {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #022269;
  padding-left: 1rem;
  margin: 1rem;
  border-radius: 00.25rem;
}

.hamburgerWrapper {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}

.hamburgerWrapperActive {
  width: 18rem;
  height: 100vh;
  position: absolute;
  top: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
}

/*hamburger animation*/
.hamburger {
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  cursor: pointer;
  margin: 1rem;
  margin-bottom: 3rem;
}

.hamLayer1,
.hamLayer2,
.hamLayer3 {
  background: #022269;
  height: 0.35rem;
  width: 2.65rem;
  border-radius: 0.25rem;
  transition: 0.5s ease-in-out;
}

.hamLayer1 {
  transform-origin: right;
}

.hamLayer3 {
  transform-origin: right;
}

.hamLayer1Active {
  transform: rotate(-45deg) translateY(0) translateX(0);
}

.hamLayer2Active {
  opacity: 0;
}

.hamLayer3Active {
  transform: rotate(45deg) translateY(0em) translateX(0em);
}

.navTabActive {
  transition: 0.5s ease-in-out;
  background-color: white;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
}
.navTab {
  transform: translateX(110rem);
  transition: 0.5s ease-in-out;
}
</style>
