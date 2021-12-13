<template>
  <!-- TRYING TO FIGURE OUT HOW TO CLOSE NAV ON SCROLL... v-on:scroll.passive="toggle"-->
  <div class="navBar">
    <h2 class="pageHeader">Matthew Slape | Creative</h2>
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
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Graphics</h3>
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">UX Design</h3>
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Photo + Video</h3>
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Illustration</h3>
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Branding</h3>
      <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Code</h3>
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
  margin: 1rem;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  display: flex;
  align-items: start;
  height: 20rem;
}

.pageHeader {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: 0.195em;
  text-transform: uppercase;

  color: #022269;
  background: white;
  padding: 0.5rem;
}

.hamburgerWrapper {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}

.hamburgerWrapperActive {
  width: 20vw;
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
  margin-bottom: 1rem;
  background: white;
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
}
.navTab {
  transform: translateX(110rem);
  transition: 0.5s ease-in-out;
}
</style>
