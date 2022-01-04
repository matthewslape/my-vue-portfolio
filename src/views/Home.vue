<template>
  <div class="home">
    <Landing />
    <svg
      id="gradientSwoosh1"
      viewBox="0 0 1440 2223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-6.70413 541.41C465.499 133.5 982 476 1456.5 -0.000101658L1456.5 1747C828.5 1747 639 2222.5 -6.70418 2222.5L-6.70413 541.41Z"
        fill="url(#paint0_linear_311_223)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_311_223"
          x1="-614.778"
          y1="740.418"
          x2="1641.98"
          y2="2195.43"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.34723" stop-color="#001D68" />
          <stop offset="0.903162" stop-color="#1C6B6B" />
        </linearGradient>
      </defs>
    </svg>
    <div class="directory">
      <h1 class="customHeader customHeaderBold">About Me</h1>
      <h1 class="customHeader customHeaderBold">Contact</h1>
      <h1 class="customHeader customHeaderBold">Work</h1>
    </div>
    <div class="workDirectory">
      <h1 class="customHeader">Graphics</h1>
      <h1 class="customHeader">UX Design</h1>
      <h1 class="customHeader">Photo + Video</h1>
      <h1 class="customHeader">Illustration</h1>
      <h1 class="customHeader">Branding</h1>
      <h1 class="customHeader">Code</h1>
    </div>
  </div>
  <div class="decorWrapper">
    <h3 class="decorType">Created to Create</h3>
  </div>
  <div class="aboutMeGrid">
    <h1 class="customHeaderBold aboutHeader" style="color: black">About Me</h1>
    <div class="two">
      <img
        class="matthewSitting"
        src="../assets/photos/aboutMePhoto.jpg"
        alt="Photo of Matthew Sitting"
      />
    </div>
    <div class="three">three</div>
    <div class="four">four</div>
    <div class="five">five</div>
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
export default {
  name: "Home",
  components: {
    Landing,
  },

};
</script>
<style scoped>
#gradientSwoosh1 {
  position: absolute;
  top: 12rem;
  display: flex;
  max-width: 100%;
  z-index: -100;
}
.directory {
  margin-top: 30%;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.workDirectory {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 3rem;
}
.customHeader {
  text-transform: uppercase;
  line-height: 150%;
  color: white;
}
.customHeaderBold {
  font-weight: bold;
  text-transform: uppercase;
}
.decorWrapper {
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  height: 5rem;
}
.decorType {
  letter-spacing: 0.195em;
  text-transform: uppercase;
  color: #5f75a5;
  transform: rotate(-90deg);
  font-weight: 800;
  font-size: 2.5rem;
  margin-left: 1rem;
  position: relative;
  right: 15rem;
  top: 14rem;
  opacity: 80%;
}
.aboutMeGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /*background: grey;*/
  width: 70%;
  height: 50rem;
  margin: auto;
  position: relative;
  top: 40rem;
}
.aboutHeader {
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  margin-left: -2rem;
  display: flex;
  align-items: flex-end;
}
.two {
  grid-row: 2 / 5;
  grid-column: 2;
}
.three {
  grid-row: 2;
  grid-column: 1;
}
.four {
  grid-row: 3;
  grid-column: 1;
}
.five {
  grid-row: 4;
  grid-column: 1;
}
.matthewSitting {
  width: 100%;
  height: 95%;
  object-fit: cover;
}
</style>
