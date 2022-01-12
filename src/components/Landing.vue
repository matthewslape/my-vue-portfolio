<template>
  <div class="landingWrapper">
    <div class="landingTitle">
      <h1 class="title">
        Welcome to my<br />
        <div id="titleBold">Creative Safe...</div>
      </h1>
      <img
        id="profilePic"
        src="../assets/photos/profile.jpg"
        alt="Photo of Matthew Slape"
      />
    </div>
    <div class="landingNav">
      <div class="directory">
        <div class="directoryMain">
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
      <h3 class="decorType">Created to Create</h3>
      <img class="swoosh1" src="../assets/svgs/swoosh1.svg" alt="decoration" />
    </div>
  </div>
</template>

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
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-width: 80rem;
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
}
/*Directory*/
.landingNav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-25vw);
  z-index: 1;
}
.swoosh1 {
  object-fit: cover;
  width: 100vw;
  min-width: 430px;
}
.directory {
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.directoryMain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.workDirectory {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.customHeader {
  font-size: 4vw;
  padding: 0 3vw 0 3vw;
  text-transform: uppercase;
  line-height: 150%;
  color: white;
}
.customHeaderBold {
  font-weight: bold;
  text-transform: uppercase;
}
.decorType {
  letter-spacing: 0.195em;
  text-transform: uppercase;
  color: #5f75a5;
  transform: rotate(-90deg);
  font-weight: 800;
  font-size: 2.5vw;

  position: absolute;
  bottom: 35vw;
  left: -15vw;
  margin-left: 1rem;
  z-index: 2;
  opacity: 0.8;
}
</style>
