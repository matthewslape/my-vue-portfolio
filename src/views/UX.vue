<template>
  <div class="pageWrapper">
    <h1>UX DESIGN</h1>
    <div class="projectWrapper">
      <div class="projectCard" v-for="item in list" :key="item">
        <a class="gradientOverlay" :href="`/ux/${item.photo}`"></a>
        <img
          :src="require(`../assets/photos/ux/ux-cardPhoto-${item.photo}.png`)"
          alt="Project"
        />
        <h3>{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { photo: "trade", title: "Trade Coffee App" },
        { photo: "wikiHow", title: "WikiHow App Redesign" },
        { photo: "dashboard", title: "Daily Dashboard" },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 7vw;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  background-clip: text;
  color: transparent;
}
.projectWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 96vw;
  margin: auto;
  justify-content: flex-start;
}

.projectCard {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 78rem;
  height: 30vw;
  position: relative;
  text-align: center;
}
.gradientOverlay {
  position: absolute;
  inset: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 3;
  opacity: 0;
  background: black;
  transition-duration: 300ms;
}
.gradientOverlay:hover {
  background: linear-gradient(#ffffff 0%, #000000 100%);
  opacity: 0.4;
  mix-blend-mode: overlay;
}
h3 {
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  color: white;
  z-index: 4;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 750px) {
  .projectCard {
    width: 85%;
    height: 44vh;
  }
  .projectWrapper {
    justify-content: center;
  }
}
@media (max-width: 850px) {
  h3 {
    font-size: 1.25rem;
  }
}
</style>
