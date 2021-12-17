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
  width: 100vw;
  position: absolute;
  top: 12rem;
  right: 0;
  z-index: -100;
}
</style>
