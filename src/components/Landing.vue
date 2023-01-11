<template>
  <div class="landingWrapper">
    <div class="landingTitle">
      <animated-component class="titleWrapper">
        <h1 class="title">
          Welcome to my<br />
          <div id="titleBold">Creative Safe...</div>
        </h1>
      </animated-component>
      <img
        class="profilePic"
        src="../assets/photos/profile.jpeg"
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
          <a href="/code"
            ><h1 class="customHeader" style="font-weight: 500">Code</h1></a
          >
          <a href="/ux"
            ><h1 class="customHeader" style="font-weight: 500">UX Design</h1></a
          >
          <!-- TOOK OUT HREF TO DISABLE ON CODE, P+H, AND GRAPHICS-->
          <a href="/ph"
            ><h1 class="customHeader" style="font-weight: 500">
              Photo + Video
            </h1></a
          >
          <a href="/illustration"
            ><h1 class="customHeader" style="font-weight: 500">
              Illustration
            </h1></a
          >
          <a href="/branding"
            ><h1 class="customHeader" style="font-weight: 500">Branding</h1></a
          >
          <a href="/print"
            ><h1 class="customHeader" style="font-weight: 500">Print</h1></a
          >
        </div>
      </div>
      <img class="swoosh1" src="../assets/svgs/swoosh1.svg" alt="decoration" />
    </div>
    <h3 class="decorType">Created to Create</h3>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0">
    <defs>
      <filter id="squiggle">
        <feTurbulence
          type="fractalNoise"
          id="turbulence"
          baseFrequency=".2"
          numOctaves="40"
        />
        <feDisplacementMap id="displacement" in="SourceGraphic" scale="4" />
      </filter>
    </defs>
  </svg>
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
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
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
.profilePic {
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 90rem;
  filter: brightness(1.05);
  transition-duration: 0.5s;
}
.profilePic:hover {
  width: 31vw;
  height: 31vw;
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
  width: 102vw;
  min-width: 560px;
  z-index: -20;
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
  transition: 0.4s ease-in-out;
}
.customHeader:hover {
  letter-spacing: 1vw;
}
.decorType {
  letter-spacing: 0.195em;
  text-transform: uppercase;
  color: white;
  opacity: 30%;
  transform: rotate(-90deg);
  font-weight: 800;
  font-size: 2.5vw;

  position: absolute;
  bottom: 40vw;
  left: -13vw;
  /* margin-left: 2vw; */
  z-index: 2;
}

/*TEXTURE CLASS*/
.squiggle {
  filter: url(#squiggle);
}

@media (max-width: 450px) {
  .landingTitle {
    flex-direction: column-reverse;
    justify-content: center;
    transform: translateY(0);
  }
  .titleWrapper {
    min-height: 8rem;
  }
  .profilePic {
    width: 50vw;
    height: auto;
  }
  .profilePic:hover {
    width: 85vw;
    height: 85vw;
  }
  .title {
    font-size: 8vw;
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
