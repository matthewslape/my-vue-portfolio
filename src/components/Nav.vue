<template>
  <!-- TRYING TO FIGURE OUT HOW TO CLOSE NAV ON SCROLL... v-on:scroll.passive="toggle"-->
  <div class="navBar">
    <router-link to="/" class="pageHeader" style="text-decoration: none"
      ><h2 class="pageHeader1">Matthew Slape</h2>
      <h2 class="pageHeader1 pageHeader2">| Creative</h2></router-link
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

      <!--<a v-on:click="toggle" href="/code" style="text-decoration: none"
        ><h3
          :class="[isActive ? 'navTabActive' : 'navTab']"
          style="margin-top: 2rem"
        >
          Code
        </h3></a
      >-->
      <a v-on:click="toggle" href="/motion" style="text-decoration: none"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">Motion</h3></a
      >
      <!--<a v-on:click="toggle" href="/ux" style="text-decoration: none"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">UX Design</h3></a
      >-->
      <a v-on:click="toggle" href="/ph" style="text-decoration: none"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Photo + Video
        </h3></a
      >
      <a v-on:click="toggle" href="/illustration" style="text-decoration: none"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">
          Illustration
        </h3></a
      >
      <!--<a v-on:click="toggle" href="/branding" style="text-decoration: none"
        ><h3 :class="[isActive ? 'navTabActive' : 'navTab']">Branding</h3></a
      >-->

      <a v-on:click="toggle" href="/print" style="text-decoration: none">
        <h3 :class="[isActive ? 'navTabActive' : 'navTab']">Print</h3></a
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
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 5rem;
  z-index: 50;
  background-color: #0a090c;
}

.pageHeader {
  display: flex;
  padding-left: 0.8rem;
  margin: 1rem;
}

.pageHeader1 {
  color: #b3b3b3;
  padding-top: 0rem;
  font-weight: 800;
  margin-bottom: 0rem;
}
.pageHeader2 {
  padding-left: 0.75rem;
  padding-top: 0rem;
  margin-bottom: 0rem;
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
  z-index: 100;
  margin-bottom: 3rem;
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
}

.hamLayer1,
.hamLayer2,
.hamLayer3 {
  background: #b3b3b3;
  height: 0.35rem;
  width: 2.65rem;
  border-radius: 0.25rem;
  transition: 0.6s ease-in-out;
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
  background-color: #0a090c;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
}
.navTab {
  position: fixed;
  transform: translateX(110rem);
  transition: 0.5s ease-in-out;
}

@media (max-width: 760px) {
  .navBar {
    position: relative;
  }
  .pageHeader1 {
    font-size: 1rem;
  }
  .pageHeader2 {
    padding-left: 0.5rem;
  }
}

@media (max-width: 450px) {
  .pageHeader2 {
    display: none;
  }
  .pageHeader1 {
    text-align: left;
  }
}
</style>
