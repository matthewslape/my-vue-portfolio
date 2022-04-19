<template>
  <div class="pageWrapper">
    <h1>BRANDING</h1>
    <div class="projectWrapper">
      <div class="projectCard" v-for="item in list" :key="item">
        <a class="overlay" :href="`/branding/${item.photo}`"></a>
        <img
          :src="
            require(`../assets/photos/branding/branding-cardPhoto-${item.photo}.png`)
          "
          alt="Branding Project"
        />
        <h3 class="cardTitle">{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { photo: "js", title: "JS Trucking and Excavation" },
        { photo: "ecp", title: "Energy Conservation Program" },
        { photo: "sphoto", title: "Samanth Rhea Photography" },
        { photo: "keyconnect", title: "KEYTHECONNECT" },
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
.overlay {
  position: absolute;
  inset: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 3;
  opacity: 0;
  background: black;
  transition-duration: 300ms;
}
.overlay:hover {
  background: linear-gradient(#ffffff 0%, #000000 100%);
  opacity: 0.8;
  mix-blend-mode: multiply;
}
.overlay:hover ~ .cardTitle {
  opacity: 1;
  color: #ffffff;
}
.cardTitle {
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
@media (max-width: 950px) {
  .cardTitle {
    font-size: 1rem;
  }
}
</style>
