<template>
  <div class="landingWrapper">
    <div class="landingTitle">
      <animated-component>
        <h1 class="title">
          Welcome to my<br />
          <div id="titleBold">Creative Safe...</div>
        </h1>
      </animated-component>
      <img
        id="profilePic"
        src="../assets/photos/profile.jpg"
        alt="Photo of Matthew Slape"
      />
    </div>
    <div class="landingNav">
      <div class="directory">
        <div class="mainDirectory">
          <a href="/#aboutUs"><h1 class="customHeader">About Me</h1></a>
          <a href="/#contact"><h1 class="customHeader">Contact</h1></a>
          <a href="/#work"><h1 class="customHeader">Work</h1></a>
        </div>
        <div class="workDirectory" id="work">
          <router-link to="/graphics"
            ><h1 class="customHeader" style="font-weight: 500">
              Graphics
            </h1></router-link
          >
          <router-link to="/ux"
            ><h1 class="customHeader" style="font-weight: 500">
              UX Design
            </h1></router-link
          >
          <router-link to="/ph"
            ><h1 class="customHeader" style="font-weight: 500">
              Photo + Video
            </h1></router-link
          >
          <router-link to="/illustration"
            ><h1 class="customHeader" style="font-weight: 500">
              Illustration
            </h1></router-link
          >
          <router-link to="/branding"
            ><h1 class="customHeader" style="font-weight: 500">
              Branding
            </h1></router-link
          >
          <router-link to="/code"
            ><h1 class="customHeader" style="font-weight: 500">
              Code
            </h1></router-link
          >
        </div>
      </div>
      <img class="swoosh1" src="../assets/svgs/swoosh1.svg" alt="decoration" />
    </div>
    <h3 class="decorType">Created to Create</h3>
  </div>
</template>
<script>
import AnimatedComponent from "../components/AnimatedComponent.vue";

export default {
  components: {
    AnimatedComponent,
  },
};
</script>

<style lang="css" scoped>
.landingWrapper {
  transform: translateY(2rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.landingTitle {
  display: flex;
  transform: translateY(8vw);
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  z-index: 2;
}
#profilePic {
  width: 30vw;
  height: inherit;
  overflow: hidden;
  border-radius: 90rem;
}
.title {
  font-size: 4.5vw;
  text-transform: none;
  font-weight: 500;
}
#titleBold {
  font-weight: 700;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  background-clip: text;
  color: transparent;
  text-transform: none;
}
/*Directory*/
.landingNav {
  transform: translateY(-16vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.swoosh1 {
  object-fit: cover;
  width: 100vw;
  min-width: 560px;
}
.directory {
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mainDirectory {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.workDirectory {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 5.5rem;
}
.customHeader {
  font-size: 4vw;
  padding: 0 3vw 0 3vw;
  text-transform: uppercase;
  line-height: 150%;
  color: white;
  transition: 0.5s ease-in-out;
}
.customHeader:hover {
  letter-spacing: 1vw;
}
.decorType {
  letter-spacing: 0.195em;
  text-transform: uppercase;
  color: #5f75a5;
  transform: rotate(-90deg);
  font-weight: 800;
  font-size: 2.5vw;

  position: absolute;
  bottom: 40vw;
  left: -13vw;
  /* margin-left: 2vw; */
  z-index: 2;
  opacity: 0.8;
}
@media (max-width: 450px) {
  .landingTitle {
    transform: translateY(0);
    justify-content: center;
  }
  #profilePic {
    width: 55vw;
  }
  .title {
    display: none;
  }
  .customHeader {
    font-size: 6vw;
  }
}

@media (max-width: 400px) {
  .customHeader {
    font-size: 7vw;
  }
}
</style>
