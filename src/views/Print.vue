<template>
  <div class="pageWrapper">
    <h1>PRINT</h1>
    <div class="projectWrapper">
      <div class="projectCard" v-for="item in list" :key="item">
        <a class="overlay" :href="`/print/${item.photo}`"></a>
        <img
          :src="
            require(`../assets/photos/print/print-cardPhoto-${item.photo}.png`)
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
        { photo: "manzanar", title: "Manzanar History Book" },
        { photo: "nikePoster", title: 'Nike "Iconic" Poster' },
        { photo: "jbPoster", title: "Jordan Burroughs Poster" },
        { photo: "lockett", title: "Tyler Lockett Poster" },
        { photo: "boeing", title: "Boeing History Book" },
        /*{ photo: "polaroid", title: "Polaroid Poster" },*/
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
.overlay {
  position: absolute;
  inset: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 3;
  opacity: 0;
  border-radius: 0.75rem;
  background: black;
  transition-duration: 300ms;
}
.overlay:hover {
  background: linear-gradient(#ffffff 0%, #000000 100%);
  border-radius: 0.75rem;
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
  color: rgb(83, 83, 83);
  opacity: 1;
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
  .overlay {
    width: 100%;
    inset: 0.5rem 0rem;
  }
  .projectWrapper {
    justify-content: center;
  }
}
@media (max-width: 750px) {
  .cardTitle {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
