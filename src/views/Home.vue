<template>
  <div class="home">
    <Landing />
    <div class="aboutMeGrid">
      <h1 class="customHeaderBold aboutHeader" style="color: black">
        About Me
      </h1>
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
.aboutMeGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /*background: grey;*/
  width: 70%;
  height: 50rem;
  margin: auto;
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
