<template>
  <div class="pageWrapper">
    <h1>UX DESIGN</h1>
    <div class="projectWrapper">
      <div class="projectCard" v-for="item in list" :key="item">
        <a class="gradientOverlay" :href="`/ux/${item.photo}`"></a>
        <img
          :src="require(`../assets/photos/ux/ux-cardPhoto-${item.photo}.png`)"
          alt="UX Project"
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
        { photo: "wikiHow", title: "WikiHow App Redesign" },
        { photo: "dashboard", title: "Daily Dashboard" },
        { photo: "trade", title: "Trade Coffee App" },
      ],
    };
  },
};
</script>
 
<style scoped>
h1 {
  margin-top: 7vw;
  background: #dea511;
  background-clip: text;
  color: transparent;
}
h3 {
  font-size: 2vw;
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
  border-radius: 0.75rem;
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
  border-radius: 0.75rem;
  width: 100%;
  height: 100%;
}

@media (max-width: 750px) {
  .projectCard {
    width: 100%;
    height: 50vh;
    padding: 0.5rem 0rem 0.5rem 0rem;
  }
  .gradientOverlay {
    width: 100%;
    inset: 0.5rem 0rem;
  }
  .projectWrapper {
    justify-content: center;
  }
}
@media (max-width: 750px) {
  h3 {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
